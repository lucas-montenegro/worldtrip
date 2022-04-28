import { Flex, Text, Link } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from "swiper"

import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";

type Country = {
    title: string;
    description: string;
    backgroundImg: string;
    href: string;
}

interface CarouselProps {
    countries: Country[];
}

export function Carousel({ countries }: CarouselProps) {
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
        { countries.map(country => {
            return (
                <SwiperSlide key={country.title} >
                    <Flex
                      w="100%"
                      h="450px"
                      bgImage={country.backgroundImg}
                      bgRepeat="no-repeat"
                      alignItems="center"
                      justifyContent="center"
                      textAlign="center"
                    >
                        <Link href={country.href} _hover={{textDecoration: 'none'}}>
                            <Text
                              color="gray.50"
                              fontSize="5xl"
                              fontWeight="bold"
                              lineHeight="72px"
                            >
                                {country.title}
                            </Text>

                            <Text
                              color="gray.100"
                              fontSize="2xl"
                              fontWeight="bold"
                              lineHeight="9"
                            >
                                {country.description}
                            </Text>
                        </Link>
                    </Flex>                    
                </SwiperSlide>
            )
        })}
      </Swiper>
    )
}