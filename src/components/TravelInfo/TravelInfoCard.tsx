import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface TravelInfoCardProps {
    img: string;
    textInfo: string;
}

export function TravelInfoCard({ 
    img, 
    textInfo 
}: TravelInfoCardProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    })

    if (!isWideVersion) {
        img = './circle.svg'
    }

    return (
        <Flex direction={{base: "row", lg: "column"}} alignItems="center" justifyContent="center">
            <Image src={img} alt={`${textInfo} image`} mb={{lg: "6"}} mr={{base: "2", lg: "0"}} />

            
            <Text
                color="gray.600"
                fontWeight="semibold"
                textAlign="center"
                lineHeight={{base: "27px", lg: "9"}}
                fontSize={{base: "lg", lg: "2xl"}}
            >
                {textInfo}
            </Text>
        </Flex>
    )
}
