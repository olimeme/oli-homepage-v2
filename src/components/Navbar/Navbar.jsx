import {
  Text,
  Heading,
  Stack,
  HStack,
  IconButton,
  Link as ChakraLink,
  Button,
  Spacer,
  // VStack,
  // Box,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  // FaFileAlt,
  // FaInstagram,
  FaTelegram,
  FaEnvelope,
  // FaBook,
} from "react-icons/fa";
import { TiLocationOutline } from "react-icons/ti";

import { navInfo } from "../../info";
import {
  ChevronDownIcon,
  ExternalLinkIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack spacing={"auto"} alignItems="baseline" mt="16">
      <Stack justifyContent={"flex-start"} width={"100%"}>
        <HStack justifyContent={"space-between"}>
          <Heading>{navInfo.name}</Heading>
          <Spacer />
          <IconButton
            aria-label="dark mode switch"
            icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            onClick={toggleColorMode}
          />
        </HStack>
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
          {/* <ChakraLink href={navInfo.blogLink} isExternal>
            <Button size={"sm"} leftIcon={<FaBook />} variant={"outline"}>
              Blog
            </Button>
          </ChakraLink> */}
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
          {/* <ChakraLink href={navInfo.instagramLink} isExternal>
            <IconButton
              size="sm"
              aria-label="instagram"
              variant={"outline"}
              icon={<FaInstagram />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink> */}
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
          <Menu>
            <MenuButton
              as={Button}
              size="sm"
              aria-label="Resume"
              variant={"outline"}
              rightIcon={<ChevronDownIcon />}
            >
              Resume
            </MenuButton>
            <MenuList p={0} minW="0" w={"100px"}>
              <MenuItem
                as={ChakraLink}
                href={navInfo.resumeLinkEN}
                isExternal
                icon={<ExternalLinkIcon />}
              >
                EN
              </MenuItem>
              {/* <MenuItem
                as={ChakraLink}
                href={navInfo.resumeLinkRU}
                isExternal
                icon={<ExternalLinkIcon />}
              >
                RU
              </MenuItem> */}
            </MenuList>
          </Menu>
          {/* <ChakraLink href={navInfo.resumeLink} isExternal>
            <IconButton
              size="sm"
              aria-label="Resume"
              variant={"outline"}
              icon={<FaFileAlt />}
              colorScheme={"gray"}
            ></IconButton>
          </ChakraLink> */}
        </HStack>
      </Stack>
    </HStack>
  );
};

export default Navbar;
