import { Box, Heading } from "@chakra-ui/layout"
import { Divider } from "@chakra-ui/react"

export default function Header({ title }) {
  return (
    <Box py={4}>
      <Heading pb={4}
      >
        {title}
      </Heading>
      <Divider />
    </Box>
  )
}
