import { Text, Flex, HStack } from '@chakra-ui/react'
import { TravelInfo } from '../TravelInfo'
import { ContinentNumbersInfo } from './ContinentNumbersInfo';

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
          maxWidth={{base: "343px", lg: "1160px"}}
          direction={{base: "column", lg: "row"}}
          justifyContent={{lg: "space-between"}}
          mx={{base: "auto", lg: "0"}}
        >
            <Text
                maxWidth={{base: "343px", lg: "600px"}}
                fontSize={{base: "sm", lg: "2xl"}}
                fontWeight="normal"
                lineHeight={{base: "21px", lg: "9"}}
                textAlign="justify"
                mb={{base: "4", lg: "0"}}
            >
                {description}
            </Text>

            <Flex maxWidth={{base: "343px", lg: "490px"}} alignItems="center" justifyContent="center">
                <HStack spacing={{lg: "4", xl: "8"}}>
                    <ContinentNumbersInfo numberInfo={countriesNumber} textInfo="países" />
                    <ContinentNumbersInfo numberInfo={languagesNumber} textInfo="línguas" />
                    <ContinentNumbersInfo tooltipInfo numberInfo={bestCitiesNumber} textInfo="cidades +100" />
                </HStack>
            </Flex>
        </Flex>
    )
}