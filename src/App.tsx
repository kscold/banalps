import React, { useState } from "react";
import styled from "styled-components";
import WarningSignForm from "./components/Form/WarningSignForm";
import Modal from "./components/Modal/Modal";

function App() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [isAnonymous, setIsAnonymous] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleImageSelect = (file: File) => {
    setSelectedImage(file);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNicknameChange = (nickname: string) => {
    setNickname(nickname);
  };

  const handleAnonymousChange = (isAnonymous: boolean) => {
    setIsAnonymous(isAnonymous);
  };

  const handleSubmit = () => {
    // 폼 유효성 검사
    if (!selectedImage) {
      alert("이미지를 선택해주세요.");
      return;
    }

    if (!selectedCategory) {
      alert("카테고리를 선택해주세요.");
      return;
    }

    if (!isAnonymous && !nickname.trim()) {
      alert("닉네임을 입력하거나 익명 제보를 선택해주세요.");
      return;
    }

    // 제출 로직
    console.log("제출된 데이터:", {
      image: selectedImage,
      category: selectedCategory,
      nickname: isAnonymous ? "익명" : nickname,
      isAnonymous,
    });

    // 모달 열기
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // 폼 초기화
    setSelectedImage(null);
    setSelectedCategory("");
    setNickname("");
    setIsAnonymous(false);
  };

  return (
    <AppContainer>
      <WarningSignForm
        selectedImage={selectedImage}
        selectedCategory={selectedCategory}
        nickname={nickname}
        isAnonymous={isAnonymous}
        onImageSelect={handleImageSelect}
        onCategoryChange={handleCategoryChange}
        onNicknameChange={handleNicknameChange}
        onAnonymousChange={handleAnonymousChange}
        onSubmit={handleSubmit}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        title="제보 완료!"
        message="경고문 제보가 성공적으로 완료되었습니다. 검토 후 부착하겠습니다."
        type="success"
      />
    </AppContainer>
  );
}

// Styled Components
const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default App;
