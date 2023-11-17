"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalBody,
  VStack,
  Text,
  Flex,
  Avatar,
  Box,
  Button,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const HistoryModal = ({ isOpen, onClose }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("github-users")) || [];
    setSearchHistory(users);
  }, []);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg={"gray.900"}>
        <ModalHeader>Search History</ModalHeader>
        <ModalBody>
          <Text mb={2}>Users you searched for:</Text>
          <VStack gap={4} maxHeight={300} overflow={"auto"}>
            {/* if we don't have search history  */}
            {searchHistory.length === 0 && (
              <Text
                color={"gray.400"}
                fontSize={"sm"}
                fontWeight={"bold"}
                pt={4}
              >
                No search history
              </Text>
            )}
            {/* if we have search history  */}
            {searchHistory.map((user) => (
              <Flex
                key={user.id}
                alignItems={"center"}
                bg={"whiteAlpha.200"}
                w={"full"}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={4}
                p={2}
                cursor={"pointer"}
                justifyContent={"space-between"}
              >
                <Flex gap={2} alignItems={"center"}>
                  <Avatar
                    display={"block"}
                    size={"lg"}
                    src={user.avatar_url}
                    name={user.name}
                  />
                  <Box>
                    <Text fontWeight={"bold"}>{user.name || "User"}</Text>
                    <Text fontSize={"sm"} color={"green.400"}>
                      {user.id}
                    </Text>
                  </Box>
                </Flex>
                <Flex alignItems={"center"} gap={4}>
                  <Button
                    size={"sm"}
                    color="black"
                    bg={"#2EA043"}
                    px={2}
                    borderRadius={4}
                    _hover={{ textDecoration: "none", bg: "#257734" }}
                  >
                    <Link href={user.url} target="_blank">
                      Visit
                    </Link>
                  </Button>
                </Flex>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HistoryModal;
