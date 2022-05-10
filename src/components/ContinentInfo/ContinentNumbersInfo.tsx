import { Flex, Image, SimpleGrid, Text, Tooltip, useBreakpointValue } from '@chakra-ui/react'

interface ContinentNumbersInfoProps {
    tooltipInfo?: boolean;
    numberInfo: string;
    textInfo: string;
}

export function ContinentNumbersInfo({ 
    tooltipInfo = false,
    numberInfo, 
    textInfo 
}: ContinentNumbersInfoProps) {
    return (
        <Flex direction="column" alignItems={{base: "start", lg: "center"}} justifyContent="center">
            <Text color="yellow.500" fontWeight="semibold" fontSize={{base: "2xl", lg: "5xl"}} lineHeight={{base: "36px", lg: "72px"}}>{numberInfo}</Text>            

            <Flex direction="row">
                <Text
                  color="gray.600"
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight={{base: "27px", lg: "9"}}
                  fontSize={{base: "lg", lg: "2xl"}}
                >
                    {textInfo}
                </Text>

                {tooltipInfo && (
                    <Tooltip label='100 cidades mais visitadas do mundo' fontSize='sm'>
                        <Image ml="5px" src="/info-icon.svg" />
                    </Tooltip>
                )}
            </Flex>
        </Flex>
    )
}
