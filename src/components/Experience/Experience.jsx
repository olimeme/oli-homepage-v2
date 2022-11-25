import {
  Card,
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
      <Heading fontSize={"lg"}>{item.title}</Heading>
      <Text fontSize={"sm"} as="i" color="grey">
        {item.time}
      </Text>
      <List spacing={1}>
        {item.description.map((item) => (
          <ListItem>- {item}</ListItem>
        ))}
      </List>
    </ListItem>
  ));

  return (
    <Section title="Experience">
      <UnorderedList spacing={5}>{listItems}</UnorderedList>
    </Section>
  );
};

export default Experience;
