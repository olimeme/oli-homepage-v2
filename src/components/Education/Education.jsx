import React from "react";
import Section from "../Section";
import {
  HStack,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { education } from "../../info";

const Education = () => {
  const listItems = education.map((item) => (
    <ListItem key={item.university}>
      <HStack spacing={"auto"}>
        <Heading fontSize={"lg"}>{item.university}</Heading>
        <Text fontSize={"sm"} as="i" color="grey">
          {item.time}
        </Text>
      </HStack>
      <Text fontSize={"xs"} as="i" color="grey">
        {item.degree} - {item.GPA}
      </Text>
    </ListItem>
  ));
  return (
    <Section title="Education">
      {" "}
      <UnorderedList spacing={4} styleType={"none"} m={0}>
        {listItems}
      </UnorderedList>
    </Section>
  );
};

export default Education;
