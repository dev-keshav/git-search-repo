"use client"
import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import HistoryModal from './HistoryModal';

const Navbar = () => {
  // This is taken from Chakra 
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex justifyContent={'space-between'} py={6} alignItems={"Center"} >
        <box>
            <Image src={"/logo.svg"} fill alt='github-logo' sx={{filter: "invert(1)", height: "75px"}} />
        </box>
        <box>
            <Button size="sm" color={"white"} bg={"#2EA043"} _hover={{ bg: "#257734" }} onClick={onOpen}>
                Search History 
            </Button>
        </box>
    {isOpen && <HistoryModal isOpen={isOpen} onClick={onClose} />
        
    </Flex>
  )
}

export default Navbar
