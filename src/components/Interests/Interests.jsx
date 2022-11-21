import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";
import React from "react";
import Section from "../Section";

const Interests = () => {
  return (
    <Section title="I ♥">
      <Text>
        Music, Games, Running, Fitness, Podcasts, Coffee,{" "}
        <Link
          href="https://soundcloud.com/ilo_beats"
          isExternal
          color="teal.300"
        >
          Beatmaking <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
        </Link>
      </Text>
    </Section>
  );
};

export default Interests;
