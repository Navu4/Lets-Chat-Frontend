import React from "react";

import { Flex } from "@chakra-ui/react";
import SidebarHeader from "./sidebarHeader";
interface Props {}

const SideBar = (props: Props) => {
  return (
    <Flex
      h="full"
      flex={1}
      minW={"20rem"}
      maxW="22.5rem"
      border={"1px solid red"}
    >
      <SidebarHeader />
    </Flex>
  );
};

export default SideBar;
