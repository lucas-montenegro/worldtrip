import { Flex, HStack, useBreakpointValue } from '@chakra-ui/react'

import { HeroText } from './HeroText'
import { HeroImage } from './HeroImage'

export function Hero() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    return (        
        <Flex
          w="100%"
          maxHeight={{lg:"368px"}}
          bg="url('/Background.svg') no-repeat"
          bgSize={{base: "cover", lg: "100%"}}
          px={{base: "4", lg:"36", xl: "36"}}
          pt={{ base: "10", xl: "20"}}
          pb={{ base: "7", lg: "0" }}
        >
            <HStack w="100%" spacing={{ lg: "20", xl: "48"}} alignItems="start">
                <HeroText />

                { isWideVersion && <HeroImage /> }
            </HStack>
        </Flex>
    )
}