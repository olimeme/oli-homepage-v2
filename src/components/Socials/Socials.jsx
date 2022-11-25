import {
  Button,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import {
  FaBehance,
  FaDribbble,
  FaFacebookSquare,
  FaGithub,
  FaInstagram,
  FaLink,
  FaLinkedin,
  FaPinterest,
  FaPodcast,
  FaTelegram,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { socials } from "../../info";
import Section from "../Section";

const socialIcons = {
  telegram: { icon: <FaTelegram />, colorScheme: "telegram" },
  instagram: { icon: <FaInstagram />, colorScheme: "yellow" },
  twitter: { icon: <FaTwitter />, colorScheme: "twitter" },
  twitch: { icon: <FaTwitch />, colorScheme: "purple" },
  youtube: { icon: <FaYoutube />, colorScheme: "red" },
  dribbble: { icon: <FaDribbble />, colorScheme: "pink" },
  facebook: { icon: <FaFacebookSquare />, colorScheme: "facebook" },
  behance: { icon: <FaBehance />, colorScheme: "blue" },
  pinterest: { icon: <FaPinterest />, colorScheme: "red" },
  github: { icon: <FaGithub />, colorScheme: "grey" },
  linkedin: { icon: <FaLinkedin />, colorScheme: "linkedin" },
  podcast: { icon: <FaPodcast />, colorScheme: "purple" },
};

const Socials = () => {
  const items = socials.map((item) => (
    <ListItem key={item.username}>
      <Link href={item.link} isExternal>
        <Button
          leftIcon={
            item.social in socialIcons ? (
              socialIcons[`${item.social}`].icon
            ) : (
              <FaLink />
            )
          }
          size="sm"
          colorScheme={
            item.social in socialIcons
              ? socialIcons[`${item.social}`].colorScheme
              : "teal"
          }
          variant="ghost"
        >
          {item.username}
        </Button>
      </Link>
    </ListItem>
  ));

  return (
    <Section title="Socials">
      <UnorderedList spacing={1} ml={0} listStyleType={"none"}>
        {items}
      </UnorderedList>
    </Section>
  );
};

export default Socials;
