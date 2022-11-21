import { Container } from "@chakra-ui/react";
import Biography from "./components/Biography";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Socials from "./components/Socials";

function App() {
  return (
    <Container maxW={500}>
      <Navbar />
      <Biography />
      {/* <Projects /> */}
      {/* <Experience /> */}
      <Interests />
      <Socials />
      <Footer />
    </Container>
  );
}

export default App;
