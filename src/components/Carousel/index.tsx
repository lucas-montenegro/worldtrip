import { Flex, Text, Link } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

type Continent = {
    title: string;
    description: string;
    backgroundImg: string;
    href: string;
}

interface CarouselProps {
    continents: Continent[];
}

export function Carousel({ continents }: CarouselProps) {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={90}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        { continents.map(continent => {
            return (
                <SwiperSlide key={continent.title} >
                    <Flex
                      w="100%"
                      h="450px"
                      bgImage={continent.backgroundImg}
                      bgRepeat="no-repeat"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                    >
                        <Link href={continent.href} _hover={{textDecoration: 'none'}}>
                            <Text
                              color="gray.50"
                              fontSize="5xl"
                              fontWeight="bold"
                              lineHeight="72px"
                            >
                                {continent.title}
                            </Text>

                            <Text
                              color="gray.100"
                              fontSize="2xl"
                              fontWeight="bold"
                              lineHeight="9"
                            >
                                {continent.description}
                            </Text>
                        </Link>
                    </Flex>                    
                </SwiperSlide>
            )
        })}
      </Swiper>
    )
}