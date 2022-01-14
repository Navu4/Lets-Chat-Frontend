import { Flex, Text, Avatar, Box, useToast, Button } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { UserType } from "types/user";
import * as io from "socket.io-client";
import config from "config";
import { useRouter } from "next/router";
import Socket from "atom/socket";
import { CallData } from "atom/videoCall";
function IncomingCard() {
  const [callData, setCallData] = useRecoilState(CallData);
  const [change, setChange] = useState(false);
  const [socket, setSocket] = useRecoilState(Socket);
  const audioRef = useRef<HTMLAudioElement>();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("beforeunload", () =>
        socket?.emit("close", { to: callData.from?.uuid })
      );
    audioRef.current = new Audio("/assets/chat/ringtone.wav");
    audioRef.current.loop = true;
    setChange(!change);
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("beforeunload", () =>
          socket?.emit("close", { to: callData.from?.uuid })
        );
    };
  }, []);
  useEffect(() => {
    if (callData.incoming) audioRef.current?.play();
    return () => {
      // audioRef.current?.pause();
    };
  }, [callData]);
  useEffect(() => {
    if (socket) {
      const balckList = ["begin", "instruction"];
      const flag =
        callData.active ||
        callData.incoming ||
        balckList.reduce(
          (prev, curr) => prev || (router.pathname.includes(curr) as any),
          false
        );
      console.log({ flag });
      socket.on(
        "callIncoming",
        (data: { from: UserType; signal: any; type: "audio" | "video" }) => {
          if (flag) {
            socket.emit("busy", { to: data.from.uuid });
          } else {
            audioRef.current?.play();
            setCallData((callData) => {
              return {
                ...callData,
                type: data.type,
                active: false,
                incoming: true,
                from: data.from,
                incomingSignal: data.signal,
              };
            });
          }
        }
      );
      socket.on("user-offline", ({ id }) => {
        setCallData((callData) => {
          return callData.from?.uuid === id && callData.incoming
            ? { ...callData, active: false, incoming: false }
            : callData;
        });
      });
    }
    return () => {
      socket?.removeListener("callIncoming");
      // socket?.removeListener('user-offline');
    };
  }, [socket, callData]);
  const acceptCall = () => {
      audioRef.current?.pause();

      if (callData.acceptCall) {
        callData.acceptCall();
      }
      // socket?.emit('acceptCall', {
      //   from: callData.from,
      //   peerId: callData.myPeerId,
      // });
    },
    rejectCall = () => {
      audioRef.current?.pause();
      socket?.emit("rejectedCall", { to: callData.from?.uuid });
      setCallData({ ...callData, active: false, incoming: false });
    };

  if (!callData.incoming) return <></>;

  return (
    <Flex
      w="full"
      pos="fixed"
      zIndex={2000}
      p={50}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        zIndex="2010"
        maxW={["full", "full", "md", "md", "md"]}
        w={["96vw", "96vw", "md", "md", "md"]}
        mx="auto"
        bg={"background.paper"}
        border="2px solid"
        borderColor="warning.200"
        shadow="md"
        rounded="lg"
        overflow="hidden"
        pos="absolute"
        // top="60px"
        left="50%"
        transform="auto"
        translateX="-50%"
      >
        <Flex
          direction={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent="space-evenly"
          w="full"
        >
          <Flex alignItems="center" px={2} py={3}>
            <Avatar
              boxSize={10}
              name={callData.from?.fullName}
              src={callData.from?.profileUrl}
            />
            <Box mx={3}>
              <Text>
                {callData.type === "video" ? "Video" : "Audio"} call from{" "}
                {callData.from?.fullName}
              </Text>
            </Box>
          </Flex>
          <Flex
            justifyContent="flex-end"
            flexDir={["row", "row", "row", "row", "row"]}
            alignItems="center"
          >
            <Button
              bgColor="text.secondary"
              h="40px"
              mr="1rem"
              mb={["0.5rem", "0.5rem", "0"]}
              mt={["0.25rem", "0.25rem", "0"]}
              colorScheme="text"
              onClick={acceptCall}
            >
              Accept
            </Button>
            <Button
              bgColor="warning.main"
              h="40px"
              mr="1rem"
              mb={["0.25rem", "0.25rem", "0"]}
              colorScheme="warning"
              onClick={rejectCall}
            >
              Reject
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default IncomingCard;
