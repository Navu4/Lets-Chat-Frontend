import React from "react";

import { Divider, Flex } from "@chakra-ui/react";
import ChatBoxHeader from "./chatBoxHeader";
import ChatBoxFooter from "./chatBoxFooter";
interface Props {}

const ChatBox = (props: Props) => {
  return (
    <Flex flex={1} pl={"1rem"}>
      <Flex
        h="full"
        w="full"
        bgColor={"white"}
        borderRadius="0.8rem"
        flexDir={"column"}
      >
        <ChatBoxHeader />
        <Divider bgColor={"lightblue"} h={"1px"} w={"full"} />
        <Flex flex={1} border={"1px solid "}></Flex>
        <ChatBoxFooter />
      </Flex>
    </Flex>
  );
};

export default ChatBox;
