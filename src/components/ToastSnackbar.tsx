import { Snackbar, Alert } from '@mui/material';

import { useToastStore } from '../stores/useToastStore';

const ToastSnackbar = () => {
  const { message, severity, clearToast } = useToastStore();

  return (
    <Snackbar
      open={Boolean(message)}
      autoHideDuration={4000}
      onClose={clearToast}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <Alert severity={severity} onClose={clearToast}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default ToastSnackbar;
