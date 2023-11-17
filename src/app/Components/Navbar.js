"use client"
import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import HistoryModal from './HistoryModal';
import Search from './Search';

const Navbar = ({setUserData}) => {
  // This is taken from Chakra 
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      setWidth(window.screen.width);
    }
  }, [width]);
  return (
    <Flex flex={1} justifyContent={'space-between'} py={5} alignItems={"Center"} borderBottomWidth={2} borderColor='#2EA043'
      backgroundColor='#000' zIndex={10} position='fixed' left={width <= 500 ? 0 : 'q'} top={0} width={width * (width <= 500 ? 1 : 0.7)}
      gap={2}>
        <Image src={"/logo.svg"} fill alt='github-logo' sx={{filter: "invert(1)", height: width <= 500 ? "35px" : "75px"}} />
        <Search width={width} setUserData={(res) => setUserData(res)} setLoading={setLoading} />
        <Button size="md" fontSize='70%' color={"white"} bg={"#2EA043"} _hover={{ bg: "#257734" }} onClick={onOpen}>
            Search History
        </Button>
        {isOpen && <HistoryModal isOpen={isOpen} onClose={onClose} />}
    </Flex>
  )
}

export default Navbar