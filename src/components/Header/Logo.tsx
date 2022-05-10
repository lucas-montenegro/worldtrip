import { Box, Image } from '@chakra-ui/react'

export function Logo() {
    return (
        <Box w={{base: "81px", lg: "185px"}} h={{base: "20px", lg: "46px"}} mx="auto">
            <Image src='/Logo.svg' alt='Logo' />
        </Box>
    )
}