import type { AlertColor } from '@mui/material';

import { useToastStore } from '../stores/useToastStore';

const useGlobalToast = () => {
  const showToast = useToastStore((s) => s.showToast);
  return (msg: string, severity?: AlertColor) => showToast(msg, severity);
};

export default useGlobalToast;
