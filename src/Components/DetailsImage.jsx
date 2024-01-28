import React from 'react'
import { Stack,Image,Box } from '@chakra-ui/react'

export const DetailsImage = () => {
  return (
    <Stack direction='row' mt="4">
  <Box boxSize='sm'>
  <Image src='https://cdn.pixabay.com/photo/2021/06/17/04/42/man-6342665_640.jpg' alt='Dan Abramov' />
</Box>
  <Box boxSize='sm'>
  <Image src='https://cdn.pixabay.com/photo/2022/07/05/16/53/graz-7303533_640.jpg' alt='Dan Abramov' />
</Box>
  <Box boxSize='sm'>
  <Image src='https://cdn.pixabay.com/photo/2020/03/27/15/33/norway-4973935_640.jpg' alt='Dan Abramov' />
</Box>
</Stack>
  )
}
