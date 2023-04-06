import {
  Center,
  Button
} from "@chakra-ui/react";

interface ButtonProps { 
  text: string;
  onClick: () => void;
}

export const GenericButton = (props: ButtonProps) => { 
  return (
    <Center>
      <Button onClick={props.onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
        {props.text}
      </Button>
    </Center>
  )
}