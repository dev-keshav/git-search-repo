"use client";
import { Avatar, Badge, Button, Flex, VStack, Text, Box } from "@chakra-ui/react";

const UserProfile = ({ userData }) => {
  return (
    <>
      <Flex
        my={16}
        border={"2px solid"}
        borderColor={"green.500"}
        borderRadius={4}
        padding={8}
      >
        <VStack gap={5}>
          <Avatar size={"xl"} name={userData.name} src={userData.avatar_url} />
          <Button colorScheme="whatsapp">
            <a href={userData.html_url} target="_blank">
              View Profile
            </a>
          </Button>
        </VStack>
        <VStack ml={8} alignItems={"self-start"}>
          <Flex gap={4}>
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
          <Box>
            <Text fontSize={'md'}>
                <Text as={"span"} fontWeight={"bold"} color={"green.200"} mr={1}>
                    Company: 
                </Text>
                {userData.company || "Not Specified"}
            </Text>
          </Box>
          
        </VStack>
      </Flex>
    </>
  );
};

export default UserProfile;
