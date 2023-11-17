"use client"
import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import HistoryModal from './HistoryModal';
import Search from './Search';

const Navbar = ({setUserData}) => {
  // This is taken from Chakra 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);

  return (
    <Flex justifyContent={'space-between'} py={6} alignItems={"Center"} borderBottomWidth={2} borderColor='#2EA043' backgroundColor='#000' zIndex={10} position='fixed' top={0} width='container.lg' >
        <box>
            <Image src={"/logo.svg"} fill alt='github-logo' sx={{filter: "invert(1)", height: "75px"}} />
        </box>
        <Search setUserData={(res) => setUserData(res)} setLoading={setLoading} />
        <box>
            <Button size="sm" color={"white"} bg={"#2EA043"} _hover={{ bg: "#257734" }} onClick={onOpen}>
                Search History 
            </Button>
        </box>
        {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export default Navbar