import { Box, Heading } from "@chakra-ui/react";
import React from "react";

const Section = ({ children, title }) => {
  return (
    <Box my={16}>
      <Heading fontSize="2xl" mb={3}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default Section;
