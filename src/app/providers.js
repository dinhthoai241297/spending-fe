'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }) {
    return (
        <CacheProvider>
            <ChakraProvider resetCSS>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
}