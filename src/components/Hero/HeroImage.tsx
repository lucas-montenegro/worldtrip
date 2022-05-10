import { Box, Image } from '@chakra-ui/react'

export function HeroImage() {
    return (
        <Box maxWidth={{ lg: "auto", xl: "417px" }} height={{ lg: "auto", xl: "335px"}}>
            <Image w="100%" h="100%" src='/Airplane.svg' alt='Airplane' />
        </Box>
        
    )
}