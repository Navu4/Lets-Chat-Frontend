import React, { useEffect, useState } from "react";

import Socket from "atom/socket";
import User from "atom/user";
import config from "config";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { UserType } from "types/user";
import { theme } from "../../styles/theme";

import * as io from "socket.io-client";
import { unprotectedRoutes } from "constants/routerConstants";
import { chakra, ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
import IncomingCard from "components/videoCall/incomingCard";

export default function Layout({ children }: any) {
  const [user, setUser] = useRecoilState(User);
  const [socket, setSocket] = useRecoilState(Socket);
  const router = useRouter();
  const [shouldShow, setShouldShow] = useState(false);

  const OnUserData = (user: UserType) => {
    setUser(user);

    if (user) {
      const socketInstance = io.connect(config.server, {
        transports: ["websocket"],
      });
      setSocket(socketInstance);
    }
  };

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        setShouldShow(false);
        socket.emit("join", user?.uuid);
      });
      socket.on("disconnect", () => {
        setShouldShow(true);
      });
    }
  }, [socket]);

  const UserQuery = () => {}; // Axios Call for User

  useEffect(() => {
    if (localStorage.getItem("tokens")) UserQuery();
  }, []);

  useEffect(() => {
    const hasTokens = Boolean(
      typeof window !== "undefined" && localStorage.getItem("tokens")
    );
    const pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

    // if (router.pathname === "/signup" && hasTokens) {
    //   router.replace("/feed");
    //   return;
    // }

    // if (!hasTokens) {
    //   setUser(null);
    // }

    // if (
    //   router.pathname !== "/404" &&
    //   pathIsProtected &&
    //   user === null &&
    //   router.pathname !== "/signup"
    // ) {
    //   router.replace("/signup");
    // }
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Let's Chat</title>
      </Head>
      <chakra.main className="withScroll" display="flex" flexDirection="column">
        <IncomingCard />
        {children}
      </chakra.main>
    </ChakraProvider>
  );
}
