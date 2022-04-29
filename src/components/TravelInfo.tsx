import { Flex, Image, Text, Tooltip } from '@chakra-ui/react'

interface TravelInfoProps {
    isImage?: boolean;
    tooltipInfo?: boolean;
    imgUrlOrHighlightInfo: string;
    textInfo: string;
}

export function TravelInfo({ 
    isImage = false, 
    tooltipInfo = false, 
    imgUrlOrHighlightInfo, 
    textInfo 
}: TravelInfoProps) {
    return (
        <Flex direction="column" alignItems="center" justifyContent="center">
            { isImage === true 
                ?  <Image src={imgUrlOrHighlightInfo} alt={`${textInfo} image`} mb="6" />
                : <Text color="yellow.500" fontWeight="semibold" fontSize="5xl" lineHeight="72px" textAlign="center">{imgUrlOrHighlightInfo}</Text>
            }

            <Flex direction="row">
                <Text
                  color="gray.600"
                  fontWeight="semibold"
                  textAlign="center"
                  lineHeight="9"
                  fontSize="2xl"
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
