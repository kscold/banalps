import React from "react";
import styled from "styled-components";

interface NicknameSectionProps {
  nickname: string;
  isAnonymous: boolean;
  onNicknameChange: (nickname: string) => void;
  onAnonymousChange: (isAnonymous: boolean) => void;
}

const NicknameSection: React.FC<NicknameSectionProps> = ({
  nickname,
  isAnonymous,
  onNicknameChange,
  onAnonymousChange,
}) => {
  return (
    <Container>
      <NicknameInstructions>
        <p>제보받은 경고문일 경우 제보자의 닉네임을 함께 적고 있어요.</p>
        <p>원치 않으시면 익명 제보를 선택해 주세요.</p>
      </NicknameInstructions>

      <NicknameInputSection>
        <NicknameInput
          type="text"
          placeholder="닉네임 입력"
          value={nickname}
          onChange={(e) => onNicknameChange(e.target.value)}
          disabled={isAnonymous}
        />
        <AnonymousCheckbox>
          <input
            type="checkbox"
            id="anonymous"
            checked={isAnonymous}
            onChange={(e) => onAnonymousChange(e.target.checked)}
          />
          <label htmlFor="anonymous">익명 제보</label>
        </AnonymousCheckbox>
      </NicknameInputSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  margin-bottom: 20px;
`;

const NicknameInstructions = styled.div`
  margin-bottom: 12px;

  p {
    color: #6b7280;
    font-size: 13px;
    line-height: 1.4;
    margin: 3px 0;
  }
`;

const NicknameInputSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NicknameInput = styled.input`
  flex: 1;
  border: none;
  border-bottom: 1px solid #d1d5db;
  padding: 8px 0;
  font-size: 14px;
  background: transparent;

  &:focus {
    outline: none;
    border-bottom-color: #3b82f6;
  }

  &:disabled {
    color: #9ca3af;
    border-bottom-color: #e5e7eb;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const AnonymousCheckbox = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;

  input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
    accent-color: #3b82f6;
  }

  label {
    color: #374151;
    font-size: 13px;
    cursor: pointer;
  }
`;

export default NicknameSection;
