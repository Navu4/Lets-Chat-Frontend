import {
  Avatar,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import User from "atom/user";
import React, { useRef } from "react";
import { useRecoilValue } from "recoil";
import { FiMoreVertical } from "react-icons/fi";
import Link from "next/link";

interface Props {}

const SidebarHeader = (props: Props) => {
  const user = useRecoilValue(User);
  return (
    <Flex
      w="full"
      height={"5rem"}
      borderRadius="0.5rem"
      bgColor={"white"}
      px={"1rem"}
      justify={"space-between"}
      align={"center"}
    >
      <Flex
        w="full"
        h="full"
        alignItems={"center"}
        flexGrow={1}
        onClick={() => {}}
      >
        <Avatar
          cursor={"pointer"}
          height={"42px"}
          width={"42px"}
          mr={"10px"}
          src={`https://avatars.dicebear.com/api/pixel-art/${
            user?.uuid || "dxbasjdb"
          }.svg`}
          borderWidth={"2px"}
          borderColor={"white"}
          borderStyle="solid"
          name={user?.fullName || "A"}
        />

        <Flex h="full" flex={1} flexDir="column" justify={"center"}>
          <Text
            as="h3"
            color={"black"}
            fontWeight="600"
            isTruncated
            width={"full"}
          >
            {user?.fullName || "Navjot Singh"}
          </Text>
          <Text as="p" fontSize={"0.8rem"} color={"black"}>
            My Account
          </Text>
        </Flex>
      </Flex>

      <Flex h="full" align={"center"}>
        <MorePoper></MorePoper>
      </Flex>
    </Flex>
  );
};

export default SidebarHeader;

export const MorePoper = () => {
  return (
    <Menu>
      <MenuButton isLazy>
        <Icon as={FiMoreVertical} color="black" fontSize={"1.5rem"}></Icon>
      </MenuButton>
      <MenuList p={0}>
        <MenuItem p={"0.8rem"}>Logout</MenuItem>
        <MenuItem p={"0.8rem"}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
};
