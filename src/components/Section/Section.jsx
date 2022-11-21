import { Card, Heading } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, title }) => {
  return (
    <Card mt={10} p={5} boxShadow="xl" colorScheme={"blue"}>
      <Heading fontSize="3xl" mb={5}>
        {title}
      </Heading>
      {children}
    </Card>
  );
};

export default Section;
