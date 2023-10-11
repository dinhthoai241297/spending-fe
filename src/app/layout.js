import { CSSReset } from '@chakra-ui/react';

import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import BodyWrap from '@/components/layout/body-wrap';
import { Providers } from "./providers";

import '@/assets/scss/global.scss';


export const metadata = {
    title: 'Spending',
    description: 'Self Spending',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    <CSSReset />
                    <Header />
                    <BodyWrap>{children}</BodyWrap>
                    <Footer />
                </Providers>
            </body>
        </html>
    )
}
