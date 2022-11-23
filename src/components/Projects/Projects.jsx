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
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { FaHeading } from "react-icons/fa";
import Section from "../Section/Section";
import { useNavigate } from "react-router";
import { ArrowLeftIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { projects } from "../../info";

const Projects = () => {
  const navigate = useNavigate();

  const items = projects.map((item) => (
    <Card boxShadow={"none"}>
      <CardBody>
        <Link href={item.link}>
          <Image src={item.img}></Image>
        </Link>
        <Wrap pt={2}>
          <Heading fontSize={"xl"} mt={2} mr={10}>
            {item.title}
          </Heading>
          {item.stack.map((item) => (
            <Tag size="sm" variant={"solid"} colorScheme={item.color} mt={1}>
              {item.name}
            </Tag>
          ))}
        </Wrap>
        <Text mt={2}>{item.description}</Text>
      </CardBody>
    </Card>
  ));

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      exit={{ opacity: 0, y: 10 }}
    >
      <Button
        leftIcon={<ArrowLeftIcon />}
        mt={10}
        onClick={() => navigate(-1)}
        size="sm"
      >
        Back
      </Button>
      <Section title="Projects">{items}</Section>
    </motion.div>
  );
};

export default Projects;
