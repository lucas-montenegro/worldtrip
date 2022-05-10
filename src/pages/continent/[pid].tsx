import { GetStaticProps, GetStaticPaths } from 'next'
import { Box, Text, Stack, Flex } from '@chakra-ui/react'
import { City } from '../../types/city'

import { Header } from '../../components/Header'
import { ContinentInfo } from '../../components/ContinentInfo'
import { CitiesInfo } from '../../components/CitiesInfo'

interface ContinentProps {
    name: string;
    img: string;
    description: string;
    countriesNumber: string;
    languagesNumber: string;
    bestCitiesNumber: string;
    bestCities: City[];
}

export default function Continent({
  name,
  img,
  description,
  countriesNumber,
  languagesNumber,
  bestCitiesNumber,
  bestCities
}: ContinentProps) {
    return (
        <>
            <Header />

            <Flex 
              w="100%" 
              h={{base: "150px", lg: "500px"}} 
              mb={{base: "6", lg: "20"}} 
              bgImage={img} 
              bgRepeat="no-repeat" 
              bgSize="cover" 
              alignItems={{base: "center", lg: "start"}}
              justifyContent={{base: "center", lg: "start"}}
            >
                <Text
                  pt={{lg: "369px"}}
                  pl={{lg: "140px"}}
                  fontWeight="semibold"
                  fontSize={{base: "3xl", lg: "5xl"}}
                  lineHeight={{base: "42px", lg: "72px"}}
                  color="gray.50"
                >
                    {name}
                </Text>
            </Flex>

            <Stack w="100%" maxWidth="1160px" mx="auto" spacing={{base: "8", lg: "20"}} mb={{base: "4", lg: "9"}} >
                <ContinentInfo
                description={description}
                countriesNumber={countriesNumber}
                languagesNumber={languagesNumber}
                bestCitiesNumber={bestCitiesNumber} 
                />

                <CitiesInfo cities={bestCities} />
            </Stack>
        </>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { pid } = params

    const continentData = await fetch(`http://localhost:7200/continent/${pid}`)
    const continent = await continentData.json()
    const { name, img, description, countriesNumber, languagesNumber, bestCitiesNumber, bestCities } = continent
    
    return {
        props: {
            name, 
            img, 
            description, 
            countriesNumber, 
            languagesNumber, 
            bestCitiesNumber, 
            bestCities
        },
        revalidate: 60 * 60 * 24 // 24 hours 
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking',
    };
}