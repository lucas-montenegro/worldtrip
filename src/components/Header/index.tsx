import { useRouter } from 'next/router'

import { Flex } from '@chakra-ui/react'

import { Logo } from './Logo'
import { BackButton } from './BackButton'

export function Header() {
    const router = useRouter()

    return (
        <Flex
          w="100%"
          maxWidth={1440}
          mx="auto"
          py={{base: "4", lg: "7"}}
          alignItems="center"
          position="relative"
        >
            { router.pathname !== '/' && (<BackButton />)}

            <Logo />
        </Flex>
    )
}