import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Stack,
  Heading,
  CardBody,
  Text,
  Image,
  CardFooter,
  Button,
  Box,
  Progress,
  Flex,
  VStack,
  StackDivider,
  Spacer,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import Navbar from "./Navbar";
import { UpperHome } from "./UpperHome";
import { DetailsImage } from "./DetailsImage";
import Footer from "./Footer";


export const Details = () => {
  const { id } = useParams();
  // console.log(id)
  const [blog, setBlog] = useState("");
  useEffect(() => {
    axios.get(`https://blog-backend-cl3f.onrender.com/blogs/details/${id}`).then((res) => {
      console.log(res);
      setBlog(res.data.newBlog);
    });
  }, []);

  return (
    <>
      <UpperHome />
      {/* --------------------------------------------------> */}
      <Box width={"80%"} m="auto" mt="9">
        <Progress value={100} size="xs" colorScheme="red" />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
            mt="2"
            mb="2"  
          />

          <Text w="80%" fontStyle={"italic"}>
            "Meet {blog.creatorName}, the maestro of our blog, who skillfully blends words
            into enchanting narratives. With every post, {blog.creatorName} paints vivid
            landscapes of ideas, sparking curiosity and leaving an indelible
            mark on our readers' minds. His storytelling prowess transforms each
            page into a canvas, inviting you to embark on a shared adventure of
            words and imagination."
          </Text>
       
        </Box>
        <Progress value={100} size="xs" colorScheme="red" />
      </Box>
      {/* --------------------------------------------------> */}
      <Flex mt="10" height="100vh" overflowY="auto" bg="#FEEBC8">
        <VStack
          spacing="2"
          paddingLeft={"2%"}
          paddingTop={"2%"}
          alignItems={"initial"}
          textAlign={"initial"}
          bg="#EDFDFD"
          width="25%"
          position="sticky"
          top="0"
          zIndex="1000"
        >
          <Text fontSize="4xl" fontWeight="bold">
            Contents
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            1.Overview
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            2.Tips and Recommendations
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            3.Planning Guides
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            4.Budget Travel Tips
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            5.Safety and Health Tips
          </Text>
          {/* Add your other VStack items here */}
          <Spacer />
          <Box boxSize="sm" width={"80%"}>
            <Image
              src="https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_640.jpg"
              alt="Dan Abramov"
            />
            <Text fontSize="xl" fontWeight="normal" fontStyle={"italic"} mt="2">
              "Travel: where the journey becomes the destination, and every step
              writes a story."
            </Text>
            <Text fontSize="xl" fontWeight="normal" fontStyle={"italic"} mt="2">
              ~Arpit
            </Text>
          </Box>
        </VStack>

        <Box
          boxSize="md"
          width={"75%"}
          alignItems="center"
          alignContent={"center"}
        >
          <Text fontSize="4xl" fontWeight="bold" m="5">
            {blog.heading}
          </Text>

          <Image objectFit={"cover"} boxSize="70%" m="auto" src={blog.image} />

          <Heading m="4">Overview</Heading>
          <Text
            fontWeight={"semibold"}
            fontSize={"lg"}
            w="80%"
            m="auto"
            textAlign={"initial"}
          >
            {blog.content}
            <Text>
              Explore the allure of an extraordinary destination where natural
              wonders, cultural marvels, and modern amenities converge. Nestled
              in the heart of country, this hidden gem invites travelers to
              embark on a journey of adventure, relaxation, and cultural
              immersion.
            </Text>
            <Text fontSize={"2xl"} mt="2">
              Embrace Nature's Beauty:
            </Text>
            <Text>
              Uncover the breathtaking landscapes that define this destination.
              From majestic mountains to pristine beaches, nature's canvas
              paints a mesmerizing backdrop. Immerse yourself in the serene
              beauty and find tranquility in every corner.
            </Text>
            <Text fontSize={"2xl"} mt="2">
              Dive into Cultural Riches:
            </Text>
            <Text>
              Step into a world where history and tradition come alive. Historic
              landmarks, museums, and local artistry weave a tapestry that tells
              the story of centuries past. Engage with warm-hearted locals,
              savor unique flavors, and partake in vibrant festivities that
              reflect the soul of the community.
            </Text>
            <Text fontSize={"2xl"} mt="2">
              Planning Guides:
            </Text>
            <Text>
              Welcome to a captivating destination where a symphony of natural
              wonders, cultural treasures, and modern comforts awaits. Nestled
              in the heart of this enchanting country, visitors are invited to
              embark on a journey of discovery, embracing adventure, relaxation,
              and cultural immersion. Discover the diverse beauty of the
              destination, from the majestic peaks of its mountains to the
              pristine beaches along the Sapphire Coast.
              <br /> The ideal time to visit is during the spring months of
              April and May, when the landscape blooms with vibrant colors,
              creating a mesmerizing backdrop for exploration. As visitors dive
              into the cultural riches, exploring historic landmarks such as the
              ancient Citadela and immersing themselves in exhibits at the Grand
              Museum of Art, they can engage with warm-hearted locals and savor
              local delicacies like the renowned Seaflower Risotto and Spiced
              Mango Tango at recommended restaurants like Ocean Breeze Tavern.{" "}
              <br />
            </Text>
            <Text fontSize="2xl" mt="4">
              Moments Captured:
            </Text>

            <Box w="100%" m="auto">
              <DetailsImage />
            </Box>

            <Text fontSize={"2xl"} mt="-40">
              Budget Travel Tips:
            </Text>
            <Text>
              Embarking on a budget-friendly adventure doesn't mean compromising
              on experiences. To make the most of your budget travel, plan ahead
              by booking accommodations and transportation in advance for
              favorable rates. Opt for local street food and markets to savor
              authentic cuisine without breaking the bank. Take advantage of
              free activities, explore on foot, and consider public
              transportation for cost-effective ways to navigate your
              destination. Embrace budget-friendly accommodations such as
              hostels or vacation rentals, and be flexible with your travel
              dates to capitalize on affordable options. With careful planning
              and a sense of adventure, budget travel opens doors to rich
              cultural experiences without straining your wallet.
            </Text>
          </Text>
          <Footer />
        </Box>
      </Flex>
      {/* --------------------------------------------------> */}
    </>
  );
};

//------------------------------------------------------------------------->
