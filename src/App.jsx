import { Container } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

function App() {
  return (
    <Container maxW={900}>
      <Navbar />
      <Main />
    </Container>
  );
}

export default App;
