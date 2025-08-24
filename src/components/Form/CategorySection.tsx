import React from "react";
import styled from "styled-components";

interface CategorySectionProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  selectedCategory,
  onCategoryChange,
}) => {
  return (
    <Container>
      <CategoryButton>
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">카테고리 선택</option>
          <option value="교통">교통</option>
          <option value="건설">건설</option>
          <option value="안전">안전</option>
          <option value="기타">기타</option>
        </select>
      </CategoryButton>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin-bottom: 20px;
`;

const CategoryButton = styled.div`
  select {
    background-color: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    padding: 12px 16px;
    width: 100%;
    color: #374151;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;

    &:focus {
      outline: none;
      border-color: #3b82f6;
      background-color: #ffffff;
    }

    &:hover {
      border-color: #d1d5db;
    }
  }
`;

export default CategorySection;
