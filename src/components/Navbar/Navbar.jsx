import {
  Text,
  Heading,
  Stack,
  HStack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaInstagram,
  FaTelegram,
  FaEnvelope,
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
          <Link fontSize="sm" href={navInfo.locationUrl} isExternal>
            {navInfo.location}
          </Link>
        </HStack>
        <HStack>
          <Link href={navInfo.githubLink} isExternal>
            <IconButton
              size="sm"
              aria-label="Github"
              variant={"outline"}
              icon={<FaGithub />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
          <Link href={navInfo.linkedinLink} isExternal>
            <IconButton
              size="sm"
              aria-label="LinkedIn"
              variant={"outline"}
              icon={<FaLinkedin />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
          <Link href={navInfo.instagramLink} isExternal>
            <IconButton
              size="sm"
              aria-label="instagram"
              variant={"outline"}
              icon={<FaInstagram />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
          <Link href={navInfo.telegramLink} isExternal>
            <IconButton
              size="sm"
              aria-label="telegram"
              variant={"outline"}
              icon={<FaTelegram />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
          <Link href={navInfo.mail} isExternal>
            <IconButton
              size="sm"
              aria-label="mail"
              variant={"outline"}
              icon={<FaEnvelope />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
          <Link href={navInfo.resumeLink} isExternal>
            <IconButton
              size="sm"
              aria-label="Resume"
              variant={"outline"}
              icon={<FaFileAlt />}
              colorScheme={"gray"}
            ></IconButton>
          </Link>
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Navbar;
