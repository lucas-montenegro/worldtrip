import { Flex, Stack, Box, Text } from '@chakra-ui/react'

export function HeroText() {
    return (
        <Flex>
            <Stack spacing="5" alignItems="start">
                <Box maxWidth="426px">
                    <Text
                      color="gray.50"
                      fontSize="4xl"
                      lineHeight="54px"
                      fontWeight="medium"
                    >
                        5 Continentes, 
                        <br />
                        Infinitas Possibilidades.
                    </Text>
                </Box>

                <Box maxWidth="524px">
                    <Text 
                      color="gray.100"
                      fontSize="xl"
                      lineHeight="8"
                      fontWeight="normal"
                    > 
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Box>
            </Stack> 
        </Flex>
    )
}