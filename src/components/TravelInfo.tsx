import { Flex, Image, Text } from '@chakra-ui/react'

interface TravelInfoProps {
    isImage: boolean;
    imgUrlOrHighlightInfo: string;
    textInfo: string;
}

export function TravelInfo({ isImage = false, imgUrlOrHighlightInfo, textInfo }: TravelInfoProps) {
    return (
        <Flex maxWidth="40" direction="column" alignItems="center" justifyContent="center">
            { isImage === true 
                ?  <Image src={imgUrlOrHighlightInfo} alt={`${textInfo} image`} />
                : <Text color="gray.600" >{textInfo}</Text>
            }

            <Text
              mt="6"
              color="gray.600"
              fontWeight="semibold"
              textAlign="center"
              lineHeight="9"
              fontSize="2xl"
            >
                {textInfo}
            </Text>
        </Flex>
    )
}
