import React from "react";
import styled from "styled-components";
import ImageUploadSection from "./ImageUploadSection";
import CategorySection from "./CategorySection";
import NicknameSection from "./NicknameSection";

interface WarningSignFormProps {
  selectedImage: File | null;
  selectedCategory: string;
  nickname: string;
  isAnonymous: boolean;
  onImageSelect: (file: File) => void;
  onCategoryChange: (category: string) => void;
  onNicknameChange: (nickname: string) => void;
  onAnonymousChange: (isAnonymous: boolean) => void;
  onSubmit: () => void;
}

const WarningSignForm: React.FC<WarningSignFormProps> = ({
  selectedImage,
  selectedCategory,
  nickname,
  isAnonymous,
  onImageSelect,
  onCategoryChange,
  onNicknameChange,
  onAnonymousChange,
  onSubmit,
}) => {
  return (
    <FormCard>
      <Title>골목의 다양한 경고문을 기다립니다.</Title>

      <Instructions>
        <p>여러분들이 보고 찍은 경고문을 보내주세요.</p>
        <p>순차적으로 확인 후 부착하겠습니다.</p>
        <p>중복된 경고문은 부착되지 않으니 미리 검색해서 확인해 주세요.</p>
      </Instructions>

      <ImageUploadSection onImageSelect={onImageSelect} />

      <CategorySection
        selectedCategory={selectedCategory}
        onCategoryChange={onCategoryChange}
      />

      <NicknameSection
        nickname={nickname}
        isAnonymous={isAnonymous}
        onNicknameChange={onNicknameChange}
        onAnonymousChange={onAnonymousChange}
      />

      <SubmitButton onClick={onSubmit}>제보하기</SubmitButton>
    </FormCard>
  );
};

// Styled Components
const FormCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  max-width: 480px;
  width: 100%;
`;

const Title = styled.h1`
  color: #1f2937;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  line-height: 1.3;
`;

const Instructions = styled.div`
  margin-bottom: 24px;

  p {
    color: #6b7280;
    font-size: 14px;
    line-height: 1.5;
    margin: 4px 0;
    text-align: center;
  }
`;

const SubmitButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 14px 24px;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #2563eb;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default WarningSignForm;
