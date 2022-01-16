import { Avatar, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface Props {}

const ChatBoxHeader = (props: Props) => {
  return (
    <Flex
      w="full"
      p={"1rem 2rem"}
      h={"5rem"}
      alignItems={"center"}
      onClick={() => {}}
    >
      <Avatar
        cursor={"pointer"}
        height={"42px"}
        width={"42px"}
        mr={"10px"}
        src={`https://avatars.dicebear.com/api/jdenticon/${"dxbasjdb"}.svg`}
        borderWidth={"2px"}
        borderColor={"white"}
        borderStyle="solid"
        name={"A"}
      />

      <Flex h="full" flex={1} flexDir="column" justify={"center"}>
        <Text
          as="h3"
          color={"black"}
          fontWeight="600"
          isTruncated
          width={"full"}
        >
          {"Navjot Singh"}
        </Text>
      </Flex>
    </Flex>
  );
};

export default ChatBoxHeader;
