import { Link } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function BackButton() {
    return (
        <Link ml={{base: "4", lg: "36"}} href='/' position="absolute"> 
            <ChevronLeftIcon 
              w={{base: "3", lg: "6"}}
              h={{base: "4", lg: "8"}}
              color="gray.600" 
            />
        </Link>
    )
}