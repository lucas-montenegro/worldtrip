import { GetStaticProps, GetStaticPaths } from 'next'
import { Box, Text, Stack } from '@chakra-ui/react'
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

            <Box w="100%" h="500px" mb="20" bgImage={img} bgRepeat="no-repeat">
                <Text
                pt="96"
                pl="36"
                fontWeight="semibold"
                fontSize="5xl"
                lineHeight="72px"
                color="gray.50"
                >
                    {name}
                </Text>
            </Box>

            <Stack w="100%" maxWidth="1160px" mx="auto" spacing="20" mb="9">
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