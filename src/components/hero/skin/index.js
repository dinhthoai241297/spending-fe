'use client'

import { Button, Container, Flex, Image as ChakraImage } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { images } from './data';


const HeroSkins = () => {
    const [showIndex, setShowIndex] = useState(0);

    const preload = url => {
        const imagePreload = new Image();
        imagePreload.src = url;
    }

    useEffect(() => {
        preload(showIndex + 1);
    }, [ showIndex ]);

    return (
        <Container py={8} maxW={1200}>
            <ChakraImage
                src={`https://lienquan.garena.vn/${images[showIndex]}`}
                height={400}
                width="auto"
                objectFit="contain"
                mx="auto"
            />
            <Flex justifyContent="space-between" alignItems="center" mt={4} maxW={600} mx="auto">
                <Button colorScheme="orange" onClick={() => setShowIndex(prev => Math.max(prev - 1, 0))}>Prev</Button>
                <b>{showIndex}/{images.length}</b>
                <Button colorScheme="green" onClick={() => setShowIndex(prev => prev + 1)}>Next</Button>
            </Flex>
        </Container>
    );
};

export default HeroSkins;