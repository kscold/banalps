import mongoose, { Document, Model, Schema } from 'mongoose';

export type Category = '이마축소' | '흉터&재수술' | '헤어라인(남성)' | '헤어라인(여성)' | '정수리';

export interface IBeforeAfter extends Document {
  id: number;
  category: Category;
  title?: string;
  titleJp?: string; // 일본어 타이틀
  description?: string;
  descriptionJp?: string; // 일본어 설명
  beforeImage: string;
  afterImage: string;
  order: number; // 카테고리 내 순서
  createdAt: Date;
  updatedAt: Date;
}

const BeforeAfterSchema = new Schema<IBeforeAfter>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['이마축소', '흉터&재수술', '헤어라인(남성)', '헤어라인(여성)', '정수리'],
    },
    title: {
      type: String,
      required: false,
    },
    titleJp: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    descriptionJp: {
      type: String,
      required: false,
    },
    beforeImage: {
      type: String,
      required: true,
    },
    afterImage: {
      type: String,
      required: true,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// 카테고리+순서 복합 인덱스 (id는 unique: true로 이미 인덱스 생성됨)
BeforeAfterSchema.index({ category: 1, order: 1 });

const BeforeAfter: Model<IBeforeAfter> =
  mongoose.models.BeforeAfter || mongoose.model<IBeforeAfter>('BeforeAfter', BeforeAfterSchema);

export default BeforeAfter;
