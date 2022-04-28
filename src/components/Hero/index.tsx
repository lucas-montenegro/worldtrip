import { Flex, HStack } from '@chakra-ui/react'

import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'

export function Hero() {
    return (        
        <Flex
          w="100%"
          h="368px"
          bg="url('/Background.svg') no-repeat"
          px="36"
          pt="20"
        >
            <HStack w="100%" spacing="48" alignItems="start">
                <HeroText />

                <HeroImage />
            </HStack>
        </Flex>
    )
}