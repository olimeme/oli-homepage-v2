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
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { techStack, navInfo } from "../../info";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const badges = techStack.map((item) => (
    <Tag size="sm" variant={"solid"} colorScheme={item.color} key={item.title}>
      {item.title}
    </Tag>
  ));

  return (
    <HStack spacing={"auto"} alignItems="baseline" mt="5">
      <Stack justifyContent={"flex-start"}>
        <Heading>{navInfo.name}</Heading>
        <Text fontSize="md">{navInfo.position}</Text>
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
            <Link href={navInfo.githubLink} isExternal>
              <MenuItem
                variant={"ghost"}
                icon={<FaGithub />}
                colorScheme={"gray"}
                fontSize={18}
              >
                GitHub <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
              </MenuItem>
            </Link>
            <Link href={navInfo.linkedInLink} isExternal>
              <MenuItem
                variant={"ghost"}
                icon={<FaLinkedin />}
                colorScheme={"linkedin"}
                fontSize={18}
              >
                LinkedIn <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
              </MenuItem>
            </Link>
            <Link href={navInfo.resumeLink} isExternal>
              <MenuItem
                variant={"ghost"}
                icon={<FaFileAlt />}
                colorScheme={"grey"}
                fontSize={18}
              >
                Resume <ExternalLinkIcon mx="2px" fontSize={"xs"} mb={1} />
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
