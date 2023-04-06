import { 
  Center,
  ChakraProvider,
  Box,
} from '@chakra-ui/react'

export const Header  = () => {
  return(
    <ChakraProvider>
      <Center backgroundColor='#9413dc'>
        <Box backgroundColor='#9413dc' padding='15px' fontSize={30}>
          Dio Bank
        </Box>
      </Center>
    </ChakraProvider>
  )
}
