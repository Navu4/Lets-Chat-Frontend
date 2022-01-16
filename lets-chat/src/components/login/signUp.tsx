import React, { useEffect, useState } from "react";

import {
  Button,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { isEmail } from "utils/validator";

interface Props {}

const SignUp = (props: Props) => {
  const toast = useToast();
  const [show, setShow] = useState<boolean>(false);
  const handleClick = () => setShow(!show);

  const [isSignUp, setIsSignUp] = useState<boolean>(false);

  const [signUpData, setSignUpData] = useState<{
    name: string;
    password: string;
    emailId: string;
  }>({
    name: "",
    password: "",
    emailId: "",
  });
  const [isValid, setIsValid] = useState<boolean>(true);

  const handleOnChange = (key: string, value: string) => {
    setSignUpData((prev) => {
      return {
        ...prev,
        [`${key}`]: value,
      };
    });
  };

  const cleanUpFunc = () => {
    setSignUpData({
      name: "",
      password: "",
      emailId: "",
    });
  };

  const handleAccountClick = (havaAccount: boolean) => {
    if (havaAccount) {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
    cleanUpFunc();
  };

  const handleSubmit = () => {
    console.log("Me chla");
    if (!isEmail(signUpData.emailId)) {
      console.log("invalid");
      setIsValid(false);
      toast({
        title: `Please enter a valid email`,
        status: "error",
        variant: "left-accent",
        isClosable: true,
      });
    } else setIsValid(true);
    console.log("valid");
  };
  useEffect(() => {
    () => {
      cleanUpFunc();
    };
  }, []);

  return (
    <Flex w={"full"} h="full">
      <Flex
        minW="8rem"
        bgColor={"white"}
        h="full"
        display={["none", "none", "none", "flex", "flex"]}
        align="center"
        justify="center"
        width="full"
        flexDir={"column"}
      >
        <Text
          as="h1"
          fontSize={"3rem"}
          fontWeight="600"
          color="#4475d9"
          my=".5rem"
        >
          Let's Chat
        </Text>
        <Flex w="70%" height={"70%"} align="center" justify={"center"}>
          <Image
            src="assets/login/loginImage.svg"
            alt="Login"
            objectFit={"contain"}
          />
        </Flex>
      </Flex>
      {isSignUp ? (
        <Flex
          align="center"
          justify="center"
          height={"full"}
          w={["full", "full", "45rem", "45rem"]}
          px="2rem"
          bgColor={"#E8EAEF"}
          flexDir="column"
        >
          <VStack
            w="full"
            p="2rem"
            borderRadius={"1rem"}
            bgColor={"white"}
            spacing={"5"}
          >
            <Flex w="full" justify={"start"} flexDir="column">
              <Text as="h2" fontWeight={500} color="black" my=".5rem">
                Sign Up
              </Text>
              <Text as="h4" color="black">
                Fill in the fields below to sign into your accound
              </Text>
            </Flex>

            <Input
              focusBorderColor="none"
              size="md"
              value={signUpData.name}
              onChange={(e) => {
                handleOnChange("name", e.target.value);
              }}
              placeholder={"Enter Username"}
            />

            <Flex w="full" flexDir={"column"}>
              <Input
                focusBorderColor="none"
                size="md"
                value={signUpData.emailId}
                onChange={(e) => {
                  handleOnChange("emailId", e.target.value);
                }}
                placeholder={"Enter emailId"}
              />
              {isValid ? (
                <></>
              ) : (
                <Text as="p" fontSize={"0.8rem"} color="red">
                  Please enter a valid email
                </Text>
              )}
            </Flex>

            <InputGroup focusBorderColor="none" size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={signUpData.password}
                onChange={(e) => {
                  handleOnChange("password", e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex w="full" justify={"space-between"} align="center">
              <Button border="1px solid #4475d9" onClick={handleSubmit}>
                Sign Up
              </Button>

              <Text
                as="button"
                fontSize={"0.8rem"}
                color="#4475d9"
                onClick={() => {
                  handleAccountClick(true);
                }}
              >
                Already have an account?
              </Text>
            </Flex>
          </VStack>
        </Flex>
      ) : (
        <Flex
          align="center"
          justify="center"
          height={"full"}
          w={["full", "full", "45rem", "45rem"]}
          px="2rem"
          bgColor={"#E8EAEF"}
        >
          <VStack
            w="full"
            p="2rem"
            borderRadius={"1rem"}
            bgColor={"white"}
            spacing={"5"}
          >
            <Flex w="full" justify={"start"} flexDir="column">
              <Text as="h2" fontWeight={500} color="black" my=".5rem">
                Login
              </Text>
            </Flex>

            <Flex w="full" flexDir={"column"}>
              <Input
                focusBorderColor="none"
                size="md"
                value={signUpData.emailId}
                onChange={(e) => {
                  handleOnChange("emailId", e.target.value);
                }}
                placeholder={"Enter emailId"}
              />
              {isValid ? (
                <></>
              ) : (
                <Text as="p" fontSize={"0.8rem"} color="red">
                  Please enter a valid email
                </Text>
              )}
            </Flex>

            <InputGroup focusBorderColor="none" size="md">
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Enter password"
                value={signUpData.password}
                onChange={(e) => {
                  handleOnChange("password", e.target.value);
                }}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {!show ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Flex w="full" justify={"space-between"} align="center">
              <Button border="1px solid #4475d9" onClick={handleSubmit}>
                Submit
              </Button>

              <Text
                as="button"
                fontSize={"0.8rem"}
                color="#4475d9"
                onClick={() => {
                  handleAccountClick(false);
                }}
              >
                Create a new account
              </Text>
            </Flex>
          </VStack>
        </Flex>
      )}
    </Flex>
  );
};

export default SignUp;
