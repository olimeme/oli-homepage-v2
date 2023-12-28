import { ExternalLinkIcon } from "@chakra-ui/icons";
import { HStack, Link, Tag, Text, Wrap } from "@chakra-ui/react";
import React from "react";
import { techStack } from "../../info";
import Section from "../Section";

const Skills = () => {
  const badges = techStack.map((item) => (
    <Tag size="sm" variant={"solid"} colorScheme={"gray"} key={item.title}>
      {item.title}
    </Tag>
  ));

  return (
    <Section title="Skills">
      <Wrap>{badges}</Wrap>
    </Section>
  );
};

export default Skills;
