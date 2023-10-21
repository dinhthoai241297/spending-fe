'use client'

import { Box, HStack, Image, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverHeader, PopoverTrigger, SimpleGrid, Tag, VStack } from '@chakra-ui/react';

import Gender from './Gender';
import SkinCount from './SkinCount';

const HeroList = ({ list }) => {
    return (
        <SimpleGrid columns={{ sm: 2, md: 4, lg: 6, xl: 7 }} spacing='40px'>
            {list.map(hero => (
                <Popover key={hero.id} trigger='hover' placement='right'>
                    <PopoverTrigger>
                        <Box
                            textAlign="center"
                            cursor="pointer"
                            p={2}
                            borderRadius={4}
                            transition="all .25s"
                            _hover={{ backgroundColor: 'gray.200' }}
                        >
                            <Image width="80px" src={hero.icon} alt={hero.name} borderRadius={4} mx="auto" />
                            <b>{hero.name}</b>
                            <HStack justifyContent="center" gap={3}>
                                <Gender gender={hero.info1} />
                                <SkinCount count={hero.info6} />
                                <Tag size="sm" colorScheme="teal">{hero.info5}</Tag>
                            </HStack>
                        </Box>
                    </PopoverTrigger>
                    <PopoverContent width={200} color='white' bg='blue.800' borderColor='blue.800'>
                        <PopoverHeader>
                            <HStack>
                                <b>{hero.name}</b>
                                <Gender gender={hero.info1} />
                            </HStack>
                        </PopoverHeader>
                        <PopoverBody as={VStack} alignItems="flex-start" fontSize={14}>
                            <p><b>Vị trí:</b> {hero.info2}</p>
                            <p><b>Kỹ năng sử dụng:</b> {hero.info3}</p>
                            <p><b>Khu vực:</b> {hero.info4}</p>
                            <p><b>Năm ra mắt:</b> <Tag size="sm" colorScheme="teal">{hero.info5}</Tag></p>
                            <p><b>Trang phục:</b> {hero.info6}</p>
                        </PopoverBody>
                    </PopoverContent>
                </Popover>
            ))}
        </SimpleGrid>
    );
};

export default HeroList;