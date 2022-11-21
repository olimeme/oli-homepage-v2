import {
  Button,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FaInstagram, FaPodcast, FaTelegram } from "react-icons/fa";
import Section from "../Section";

const Socials = () => {
  return (
    <Section title="Socials">
      <UnorderedList spacing={1} ml={0} listStyleType={"none"}>
        <ListItem>
          <Link href="" isExternal>
            <Button
              leftIcon={<FaTelegram />}
              size="sm"
              colorScheme={"telegram"}
              variant="ghost"
            >
              @olimeme
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="" isExternal>
            <Button
              leftIcon={<FaTelegram />}
              size="sm"
              colorScheme={"telegram"}
              variant="ghost"
            >
              После Вечера
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://www.instagram.com/banana_smoothie_oli/"
            isExternal
          >
            <Button
              leftIcon={<FaInstagram />}
              size="sm"
              colorScheme={"yellow"}
              variant="ghost"
            >
              @banana_smoothie_oli
            </Button>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://podcasts.apple.com/us/podcast/aitu-podcast/id1557667084"
            isExternal
          >
            <Button
              leftIcon={<FaPodcast />}
              size="sm"
              colorScheme={"purple"}
              variant="ghost"
            >
              AITU Podcast
            </Button>
          </Link>
        </ListItem>
      </UnorderedList>
    </Section>
  );
};

export default Socials;
