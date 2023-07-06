"use client"
import { Button, Flex, Image } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex justifyContent={'space-between'} py={6} alignItems={"Center"} >
        <box>
            <Image src={"/logo.svg"} fill alt='github-logo' sx={{filter: "invert(1)", height: "65px"}} />
        </box>
        <box>
            <Button size="sm" colorScheme='whatsapp'>
                Search History
            </Button>
        </box>
    </Flex>
  )
}

export default Navbar