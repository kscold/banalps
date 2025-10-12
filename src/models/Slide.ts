import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ISlide extends Document {
  id: number;
  category: string; // 예: 'forehead/hair-transplant', 'hair-transplant/crown'
  beforeImage: string;
  afterImage: string;
  scale: number; // 이미지 확대 비율 (1.0 = 100%)
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const SlideSchema = new Schema<ISlide>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      required: true,
    },
    beforeImage: {
      type: String,
      required: true,
    },
    afterImage: {
      type: String,
      required: true,
    },
    scale: {
      type: Number,
      required: true,
      default: 1.0,
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

// 카테고리별 인덱스
SlideSchema.index({ category: 1, order: 1 });

const Slide: Model<ISlide> = mongoose.models.Slide || mongoose.model<ISlide>('Slide', SlideSchema);

export default Slide;
