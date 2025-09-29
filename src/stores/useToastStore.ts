import type { AlertColor } from '@mui/material';
import { create } from 'zustand';

type ToastState = {
  message: string | null;
  severity: AlertColor;
  showToast: (msg: string, severity?: AlertColor) => void;
  clearToast: () => void;
};

const useToastStore = create<ToastState>((set) => ({
  message: null,
  severity: 'info',
  showToast: (msg, severity = 'info') => set({ message: msg, severity }),
  clearToast: () => set({ message: null }),
}));

export { useToastStore, type ToastState };
