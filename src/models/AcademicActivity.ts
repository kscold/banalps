import mongoose, { Document, Model, Schema } from 'mongoose';

export type ActivityType = '발표' | '논문' | '저널' | '수상' | '연구' | '역서';

export interface IAcademicActivity extends Document {
  id: number;
  year: number;
  date: string;
  type: ActivityType;
  event: {
    ko: string;
    jp: string;
  };
  title: {
    ko: string;
    jp: string;
  };
  order: number; // 연도 내 순서
  createdAt: Date;
  updatedAt: Date;
}

const AcademicActivitySchema = new Schema<IAcademicActivity>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    year: {
      type: Number,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['발표', '논문', '저널', '수상', '연구', '역서'],
    },
    event: {
      ko: {
        type: String,
        required: true,
      },
      jp: {
        type: String,
        required: true,
      },
    },
    title: {
      ko: {
        type: String,
        required: true,
      },
      jp: {
        type: String,
        required: true,
      },
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

// 연도+순서 복합 인덱스
AcademicActivitySchema.index({ year: -1, order: 1 });

const AcademicActivity: Model<IAcademicActivity> =
  mongoose.models.AcademicActivity || mongoose.model<IAcademicActivity>('AcademicActivity', AcademicActivitySchema);

export default AcademicActivity;
