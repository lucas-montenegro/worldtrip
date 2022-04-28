import { Link } from '@chakra-ui/react'
import { ChevronLeftIcon } from '@chakra-ui/icons'

export function BackButton() {
    return (
        <Link href='/' position="absolute"> 
            <ChevronLeftIcon 
              ml="36"
              w="6"
              h="8"
              color="gray.600" 
            />
        </Link>
    )
}