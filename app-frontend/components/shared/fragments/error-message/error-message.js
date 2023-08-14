import { Container, Text } from "./error-message.styles";

const ErrorMessage = () => {

  return (
    <Container className="error-container">
      <Text className="error-text">Error - Server is not responding</Text>
    </Container>
  );
}

export default ErrorMessage;
