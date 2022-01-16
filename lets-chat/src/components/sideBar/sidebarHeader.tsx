import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import User from "atom/user";
import React from "react";
import { useRecoilValue } from "recoil";
import {
  FiMessageSquare,
  FiMoreHorizontal,
  FiPhoneIncoming,
  FiVideo,
} from "react-icons/fi";
import Link from "next/link";

interface Props {}

const SidebarHeader = (props: Props) => {
  const user = useRecoilValue(User);
  return (
    <Flex
      flex={1}
      w="full"
      height={"5rem"}
      px={"2rem"}
      justify={"space-between"}
      align={"center"}
      borderBottom={"1px solid #12101A"}
    >
      <Flex
        alignItems={"center"}
        flexGrow={1}
        cursor={"pointer"}
        onClick={() => {}}
      >
        <Avatar
          height={"42px"}
          width={"42px"}
          mr={"10px"}
          src={`https://avatars.dicebear.com/api/jdenticon/${
            user?.uuid || "dxbasjdb"
          }.svg`}
          borderWidth={"2px"}
          borderColor={"white"}
          borderStyle="solid"
          name={user?.fullName || "A"}
        />

        <Flex w={"116px"} justifyContent={"flex-start"} flexDir={"column"}>
          <Text isTruncated fontSize={"14px"} width={"full"} fontWeight={"500"}>
            {user?.fullName}
          </Text>
          {/* {activeUser?.isTyping ? (
            <Text
              color={"active.primary"}
              width={"full"}
              fontSize={"10px"}
              fontWeight={"400"}
            >
              typing...
            </Text>
          ) : activeUser?.isOnline ? (
            <Text
              color={"active.primary"}
              width={"full"}
              fontSize={"10px"}
              fontWeight={"400"}
            >
              Online
            </Text>
          ) : (
            <></>
          )} */}
        </Flex>
      </Flex>
      <Flex>
        <IconButton
          aria-label="audio call icon"
          borderRadius={"50%"}
          height={"35px"}
          width={"35px"}
          mr={"5px"}
          colorScheme="brand.300"
          _hover={{ bgColor: "#4C4B5C" }}
          _active={{ bgColor: "#4C4B5C" }}
          _focus={{ bgColor: "#4C4B5C" }}
          icon={<FiPhoneIncoming />}
        />
        <IconButton
          aria-label="video call icon"
          borderRadius={"50%"}
          height={"35px"}
          width={"35px"}
          mr={"5px"}
          colorScheme="brand.300"
          _hover={{ bgColor: "#4C4B5C" }}
          _active={{ bgColor: "#4C4B5C" }}
          _focus={{ bgColor: "#4C4B5C" }}
          icon={<FiVideo color="white" size={22} />}
        />

        <Popover placement="bottom-start">
          <PopoverTrigger>
            <IconButton
              aria-label="call icon"
              borderRadius={"50%"}
              height={"35px"}
              width={"35px"}
              colorScheme="brand.300"
              _hover={{ bgColor: "#4C4B5C" }}
              _focus={{ bgColor: "#4C4B5C" }}
              icon={<FiMoreHorizontal size={24} />}
            />
          </PopoverTrigger>
          <PopoverContent
            p={0}
            width={"118px"}
            outline="none"
            border={"2px solid white"}
            borderRadius={"10px"}
            _focus={{}}
          >
            <PopoverBody
              borderRadius={"10px"}
              p={0}
              bgColor={"#232234"}
              _focus={{}}
            >
              <Text
                m={`5px 10px`}
                fontSize="14px"
                _hover={{ color: "#f1eef985", bgColor: "#232234e6" }}
                cursor={"pointer"}
              >
                View profile
              </Text>
              <Text
                m={"5px 10px"}
                cursor={"pointer"}
                fontSize="14px"
                _hover={{ color: "#f1eef985", bgColor: "#232234e6" }}
              >
                Block
              </Text>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    </Flex>

    //   <Avatar src={user?.profileUrl || ""} name={user?.fullName || "G"} />
    //   <HStack>
    //     <Icon as={FiMessageSquare} size={20} fill={"white"} color={"white"} />
    //   </HStack>
    // </Flex>
  );
};

export default SidebarHeader;
