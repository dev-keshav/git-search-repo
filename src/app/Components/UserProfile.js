import { Avatar, Flex, VStack } from '@chakra-ui/react'
import React from 'react'

const UserProfile = ({userData}) => {
  return (
    <>
        <Flex my={16} border={"2px solid"} borderColor={"green.500"} borderRadius={4} padding={8}>
            <VStack gap={5}>
                <Avatar size={'xl'} name={userData.name} src={userData.avatar_url} />
            </VStack>
        </Flex>
    </>
  )
}

export default UserProfile