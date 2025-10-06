import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  provider: 'kakao' | 'google' | 'naver';
  providerId: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false, // 카카오는 이메일이 없을 수 있음
      unique: true,
      sparse: true, // null 값 허용하면서 unique 유지
    },
    image: {
      type: String,
    },
    provider: {
      type: String,
      enum: ['kakao', 'google', 'naver'],
      required: true,
    },
    providerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 복합 인덱스: provider와 providerId 조합으로 유니크하게
UserSchema.index({ provider: 1, providerId: 1 }, { unique: true });

export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
