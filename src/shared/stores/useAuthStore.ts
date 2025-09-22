import { create } from 'zustand';

type ModalView = 'login' | 'signup-complete' | 'login-complete';

interface AuthStore {
  isLoginModalOpen: boolean;
  modalView: ModalView;
  isNewUser: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  toggleLoginModal: () => void;
  setModalView: (view: ModalView) => void;
  setIsNewUser: (isNew: boolean) => void;
  showLoginSuccess: () => void;
  showSignupSuccess: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginModalOpen: false,
  modalView: 'login',
  isNewUser: false,
  openLoginModal: () => set({ isLoginModalOpen: true, modalView: 'login' }),
  closeLoginModal: () => set({ isLoginModalOpen: false, modalView: 'login' }),
  toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  setModalView: (view: ModalView) => set({ modalView: view }),
  setIsNewUser: (isNew: boolean) => set({ isNewUser: isNew }),
  showLoginSuccess: () => set({ modalView: 'login-complete' }),
  showSignupSuccess: () => set({ modalView: 'signup-complete' }),
}));