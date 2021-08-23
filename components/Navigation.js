import { Flex, HStack, Icon, Link, Text } from "@chakra-ui/react"
import { FaClock } from 'react-icons/fa'

export default function Navigation({title}) {
  return (
    <Flex width="full" backgroundColor="#060606" p={4} justifyContent="space-between">
        <HStack>
            <Icon as={FaClock} color="white" fontSize="3xl" />
            <Text color="white">Timekeeper</Text>
        </HStack>
        <HStack color="gray.400">
            <Link _hover={{textDecoration: 'none', color: 'white'}} href="/ScreenA" p={4}>Screen A</Link>
            <Link _hover={{textDecoration: 'none', color: 'white'}} href="/ScreenB" p={4}>Screen B</Link>
            <Link _hover={{textDecoration: 'none', color: 'white'}} href="/ScreenC" p={4}>Screen C</Link>
        </HStack>
    </Flex>
  )
}
