import { Center, Spacer, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center p={10}>
      <Text fontSize={"sm"} color="grey">
        © {new Date().getFullYear()}{" "}
        <Link href="https://github.com/olimeme">Alibek Mombekov</Link>. All
        Rights Reserved.
      </Text>
    </Center>
  );
};

export default Footer;
