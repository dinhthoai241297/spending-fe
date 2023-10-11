import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const BodyWrap = ({ children }) => {
    return (
        <Container maxW="7xl">
            {children}
        </Container>
    );
};

export default BodyWrap;