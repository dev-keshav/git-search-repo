"use client";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { useState, useEffect } from "react";
import UserProfile from "./Components/UserProfile";

export default function Home() {
  const [userData, setUserData] = useState(null);

  console.log(userData)
  return (
    <Container maxW="container.lg">
      <Navbar setUserData={setUserData} />
      {/* <Text textAlign={"Center"} my={4}>
        Search Users on Github
      </Text> */}
      {userData && <UserProfile userData={userData}/>}
    </Container>
  );
}
