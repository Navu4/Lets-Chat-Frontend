import React, { FC } from "react";

import { Flex, Text, Icon, Avatar } from "@chakra-ui/react";
import Link from "next/link";
import moment from "moment";
import { useRecoilValue } from "recoil";
import User from "atom/user";
import { ActiveUser } from "atom/chat";
import { ChatMessageType } from "types/chat";

const Message: FC<{ Message: ChatMessageType }> = ({ Message }) => {
  const user = useRecoilValue(User);
  const activeUser = useRecoilValue(ActiveUser);
  const isUserSender = Message.from !== user?.userId;
  return (
    <Flex
      width={"full"}
      maxW="100%"
      m={"10px 0"}
      flexDir={isUserSender ? "row-reverse" : "row"}
    >
      <Flex flexDir={"column"} ml="1rem" mr="0.5rem">
        <Avatar
          bgColor={"#4E426D"}
          height={"2.5rem"}
          src={`https://avatars.dicebear.com/api/pixel-art/${Message.from}.svg`}
          name={Message.from}
          width={"2.5rem"}
          cursor={"pointer"}
        />
        <Text color={"black"} fontSize="0.5rem" fontWeight={"600"}>
          {moment(Message?.createdAt).format("h:mm a")}
        </Text>
      </Flex>
      <Flex
        w={"fit-content"}
        bgColor={isUserSender ? "#4E426D" : "#F5F7FB"}
        borderRadius={"0.8rem"}
        borderTopRightRadius={isUserSender ? "none" : "0.8rem"}
        borderTopLeftRadius={!isUserSender ? "none" : "0.8rem"}
        p={"10px"}
        px="1rem"
        flexDir={"column"}
        pos={"relative"}
        align="start"
      >
        {/* {Message?.media && Message?.media.length > 0 ? (
          <Media isFeed={true} media={Message?.media} isChat={true} />
        ) : (
          <></>
        )} */}

        <Text
          whiteSpace="pre-wrap"
          wordBreak="break-word"
          color={isUserSender ? "white" : "black"}
          fontSize={"1rem"}
        >
          {Message?.msg}
        </Text>

        {isUserSender ? (
          Message.isSent ? (
            <Flex justifyContent="flex-end" w={"100%"}>
              <Icon
                width="14px"
                height="14px"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 4.94141L5.375 14.0002L1 9.88258"
                  stroke="#9492A0"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 1L5.375 10.0588L1 5.94118"
                  stroke="#9492A0"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Icon>
            </Flex>
          ) : (
            <Flex justifyContent="flex-end" w={"100%"}>
              <Icon
                width="14px"
                height="14px"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.5 12C9.53757 12 12 9.53757 12 6.5C12 3.46243 9.53757 1 6.5 1C3.46243 1 1 3.46243 1 6.5C1 9.53757 3.46243 12 6.5 12Z"
                  stroke="#F1EEF9"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.5 3.35645V6.4993L8.07143 8.07073"
                  stroke="#F1EEF9"
                  stroke-width="0.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </Icon>
            </Flex>
          )
        ) : (
          <></>
        )}
      </Flex>
    </Flex>
  );
};

export default Message;
