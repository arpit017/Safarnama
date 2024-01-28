import React from 'react'
import { Button,Box,Text,Flex } from '@chakra-ui/react'
import {  useSelector } from 'react-redux'

export const Pagination = ({page,handlePage}) => {

let totalPages=useSelector((data)=>{
  return data.totalPages
})

let lastPage=Math.ceil(totalPages/8)
console.log(lastPage)

  return (
    <div>
        <Flex gap={"5"}>
            <Button isDisabled={page <= 1} onClick={()=>handlePage(-1)}>Previous</Button>
            <Text fontSize='xl' >{page}</Text>
            <Button isDisabled={page === lastPage} onClick={()=>handlePage(+1)}>Next</Button>
        </Flex>

    </div>
  )
}
