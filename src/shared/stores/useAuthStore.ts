import { create } from 'zustand';

type ModalView = 'login' | 'signup';

interface AuthStore {
  isLoginModalOpen: boolean;
  modalView: ModalView;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  toggleLoginModal: () => void;
  setModalView: (view: ModalView) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isLoginModalOpen: false,
  modalView: 'login',
  openLoginModal: () => set({ isLoginModalOpen: true, modalView: 'login' }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  toggleLoginModal: () => set((state) => ({ isLoginModalOpen: !state.isLoginModalOpen })),
  setModalView: (view: ModalView) => set({ modalView: view }),
}));