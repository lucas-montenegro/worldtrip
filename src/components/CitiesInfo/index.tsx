import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { City } from '../../types/city'

import { Card } from './Card'

interface CitiesInfoProps {
    cities: City[]
}

export function CitiesInfo({ cities }: CitiesInfoProps) {
    return (
        <Box w="100%">
            <Text
              mb="10"
              fontSize="4xl"
              fontWeight="medium"
              lineHeight="54px"
            >
                Cidades +100
            </Text>

            <SimpleGrid minChildWidth='256px' spacing="45px">
                { cities.map(city => {
                    return (
                        <Card key={city.city} img={city.img} city={city.city} country={city.country} flag={city.flag} />
                    )
                })}
            </SimpleGrid>
        </Box>
    )
}