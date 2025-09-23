# 소셜 로그인 설정 가이드

## 1. MongoDB Atlas 설정
1. [MongoDB Atlas](https://www.mongodb.com/atlas) 접속
2. 클러스터 생성 또는 기존 클러스터 사용
3. Database Access에서 사용자 생성
4. Network Access에서 IP 주소 추가 (0.0.0.0/0 으로 모든 IP 허용 가능)
5. Connect 버튼 클릭 → Connect your application 선택
6. Connection String 복사하여 `.env.local`의 `MONGODB_URI`에 붙여넣기

## 2. Google OAuth 설정

### Google Cloud Console 설정
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. 왼쪽 메뉴에서 "API 및 서비스" → "사용자 인증 정보" 클릭
4. "사용자 인증 정보 만들기" → "OAuth 클라이언트 ID" 선택
5. 애플리케이션 유형: "웹 애플리케이션" 선택
6. 이름 입력
7. 승인된 JavaScript 출처:
   - `http://localhost:3000` (개발용)
   - `https://yourdomain.com` (프로덕션)
8. 승인된 리디렉션 URI:
   - `http://localhost:3000/api/auth/callback/google` (개발용)
   - `https://yourdomain.com/api/auth/callback/google` (프로덕션)
9. 생성된 클라이언트 ID와 시크릿을 `.env.local`에 저장

## 3. Kakao OAuth 설정

### Kakao Developers 설정
1. [Kakao Developers](https://developers.kakao.com/) 접속
2. 애플리케이션 생성
3. 앱 설정 → 플랫폼 → Web 플랫폼 등록
   - 사이트 도메인: `http://localhost:3000` (개발), `https://yourdomain.com` (프로덕션)
4. 제품 설정 → 카카오 로그인 활성화
5. 카카오 로그인 → Redirect URI 등록:
   - `http://localhost:3000/api/auth/callback/kakao` (개발용)
   - `https://yourdomain.com/api/auth/callback/kakao` (프로덕션)
6. 제품 설정 → 카카오 로그인 → 동의항목에서 필요한 정보 설정
7. 앱 키 → REST API 키를 `KAKAO_CLIENT_ID`로 사용
8. 제품 설정 → 카카오 로그인 → 보안 → Client Secret 생성하여 `KAKAO_CLIENT_SECRET`에 저장

## 4. Naver OAuth 설정

### Naver Developers 설정
1. [Naver Developers](https://developers.naver.com/) 접속
2. 애플리케이션 등록 → 애플리케이션 등록 (API 이용신청)
3. 애플리케이션 이름, 사용 API (네이버 로그인) 선택
4. 서비스 환경:
   - PC 웹 선택
   - 서비스 URL: `http://localhost:3000` (개발), `https://yourdomain.com` (프로덕션)
5. 네이버 로그인 Callback URL:
   - `http://localhost:3000/api/auth/callback/naver` (개발용)
   - `https://yourdomain.com/api/auth/callback/naver` (프로덕션)
6. 생성된 Client ID와 Client Secret을 `.env.local`에 저장

## 5. NextAuth Secret 생성

터미널에서 다음 명령어를 실행하여 안전한 secret 생성:

```bash
openssl rand -base64 32
```

생성된 값을 `.env.local`의 `NEXTAUTH_SECRET`과 `JWT_SECRET`에 저장

## 6. 환경 변수 설정 완료 예시

`.env.local` 파일:

```env
# MongoDB Atlas (이미 설정됨)
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=GOCSPX-your-google-client-secret

# Kakao OAuth
KAKAO_CLIENT_ID=your-kakao-rest-api-key
KAKAO_CLIENT_SECRET=your-kakao-client-secret

# Naver OAuth
NAVER_CLIENT_ID=your-naver-client-id
NAVER_CLIENT_SECRET=your-naver-client-secret

# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-generated-secret-here

# JWT Secret
JWT_SECRET=your-generated-jwt-secret-here
```

## 7. 테스트

1. 개발 서버 실행:
```bash
npm run dev
```

2. 브라우저에서 `http://localhost:3000` 접속
3. 로그인 모달 열기
4. 각 소셜 로그인 버튼 클릭하여 테스트
5. MongoDB Atlas에서 사용자 정보가 저장되었는지 확인

## 주의사항

- 프로덕션 배포 시 모든 URL을 실제 도메인으로 변경
- `.env.local` 파일은 절대 Git에 커밋하지 않기
- 각 소셜 플랫폼의 OAuth 설정 페이지에서 프로덕션 URL 추가 필요