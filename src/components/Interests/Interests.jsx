import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";
import React from "react";
import { interests } from "../../info";
import Section from "../Section";

const Interests = () => {
  const items = interests.map((item, idx) =>
    !item.link ? (
      idx === interests.length - 1 ? (
        `${item.name}`
      ) : (
        `${item.name}, `
      )
    ) : (
      <Link href={item.link} isExternal color="teal.300" key={item.name}>
        {idx === interests.length - 1 ? `${item.name}` : `${item.name}, `}{" "}
        <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
      </Link>
    )
  );

  return (
    <Section title="I ♥">
      <Text>{items}</Text>
    </Section>
  );
};

export default Interests;
