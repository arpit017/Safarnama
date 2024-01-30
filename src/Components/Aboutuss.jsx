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

const Aboutuss = () => {
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
      <Stack alignItems={"start"}>
        <CardBody textAlign={"left"}>
          <Heading size="xl">ABOUT US</Heading>
          <Heading size="sm">WHY CHOOSE US</Heading>
          <Text py="2">
            With a passion for exploration and a commitment to excellence, we
            strive to provide our clients with the highest level of service and
            personalized attention. Whether you're planning a relaxing beach
            getaway, an adventurous trek through the mountains, or a cultural
            immersion in a vibrant city, our team of travel experts is here to
            turn your dreams into reality.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="orange" margin={"auto"}>
            See More
          </Button>
        </CardFooter>
      </Stack>

      <Image
        objectFit="cover"
        borderBottomRadius={"20%"}
        minWidth={"40%"}
        maxW={{ base: "100%", sm: "200px" }}
        src="https://www.indianluxurytrains.com/wp-content/uploads/2014/04/Hawa-Mahal-Palace-Jaipur-Monuments-Of-India-1.jpg"
        alt="Caffe Latte"
      />
    </Card>
  );
};

export default Aboutuss;
