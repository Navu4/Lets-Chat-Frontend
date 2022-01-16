import React, { useEffect, useState } from "react";
import Image from "next/image";

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
      <chakra.main
        w="100vw"
        h="100vh"
        className="withScroll"
        display="flex"
        flexDirection="column"
        bgImg={
          "https://media.istockphoto.com/vectors/abstract-white-pattern-and-background-poster-with-dynamic-triangle-vector-id1288582739?k=20&m=1288582739&s=612x612&w=0&h=-FxHqbKS3eNIaF0dIGPJAT6Iy2Fw8YKtmH1saj_2upA="
        }
        bgPos="center"
        bgSize={"cover"}
        bgRepeat="no-repeat"
      >
        <IncomingCard />
        {children}
      </chakra.main>
    </ChakraProvider>
  );
}
