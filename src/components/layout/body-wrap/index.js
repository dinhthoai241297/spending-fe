import { Box, Container } from '@chakra-ui/react';
import React from 'react';

const BodyWrap = ({ children }) => {
    return (
        <Box>
            <Container maxW="7xl">
                {children}
            </Container>
        </Box>
    );
};

export default BodyWrap;