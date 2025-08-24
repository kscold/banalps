import React from "react";
import styled from "styled-components";

interface ImageUploadSectionProps {
  onImageSelect: (file: File) => void;
}

const ImageUploadSection: React.FC<ImageUploadSectionProps> = ({
  onImageSelect,
}) => {
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageSelect(file);
    }
  };

  return (
    <Container>
      <ImageUploadButton>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="image-upload"
        />
        <label htmlFor="image-upload">
          <UploadIcon>📷</UploadIcon>
          경고문 이미지 업로드
        </label>
      </ImageUploadButton>
      <FileSizeText>최대 10MB</FileSizeText>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
`;

const ImageUploadButton = styled.div`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 12px 16px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #f3f4f6;
    border-color: #d1d5db;
  }

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    color: #374151;
    font-weight: 500;
    font-size: 14px;
  }
`;

const UploadIcon = styled.span`
  font-size: 16px;
`;

const FileSizeText = styled.span`
  color: #9ca3af;
  font-size: 12px;
`;

export default ImageUploadSection;
