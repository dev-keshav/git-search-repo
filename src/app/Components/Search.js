"use client";
import { Button, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";

const Search = ({setUserData, setLoading}) => {
  const [query, setQuery] = useState("");
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query) {
      return;
    }
    setLoading(true)
    setUserData(null)
    try {
      const result = await fetch(`https://api.github.com/users/${query}`);
      const data = await result.json();
      console.log(data);
      if (data.message) {
        return toast({
          title: "Error",
          description:
            data.message === "Not Found" ? "User not found" : data.message,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
      setUserData(data);
      addUserToLocalStorage(data, query);
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }finally{
      setLoading(false)
    }
  };

  const addUserToLocalStorage = (data, username) => {
    const users = JSON.parse(localStorage.getItem('github-users')) || []
    const userExist = users.find(user => user.id === username);

    if(userExist){
      users.splice(users.indexOf(userExist), 1)
    }
    users.unshift({
      id: username,
      avatar_url: data.avatar_url,
      name: data.name,
      url: data.html_url
    });
    localStorage.setItem("github-users", JSON.stringify(users));
  }
  return (
    <form onSubmit={handleSubmit} >
      <Input
        variant={"outline"}
        placeholder={"Type a username"}
        focusBorderColor="#2EA043"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button
        size="md"
        type="submit"
        bg={"#2EA043"}
        color={"white"}
        mt={4}
        disabled={!query}
        _hover={{ bg: "#257734" }}
        opacity={!query ? 0.5 : 1}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
