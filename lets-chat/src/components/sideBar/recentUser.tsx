import { Avatar, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";

interface Props {}

const dummyData = [
  {
    name: "Navjot Singh",
    id: "dasldmaslmd",
    lastMessage: "How are you ?",
  },
  {
    name: "Navjot Singh",
    id: "dasldmaslmd",
    lastMessage: "How are you ?",
  },
];

const RecentUser = (props: Props) => {
  return (
    <Flex
      overflowY={"auto"}
      p={"0.2rem"}
      w={"full"}
      h={"calc(100% - 140px)"}
      py={"0.1rem"}
    >
      <Flex
        className="custom_scrollBar"
        w="full"
        h={"fit-content"}
        maxH={"calc(100% - 140px)"}
        flexDir={"column"}
        bgColor="white"
        borderRadius={"0.8rem"}
      >
        {dummyData.map((data, index) => {
          return <UserCard key={data.id + index} data={data} />;
        })}
      </Flex>
    </Flex>
  );
};

export default RecentUser;

export const UserCard: FC<{
  data: { name: string; id: string; lastMessage: string };
}> = ({ data }) => {
  return (
    <Flex
      w="full"
      h={"5rem"}
      p={"1rem"}
      alignItems={"center"}
      onClick={() => {}}
    >
      <Avatar
        cursor={"pointer"}
        height={"42px"}
        width={"42px"}
        mr={"10px"}
        src={`https://avatars.dicebear.com/api/pixel-art/${"dxbasjdb"}.svg`}
        borderWidth={"2px"}
        borderColor={"white"}
        borderStyle="solid"
        name={"N"}
      />
      <Flex flexDir={"column"}>
        <Text
          as="h3"
          color={"black"}
          fontWeight="600"
          isTruncated
          width={"full"}
        >
          Navjot Singh
        </Text>
        <Text as="p" fontSize={"0.8rem"} color={"lightblue"}>
          How are you?
        </Text>
      </Flex>
    </Flex>
  );
};
