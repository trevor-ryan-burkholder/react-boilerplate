import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Typography, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ConfirmationModal = ({
  open,
  onClose,
  onConfirm,
  message,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="confirmation-modal-title"
      aria-describedby="confirmation-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography id="confirmation-modal-title" variant="h6" component="h2">
          Confirm Action
        </Typography>
        <Typography id="confirmation-modal-description" sx={{ mt: 2 }}>
          {message}
        </Typography>
        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button
            startIcon={<CloseIcon />}
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={{ mr: 1 }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={onConfirm}
            startIcon={<CheckBoxIcon />}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmationModal;
