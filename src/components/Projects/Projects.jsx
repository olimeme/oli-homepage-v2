import {
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Spacer,
  Tag,
  Text,
  IconButton,
  Wrap,
  Flex,
  Grid,
  GridItem,
  CardFooter,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import Section from "../Section/Section";
import { projects } from "../../info";

const Projects = () => {
  const items = projects.map((item) => (
    <Card key={item.title} s>
      <CardBody>
        <Link href={item.link} isExternal>
          <Heading size={"md"}>{item.title}</Heading>
        </Link>
        <Text fontSize={"xs"} color={"gray"} mt={2}>
          {item.description}
        </Text>
      </CardBody>
      <CardFooter mt={-8}>
        <Wrap pt={2}>
          {item.stack.map((item) => (
            <Tag size="sm" colorScheme={"gray"} mt={1}>
              {item.name}
            </Tag>
          ))}
        </Wrap>
      </CardFooter>
    </Card>
  ));

  return (
    <Section title="Projects">
      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        {items}
      </Grid>
    </Section>
  );
};

export default Projects;
