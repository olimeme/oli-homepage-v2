import {
  Card,
  Heading,
  HStack,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { biography } from "../../info";
import Section from "../Section/Section";

const Biography = () => {
  const listItems = biography.map((item) => (
    <ListItem key={item.year}>
      <HStack spacing={5}>
        <Heading fontSize={"lg"}>{item.year}</Heading>
        <Text>{item.description}</Text>
      </HStack>
    </ListItem>
  ));

  return (
    <Section title="Biography">
      <UnorderedList spacing={3} ml={0} listStyleType="none">
        {listItems}
      </UnorderedList>
    </Section>
  );
};

export default Biography;
