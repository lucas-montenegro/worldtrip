import { Flex, Stack, Box, Text } from '@chakra-ui/react'

export function HeroText() {
    return (
        <Flex justifyContent="center">
            <Stack spacing={{base: "2", lg: "5"}} alignItems="start">
                <Box maxWidth={{base: "238px", lg: "426px"}}>
                    <Text
                      color="gray.50"
                      fontSize={{ base: "xl", lg: "2xl", xl: "4xl"}}
                      lineHeight={{base: "30px", lg: "54px"}}
                      fontWeight="medium"
                    >
                        5 Continentes, 
                        <br />
                        Infinitas Possibilidades.
                    </Text>
                </Box>

                <Box maxWidth={{base: "333px", lg: "524px"}} >
                    <Text 
                      color="gray.100"
                      fontSize={{base: "sm", lg: "xl"}}
                      lineHeight={{base: "21px", lg: "8"}}
                      fontWeight="normal"
                    > 
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            </Stack> 
        </Flex>
    )
}