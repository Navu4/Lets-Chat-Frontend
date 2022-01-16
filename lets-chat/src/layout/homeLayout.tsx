import React, { FC } from "react";

import { Flex } from "@chakra-ui/react";

const HomeLayout = ({ children }) => {
  return (
    <Flex align="center" justify="center" h="100%" w="100%">
      <Flex
        mt={"-25px"}
        h="90vh"
        w="90vw"
        bgColor={"#12121D"}
        borderRadius="1rem"
        overflow={"hidden"}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default HomeLayout;
