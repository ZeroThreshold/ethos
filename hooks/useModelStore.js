import { create } from "zustand";

export const useModelStore = create((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data) => {
    set({ isOpen: true, type, data });
  },
  onClose: () => {
    set({ type: null, isOpen: false });
  },
}));
