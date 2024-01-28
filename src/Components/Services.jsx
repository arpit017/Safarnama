import React from "react";
import {
  Stack,
  Box,
  Heading,
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Text,
  Image,
  Grid,
} from "@chakra-ui/react";

const Services = () => {
  return (
    <Card
      border={"none"}
      marginTop={"30"}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      width={"70%"}
      marginLeft={"15%"}
    >
       <Image
        objectFit="cover"
        borderBottomRadius={"20%"}
        minWidth={"40%"}
        maxW={{ base: "100%", sm: "200px" }}
        src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2022/08/Goreme-town-in-CappadociaTurkey.jpg"
        alt="Caffe Latte"
      />
      <Stack alignItems={"start"}>
        <CardBody textAlign={"left"}>
          <Heading size="xl">OUR SERVICES</Heading>
          <Heading size="sm">SAFARNAMA TRAVEL AGENCY</Heading>
          <Text py="2">
            We understand that every traveler is unique, and we take pride in
            crafting tailor-made itineraries that cater to your specific
            interests and preferences. From arranging flights and accommodations
            to organizing immersive tours and activities, we handle every aspect
            of your journey with meticulous attention to detail. With MBALAYANG
            Travel Agency, you can embark on a worry-free adventure, knowing
            that every aspect of your trip is expertly planned and executed.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="orange" margin={"auto"}>
            See More
          </Button>
        </CardFooter>
      </Stack>

     
    </Card>
  );
};

export default Services;
