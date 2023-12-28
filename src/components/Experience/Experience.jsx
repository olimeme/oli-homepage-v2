import {
  Card,
  HStack,
  Heading,
  List,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { experience } from "../../info";
import Section from "../Section/Section";

const Experience = () => {
  const listItems = experience.map((item) => (
    <ListItem key={item.title}>
      <HStack spacing={"auto"}>
        <Heading fontSize={"lg"}>{item.employer}</Heading>
        <Text fontSize={"sm"} as="i" color="grey">
          {item.time}
        </Text>
      </HStack>
      <Text>{item.title}</Text>
      <UnorderedList>
        {item.description.map((item) => (
          <ListItem
            color="grey"
            fontSize={"xs"}
            textAlign={"justify"}
            key={item.length + Math.random()}
          >
            {item}
          </ListItem>
        ))}
      </UnorderedList>
    </ListItem>
  ));

  return (
    <Section title="Experience">
      <UnorderedList spacing={6} styleType={"none"} m={0}>
        {listItems}
      </UnorderedList>
    </Section>
  );
};

export default Experience;
