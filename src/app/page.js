"use client";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { useState } from "react";
import UserProfile from "./Components/UserProfile";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(userData)
  return (
    <Container maxW="container.lg">
      <Navbar />
      <Text textAlign={"Center"} my={4}>
        Search Users on Github
      </Text>
      <Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />

      {userData && <UserProfile userData={userData}/>}
    </Container>
  );
}
