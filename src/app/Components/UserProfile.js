"use client";
import { Avatar, Badge, Button, Flex, VStack, Text, Box } from "@chakra-ui/react";
import Repos from "./Repos";

const UserProfile = ({ userData }) => {
  return (
    <>
      <Flex className="main_div"
        my={16}
        border={"2px solid"}
        borderColor={"green.500"}
        borderRadius={4}
        padding={8}
      >
        <VStack gap={5}>
          <Avatar size={"xl"} name={userData.name} src={userData.avatar_url} />
          <Button size={"sm"} colorScheme="whatsapp">
            <a href={userData.html_url} target="_blank">
              View Profile
            </a>
          </Button>
        </VStack>
        <VStack ml={8} alignItems={"self-start"}>
          <Flex gap={4} className="public_repo_div">
            <Badge fontSize={"0.9em"} colorScheme="orange">
              Public Repos: {userData.public_repos}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="cyan">
              Public Gists: {userData.public_gists}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="pink">
              Followers: {userData.followers}
            </Badge>
            <Badge fontSize={"0.9em"} colorScheme="purple">
              Following: {userData.following}
            </Badge>
          </Flex>
          <Text fontSize={'xl'} fontWeight={"bold"} mt={4} color={"green.400"}>
            {userData.name}
          </Text>
          <Text fontSize={'md'} fontWeight={"bold"} color={"green.500"}>
            {userData.bio}
          </Text>
          <Box className="user_detail_div">
            <Text fontSize={'md'}>
                <Text as={"span"} fontWeight={"bold"} color={"#257734"} mr={1}>
                    Company: 
                </Text>
                {userData.company || "Not Specified"}
            </Text>
            <Text fontSize={'md'}>
                <Text as={"span"} fontWeight={"bold"} color={"#257734"} mr={1}>
                    Location: 
                </Text>
                {userData.location || "Not Specified"}
            </Text>
            <Text fontSize={'md'}>
                <Text as={"span"} fontWeight={"bold"} color={"#257734"} mr={1}>
                    Blog/Website: 
                </Text>
                {userData.blog ? (<a href={userData.blog} target="_blank">{userData.blog}</a>) : "Not Specified"}
            </Text>
            <Text fontSize={'md'}>
                <Text as={"span"} fontWeight={"bold"} color={"#257734"} mr={1}>
                    Member since: 
                </Text>
                {/* {userData.created_at} */}
                {new Date(userData.created_at).toLocaleDateString()}
            </Text>
          </Box>
          
        </VStack>
      </Flex>
      <Repos reposUrl = {userData.repos_url} />
    </>
  );
};

export default UserProfile;
