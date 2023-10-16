'use client'

import { paths } from '@/constants/paths'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import {
    Avatar, Box, Button, Container, Flex, HStack,
    IconButton, Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorModeValue, useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'

import { MdOutlineSavings } from "react-icons/md";

const menus = [
    { name: 'Categories', path: paths.categories },
    { name: 'Transactions', path: paths.transactions },
]

const NavLink = ({ menu }) => {

    return (
        <Link href={menu.path}>
            <Box
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                    textDecoration: 'none',
                    bg: useColorModeValue('gray.200', 'gray.700'),
                }}
            >
                {menu.name}
            </Box>
        </Link>
    )
}

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')}>
            <Container maxW="7xl">
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={4} alignItems={'center'}>
                        <Link href={paths.main}><Box><MdOutlineSavings size={24} color="#38A169" /></Box></Link>
                        <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                            {menus.map((menu) => (
                                <NavLink key={menu.path} menu={menu} />
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Menu>
                            <MenuButton
                                as={Button}
                                rounded={'full'}
                                variant={'link'}
                                cursor={'pointer'}
                                minW={0}>
                                <Avatar
                                    size={'sm'}
                                    src="/images/poro.png"
                                />
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Link 1</MenuItem>
                                <MenuItem>Link 2</MenuItem>
                                <MenuDivider />
                                <MenuItem>Link 3</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {menus.map((menu) => (
                                <NavLink key={menu.path} menu={menu} />
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Container>
        </Box>
    )
}

export default Header;