import { Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";

interface Props {}

const VideoCall = (props: Props) => {
  const accessVideoAudio = () => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
  };
  useEffect(() => {
    accessVideoAudio();
  }, []);

  return <Flex flex={1} h="full" pl={"1rem"}></Flex>;
};

export default VideoCall;
