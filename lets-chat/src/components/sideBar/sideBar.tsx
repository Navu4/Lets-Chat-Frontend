import React, { useState } from "react";

import { Flex } from "@chakra-ui/react";
import SidebarHeader from "./sidebarHeader";
import SearchBar from "./searchBar";
import RecentUser from "./recentUser";
interface Props {}

const SideBar = (props: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <>
      <Flex h="full" flex={1} minW={"20rem"} maxW="22.5rem" flexDir="column">
        <SidebarHeader />
        <SearchBar input={searchInput} setInput={setSearchInput} />
        <RecentUser />
      </Flex>
    </>
  );
};

export default SideBar;
