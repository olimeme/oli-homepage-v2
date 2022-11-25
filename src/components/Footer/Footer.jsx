import { Center, Spacer, Text, Link } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center p={10}>
      <Text fontSize={"sm"} color="grey">
        © 2022 <Link href="https://github.com/olimeme">Alibek Mombekov</Link>.
        All Rights Reserved.
      </Text>
    </Center>
  );
};

export default Footer;
