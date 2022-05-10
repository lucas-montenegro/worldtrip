import { Box, Text, SimpleGrid } from '@chakra-ui/react'
import { City } from '../../types/city'

import { Card } from './Card'

interface CitiesInfoProps {
    cities: City[]
}

export function CitiesInfo({ cities }: CitiesInfoProps) {
    return (
        <Box w="100%" pl={{base: "4", lg: "0"}}>
            <Text
              mb={{base: "5", lg: "10"}}
              fontSize={{base: "2xl", lg: "4xl"}}
              fontWeight="medium"
              lineHeight={{base: "36px", lg: "54px"}}
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