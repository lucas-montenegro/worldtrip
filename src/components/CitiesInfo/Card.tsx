import { Box, Image, Flex, Text, Avatar } from '@chakra-ui/react'
import { City } from '../../types/city'


export function Card({
    img,
    city,
    country,
    flag
}: City) {
    return (
        <Box
          w="256px"
          
          bg="white"
        >
            <Image src={img} alt={`${city} image`} objectFit="cover" borderTopRadius="md"/>
            <Flex
              px="6"
              pt="4"
              pb="6"
              justifyContent="space-between"
              alignItems="center"
              borderX="1px"
              borderBottom="1px"
              borderColor="#FFBA0880"
              borderBottomRadius="md"
            >
                <Box>
                    <Text
                      color="gray.600"
                      fontSize="xl"
                      fontFamily="Barlow"
                      fontWeight="semibold"
                      lineHeight="base"
                      mb="3"
                    >
                        {city}
                    </Text>

                    <Text
                      color="gray.400"
                      fontSize="md"
                      fontFamily="Barlow"
                      fontWeight="medium"
                      lineHeight="6"
                    >
                        {country}
                    </Text>
                </Box>

                <Avatar w="30px" h="30px" src={flag} />
            </Flex>
        </Box>
    )
}