import { Flex, useBreakpointValue } from '@chakra-ui/react'
import { TravelInfoCard } from './TravelInfoCard';

type Resource = {
    text: string;
    img: string;
}

interface TravelInfoProps {
    resources: Resource[];
}

export function TravelInfo({ 
    resources
}: TravelInfoProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })


    if (!isWideVersion) {
        return (
            <Flex
              maxWidth="275px"
              flexWrap="wrap"
              justifyContent="space-around"
              gap="4"
              mx="auto"
              my="9"
            >
                { resources.map(resource => {
                    return (
                        <TravelInfoCard
                          key={resource.text}
                          img={resource.img}
                          textInfo={resource.text} 
                        />
                    )
                })}
            </Flex>
        )
    }
    
    return (
        <Flex
          maxWidth="1160px"
          mx="auto"
          my="20"
          justifyContent="space-between"
        >
        { resources.map(resource => {
          return (
            <TravelInfoCard
              key={resource.text}
              img={resource.img}
              textInfo={resource.text} 
            />
          )
        })}
      </Flex>
    )
}
