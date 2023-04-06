import { 
  Center,
  ChakraProvider,
  Input,
  Box,
} from '@chakra-ui/react'
import { Header } from '../../components/Header/Header';
import {GenericButton} from '../../components/Button/button'

interface ICard {
  login: () => void;
}

export const Card = (cardProps: ICard) => {
  return(
     <ChakraProvider>
      <Header></Header>
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
        <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" />
          <Input placeholder="password" />
          <GenericButton text='Enviar' onClick={cardProps.login}></GenericButton>
        </Box>
      </Box>
    </ChakraProvider>
  )
}