import { GetStaticProps } from 'next'
import { Box, Flex, Divider, Text } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { TravelInfo } from '../components/TravelInfo'
import { Carousel } from '../components/Carousel'

type Resource = {
  text: string;
  imgUrl: string;
}

type Continent = {
  title: string;
  description: string;
  backgroundImg: string;
  href: string;
}
interface HomeProps {
  resources: Resource[];
  continents: Continent[];
}

export default function Home({ resources, continents }: HomeProps) {
  return (
    <Box>
      <Header />

      <Hero />

      <Flex
        maxWidth="1160px"
        mx="auto"
        my="20"
        justifyContent="space-between"
      >
        { resources.map(resource => {
          return (
            <TravelInfo
              key={resource.text}
              isImage
              imgUrlOrHighlightInfo={resource.imgUrl}
              textInfo={resource.text} 
            />
          )
        })}

      </Flex>

      <Divider mx="auto" w="90px" borderColor="gray.600" />

      <Box maxWidth="840px" mx="auto" my="12">
        <Text
          color="gray.600"
          lineHeight="54px"
          fontWeight="medium"
          fontSize="4xl"
          textAlign="center"
        >
          Vamos nessa? <br />
          Então escolha o seu continente
        </Text>
      </Box>

      
      <Box maxWidth="1240px" mx="auto" mb="10">
        <Carousel continents={continents} />  
      </Box>
    </Box>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  // first, fetching features data
  const resourcesData = await fetch('http://localhost:7200/resources')
  const resources = await resourcesData.json()

  // then, fetching features data
  const continentsData = await fetch('http://localhost:7200/continents')
  const continents = await continentsData.json()

  return {
      props: {
        resources,
        continents,
      },
      revalidate: 60 * 60 * 24 * 7, // 1 week
  }
}