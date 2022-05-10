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
                      h={{base: "250px", lg: "450px"}}
                      bgImage={continent.backgroundImg}
                      bgRepeat="no-repeat"
                      pt={{base: "110px", lg: "180px"}}
                      justifyContent="center"
                      textAlign="center"
                    >
                        <Link href={continent.href} _hover={{textDecoration: 'none'}}>
                            <Text
                              color="gray.50"
                              fontSize={{base: "xl", lg: "5xl"}}
                              fontWeight="bold"
                              lineHeight={{base: "36px", lg: "72px"}}
                            >
                                {continent.title}
                            </Text>

                            <Text
                              color="gray.100"
                              fontSize={{base: "sm", lg: "2xl"}}
                              fontWeight="bold"
                              lineHeight={{base: "21px", lg: "9"}}
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