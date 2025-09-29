import type { AlertColor } from '@mui/material';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useToastStore } from '../stores/useToastStore';

interface LocationState {
  toastMessage?: string;
  toastSeverity?: AlertColor;
}

const useLocationToast = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const showToast = useToastStore((s) => s.showToast);

  useEffect(() => {
    const state = location.state as LocationState;

    if (state?.toastMessage) {
      showToast(state.toastMessage, state.toastSeverity || 'info');

      navigate('.', { replace: true, state: {} });
    }
  }, [location, navigate, showToast]);
};

export default useLocationToast;
