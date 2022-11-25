import React, { useEffect } from "react";
import { Button, Center, Container, useDisclosure } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import Biography from "../Biography";
import Experience from "../Experience";
import Interests from "../Interests";
import Socials from "../Socials";
import Footer from "../Footer";
import { motion } from "framer-motion";

const Main = () => {
  const { onToggle } = useDisclosure();

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <Biography />
      <Center>
        <Link to={"/portfolio"}>
          <Button
            mt={10}
            colorScheme="teal"
            rightIcon={<ArrowForwardIcon />}
            onClick={onToggle}
            boxShadow={"xl"}
          >
            My Portfolio
          </Button>
        </Link>
      </Center>
      {/* <Projects /> */}
      <Experience />
      <Interests />
      <Socials />
      <Footer />
    </motion.div>
  );
};

export default Main;
