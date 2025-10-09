import mongoose, { Document, Model, Schema } from 'mongoose';

export type PopupPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

export interface IPopup extends Document {
  id: number;
  title: string; // 한국어 제목
  titleJp?: string; // 일본어 제목
  content?: string; // 텍스트 내용 (선택적)
  contentJp?: string; // 일본어 텍스트 내용 (선택적)
  imageUrl?: string; // 이미지 URL (선택적)
  isActive: boolean; // 활성화 여부
  order: number; // 표시 순서 (여러 개일 때 순서)
  position: PopupPosition; // 팝업 표시 위치
  createdAt: Date;
  updatedAt: Date;
}

const PopupSchema = new Schema<IPopup>(
  {
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      required: true,
    },
    titleJp: {
      type: String,
      required: false,
    },
    content: {
      type: String,
      required: false,
    },
    contentJp: {
      type: String,
      required: false,
    },
    imageUrl: {
      type: String,
      required: false,
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true,
    },
    order: {
      type: Number,
      required: true,
      default: 0,
    },
    position: {
      type: String,
      enum: [
        'top-left',
        'top-center',
        'top-right',
        'center-left',
        'center',
        'center-right',
        'bottom-left',
        'bottom-center',
        'bottom-right',
      ],
      required: true,
      default: 'center',
    },
  },
  {
    timestamps: true,
  },
);

// 활성화 상태 + 순서 복합 인덱스
PopupSchema.index({ isActive: 1, order: 1 });

const Popup: Model<IPopup> = mongoose.models.Popup || mongoose.model<IPopup>('Popup', PopupSchema);

export default Popup;
