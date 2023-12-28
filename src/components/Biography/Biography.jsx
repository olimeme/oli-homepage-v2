import { Text } from "@chakra-ui/react";
import React from "react";
import Section from "../Section/Section";

const Biography = () => {
  return (
    <Section title="About me">
      <Text fontSize={"sm"} color={"gray"} textAlign={"justify"}>
        I'm a frontend developer with UI/UX Design experience and a passion for
        building aethetically clean and functional websites. I'm currently a
        student at the Dublin City University studying Secure Software
        Engineering. I'm currently looking for a full-time/part-time/internship
        position as a frontend developer.
      </Text>
    </Section>
  );
};

export default Biography;
