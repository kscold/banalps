import React from "react";
import styled from "styled-components";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: "success" | "error" | "info";
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = "success",
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader type={type}>
          <ModalIcon>
            {type === "success" && "✅"}
            {type === "error" && "❌"}
            {type === "info" && "ℹ️"}
          </ModalIcon>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>

        <ModalBody>
          <ModalMessage>{message}</ModalMessage>
        </ModalBody>

        <ModalFooter>
          <CloseButton onClick={onClose}>확인</CloseButton>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

// Styled Components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 0;
  max-width: 380px;
  width: 90%;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  animation: slideIn 0.2s ease-out;

  @keyframes slideIn {
    from {
      transform: translateY(-10px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ModalHeader = styled.div<{ type: string }>`
  background: ${(props) => {
    switch (props.type) {
      case "success":
        return "#10b981";
      case "error":
        return "#ef4444";
      case "info":
        return "#3b82f6";
      default:
        return "#10b981";
    }
  }};
  color: white;
  padding: 20px 20px 16px;
  border-radius: 8px 8px 0 0;
  text-align: center;
`;

const ModalIcon = styled.div`
  font-size: 32px;
  margin-bottom: 8px;
`;

const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
`;

const ModalBody = styled.div`
  padding: 20px;
`;

const ModalMessage = styled.p`
  color: #374151;
  font-size: 14px;
  line-height: 1.5;
  text-align: center;
  margin: 0;
`;

const ModalFooter = styled.div`
  padding: 0 20px 20px;
  display: flex;
  justify-content: center;
`;

const CloseButton = styled.button`
  background: #f3f4f6;
  color: #374151;
  border: none;
  border-radius: 6px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #e5e7eb;
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Modal;
