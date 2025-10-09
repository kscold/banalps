import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IAdmin extends Document {
  username: string;
  password: string; // 해시된 비밀번호
  role: 'admin';
  createdAt: Date;
  updatedAt: Date;
}

const AdminSchema = new Schema<IAdmin>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'admin',
      enum: ['admin'],
    },
  },
  {
    timestamps: true,
  },
);

// username은 unique: true로 이미 인덱스 생성됨

const Admin: Model<IAdmin> = mongoose.models.Admin || mongoose.model<IAdmin>('Admin', AdminSchema);

export default Admin;
