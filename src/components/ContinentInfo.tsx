import { Box, Image, Text, Flex, HStack } from '@chakra-ui/react'
import { TravelInfo } from './TravelInfo'

interface ContinentInfoProps {
    description: string;
    countriesNumber: string;
    languagesNumber: string;
    bestCitiesNumber: string;
}

export function ContinentInfo( { 
  description,
  countriesNumber,
  languagesNumber,
  bestCitiesNumber,
}: ContinentInfoProps) {
    return (
        <Flex
          w="100%"
          direction="row"
          justifyContent="space-between"
        >
            <Text
                maxWidth="600px"
                fontSize="2xl"
                fontWeight="normal"
                lineHeight="9"
                textAlign="justify"
            >
                {description}
            </Text>

            <Flex maxWidth="490px" alignItems="center" justifyContent="center">
                <HStack spacing="8">
                    <TravelInfo imgUrlOrHighlightInfo={countriesNumber} textInfo="países" />
                    <TravelInfo imgUrlOrHighlightInfo={languagesNumber} textInfo="línguas" />
                    <TravelInfo tooltipInfo imgUrlOrHighlightInfo={bestCitiesNumber} textInfo="cidades +100" />
                </HStack>
            </Flex>
        </Flex>
    )
}