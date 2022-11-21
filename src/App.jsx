import { Button, Center, Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <Container maxW={500}>
      <Navbar />
      <AnimatedRoutes />
    </Container>
  );
}

export default App;
