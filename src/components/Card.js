import { Container } from '@chakra-ui/react';
import Draggable from 'react-draggable';

const Card = ({id, title, color="blue.100"}) =>{
    return (
        <Draggable defaultPosition={{x: 0, y: 0}}>
            <Container
                width={100}
                bg={color}
                borderColor="blackAlpha.100"
                borderWidth="1px"
                borderRadius="3px"
            >
                {id}: {title}
            </Container>
        </Draggable>
    )
};

export default Card;