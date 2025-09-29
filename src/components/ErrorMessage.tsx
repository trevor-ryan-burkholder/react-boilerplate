import { Button, Container, Paper, Typography } from '@mui/material';

const ErrorMessage = ({ messages }: { messages: string[] }) => (
  <Container maxWidth="lg" sx={{ mt: 4, textAlign: 'center' }}>
    <Paper sx={{ p: 2 }}>
      <Typography variant="h2">Error</Typography>
      <Typography>
        We&apos;re having trouble processing your request. Please try again or contact support if
        the issue persists.
      </Typography>
      {messages.length > 0 && (
        <Typography variant="h6" sx={{ mt: 3 }}>
          Error Messages:
        </Typography>
      )}
      {messages.map((message, index) => (
        <Typography key={index} color="error">
          {message}
        </Typography>
      ))}
      <Button variant="contained" onClick={() => window.location.reload()} sx={{ mt: 4 }}>
        Retry
      </Button>
    </Paper>
  </Container>
);

export default ErrorMessage;
