import ChatBox from "components/chatBox/chatBox";
import SideBar from "components/sideBar/sideBar";
import HomeLayout from "layout/homeLayout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <>
        <SideBar />
        <ChatBox />
      </>
    </HomeLayout>
  );
};

export default Home;
