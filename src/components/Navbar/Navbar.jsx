import {
  Text,
  Heading,
  Stack,
  HStack,
  IconButton,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
  FaBook,
} from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";

import { navInfo } from "../../info";

const Navbar = () => {
  return (
    <HStack spacing={"auto"} alignItems="baseline" mt="16">
      <Stack justifyContent={"flex-start"}>
        <Heading>{navInfo.name}</Heading>
        <Text fontSize="sm" color="grey">
          {navInfo.position}
        </Text>
        <HStack spacing={2} mt={2} color="grey">
          <TiLocationOutline />
          <ChakraLink fontSize="sm" href={navInfo.locationUrl} isExternal>
            {navInfo.location}
          </ChakraLink>
        </HStack>
        <HStack>
          <ChakraLink href={navInfo.blogLink} isExternal>
            {/* <IconButton
              size="sm"
              aria-label="Blog"
              variant={"outline"}
              icon={}
              colorScheme={"gray"}
            ></IconButton> */}
            <Button size={"sm"} leftIcon={<FaBook />} variant={"outline"}>
              Blog
            </Button>
          </ChakraLink>
          <ChakraLink href={navInfo.githubLink} isExternal>
            <IconButton
              size="sm"
              aria-label="Github"
              variant={"outline"}
              icon={<FaGithub />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
          <ChakraLink href={navInfo.linkedinLink} isExternal>
            <IconButton
              size="sm"
              aria-label="LinkedIn"
              variant={"outline"}
              icon={<FaLinkedin />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
          <ChakraLink href={navInfo.instagramLink} isExternal>
            <IconButton
              size="sm"
              aria-label="instagram"
              variant={"outline"}
              icon={<FaInstagram />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
          <ChakraLink href={navInfo.telegramLink} isExternal>
            <IconButton
              size="sm"
              aria-label="telegram"
              variant={"outline"}
              icon={<FaTelegram />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
          <ChakraLink href={navInfo.mail} isExternal>
            <IconButton
              size="sm"
              aria-label="mail"
              variant={"outline"}
              icon={<FaEnvelope />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
          <ChakraLink href={navInfo.resumeLink} isExternal>
            <IconButton
              size="sm"
              aria-label="Resume"
              variant={"outline"}
              icon={<FaFileAlt />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Navbar;
