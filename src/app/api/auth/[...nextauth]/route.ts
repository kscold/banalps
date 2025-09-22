import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

// 환경변수 확인
console.log("[NextAuth] Kakao Config:", {
  clientId: process.env.KAKAO_CLIENT_ID,
  clientSecret: process.env.KAKAO_CLIENT_SECRET,
});

const authOptions: NextAuthOptions = {
  debug: true,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
      // 카카오 프로필 응답 커스터마이징
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      profile(profile: any) {
        return {
          id: String(profile.id),
          name: profile.properties?.nickname || profile.kakao_account?.profile?.nickname || "카카오사용자",
          email: profile.kakao_account?.email || `kakao_${profile.id}@kakao.local`,
          image: profile.properties?.profile_image || profile.kakao_account?.profile?.profile_image_url || null,
        };
      },
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async signIn({ user, account, profile }: any) {
      if (!account || !profile) return false;

      try {
        await connectDB();

        // 디버깅용 로그
        console.log("[OAuth] Provider:", account.provider);
        console.log("[OAuth] User data:", user);
        console.log("[OAuth] Profile data:", profile);

        // 사용자 정보 추출
        let email = user.email || "";
        let name = user.name || "";

        // 네이버의 경우 profile.response에서 이름 가져오기
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (account.provider === "naver" && (profile as any).response) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          console.log("[OAuth/Naver] Response data:", (profile as any).response);
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          name = (profile as any).response.name || (profile as any).response.nickname || email.split("@")[0];
        }

        // 카카오의 경우 이메일이 없을 수 있음
        if (account.provider === "kakao") {
          // 카카오는 이메일이 없으면 kakao_id@kakao.user로 생성
          if (!email) {
            email = `${account.providerAccountId}@kakao.user`;
          }
          // 이름이 없으면 닉네임 사용
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          if (!name && (profile as any).properties) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            name = (profile as any).properties.nickname || "카카오사용자";
          }
        }

        // 이름이 여전히 없으면 이메일의 앞부분 사용
        if (!name) {
          name = email.split("@")[0];
        }

        console.log("[OAuth] Final data - email:", email, "name:", name);

        const image = user.image || "";
        const provider = account.provider as "google" | "kakao" | "naver";
        const providerId = account.providerAccountId;

        // 기존 사용자 확인
        const existingUser = await User.findOne({ email });

        if (existingUser) {
          // 기존 사용자 정보 업데이트
          await User.findOneAndUpdate(
            { email },
            {
              name,
              image,
              provider,
              providerId,
            }
          );
          console.log(`[OAuth/${provider}] Existing user ${email} logged in`);
        } else {
          // 신규 사용자 생성
          await User.create({
            email,
            name,
            image,
            provider,
            providerId,
          });
          console.log(`[OAuth/${provider}] New user ${email} created`);
          // 신규 가입 플래그 설정
          user.isNewUser = true;
        }

        return true;
      } catch (error) {
        console.error("[OAuth] Error saving user:", error);
        return false;
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      if (session.user?.email) {
        await connectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user = {
            ...session.user,
            id: dbUser._id.toString(),
          };
        }
      }
      // 신규 가입 여부 전달
      if (token?.isNewUser) {
        session.isNewUser = token.isNewUser;
      }
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async jwt({ token, user, account, isNewUser }) {
      if (user) {
        token.id = user.id;
        token.isNewUser = isNewUser || false;
      }
      return token;
    },
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  events: {
    signIn: async (message) => {
      console.log("[NextAuth Event] Sign in:", message);
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };