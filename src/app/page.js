"use client";
import { Container, Text } from "@chakra-ui/react";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { useState } from "react";
import UserProfile from "./Components/UserProfile";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(userData);
  return (
    <Container maxW="container.lg">
      <div className="header_div">
        <Navbar />
        <Text textAlign={"Center"}>Search Users on Github</Text>
        <Search
          setUserData={(res) => setUserData(res)}
          setLoading={setLoading}
        />
      </div>

      <div className="user_data_div">
        {userData && <UserProfile userData={userData} />}
      </div>
    </Container>
  );
}
