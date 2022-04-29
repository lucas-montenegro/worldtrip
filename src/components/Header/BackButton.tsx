import { Link } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function BackButton() {
    return (
        <Link ml="36" href='/' position="absolute"> 
            <ChevronLeftIcon 
              w="6"
              h="8"
              color="gray.600" 
            />
        </Link>
    )
}