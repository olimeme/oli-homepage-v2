import {
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  ExternalLinkIcon,
} from "@chakra-ui/icons";
import {
  Button,
  Icon,
  useColorMode,
  Text,
  Heading,
  VStack,
  Stack,
  HStack,
  Badge,
  Wrap,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Tag,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { techStack } from "../../info";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const badges = techStack.map((item) => (
    <Tag size="sm" variant={"solid"} colorScheme={item.color}>
      {item.title}
    </Tag>
  ));

  return (
    <HStack spacing={"auto"} alignItems="baseline" mt="5">
      <Stack justifyContent={"flex-start"}>
        <Heading>Alibek Mombekov</Heading>
        <Text fontSize="md">Frontend developer</Text>
        <Wrap pt={2}>{badges}</Wrap>
      </Stack>
      <HStack>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            boxShadow={"lg"}
            size={"sm"}
          >
            Links
          </MenuButton>
          <MenuList size="sm">
            <Link href="https://github.com/olimeme" isExternal>
              <MenuItem
                variant={"ghost"}
                size="sm"
                icon={<FaGithub />}
                colorScheme={"gray"}
              >
                GitHub <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
              </MenuItem>
            </Link>
            <Link
              href="https://www.linkedin.com/in/alibek-mombekov-247a81201/"
              isExternal
            >
              <MenuItem
                variant={"ghost"}
                size="sm"
                icon={<FaLinkedin />}
                colorScheme={"linkedin"}
              >
                LinkedIn <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
              </MenuItem>
            </Link>
          </MenuList>
        </Menu>
        <Button onClick={toggleColorMode} size="sm" boxShadow={"lg"}>
          <Icon as={colorMode === "light" ? SunIcon : MoonIcon} />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Navbar;
