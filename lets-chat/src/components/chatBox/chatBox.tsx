import React, { useEffect, useRef, useState } from "react";

import { Box, chakra, Divider, Flex } from "@chakra-ui/react";
import ChatBoxHeader from "./chatBoxHeader";
import ChatBoxFooter from "./chatBoxFooter";
import { ChatMessageType } from "types/chat";
import Message from "./message";
import InfiniteScroll from "react-infinite-scroller";
import moment from "moment";
import { MessageSkeleton } from "components/skeletons";
interface Props {}

const dummyData: ChatMessageType[] = [
  {
    from: { name: "Navjot Singh", userId: "dhsadjbasd" },

    text: "Hi what's up",
    createdAt: new Date().toDateString(),
    isSent: true,
  },
  {
    from: { name: "Navjot Singh", userId: "z" },

    text: "Hi what's up",
    createdAt: new Date().toDateString(),
    isSent: true,
  },
  {
    from: { name: "Navjot Singh", userId: "dhsadjbasd" },

    text: "Hi what's up",
    createdAt: new Date().toDateString(),
    isSent: true,
  },
];

const ChatBox = (props: Props) => {
  const chatMessageRef = useRef<HTMLInputElement>(null);
  const [chat, setChat] = useState<any>({
    data: [],
    pagination: { limit: 0, total: 0, offset: 0 },
  });
  const [offset, setOffset] = useState<number>(0);

  const chatMessageLoadMore = () => {};

  const clearStateFuc = () => {
    console.log("Clear States");
    setChat({
      data: [],
      pagination: { limit: 0, total: 0, offset: 0 },
    });
    setOffset(0);
  };

  useEffect(() => {
    () => {
      clearStateFuc();
    };
  });

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

        <Flex
          flex={1}
          className="custom_scrollBar"
          overflowY="auto"
          flexDir="column"
          border="none"
        >
          <InfiniteScroll
            key="infiniteScroll"
            loadMore={chatMessageLoadMore}
            // hasMore={chat.pagination.total > chatOffset && chatOffset != 0}
            loader={
              <>
                <MessageSkeleton isReverse={false} />
                <MessageSkeleton isReverse={true} />
              </>
            }
            className="custom_scrollBar"
            style={{
              width: "100%",
            }}
            threshold={250}
            useWindow={false}
            isReverse={true}
            initialLoad={false}
            start={10}
          >
            {[...dummyData, ...dummyData, ...dummyData].map((msg, index) => {
              // if (
              //   (index > 0 &&
              //     !moment(Message.createdAt).isSame(
              //       moment(chat?.data[index - 1].createdAt),
              //       "day"
              //     )) ||
              //   index === 0
              // ) {
              //   return (
              //     <chakra.span key={Message.id}>
              //       <Flex justifyContent={"center"}>
              //         <Box
              //           fontSize={"12px"}
              //           color={"active.primary"}
              //           display={"inline-block"}
              //           padding={"2px 10px"}
              //           fontWeight={500}
              //           borderRadius={"10px"}
              //           bgColor={"button.nonActive"}
              //         >
              //           {moment(Message.createdAt).format("MMM Do YY")}
              //         </Box>
              //       </Flex>
              //       <Message Message={Message} />
              //     </chakra.span>
              //   );
              // }
              return <Message key={index} Message={msg} />;
            })}

            <div ref={chatMessageRef} style={{ height: 0, width: 0 }} />
          </InfiniteScroll>
        </Flex>
        <Divider bgColor={"lightblue"} h={"1px"} w={"full"} />
        <ChatBoxFooter />
      </Flex>
    </Flex>
  );
};

export default ChatBox;
