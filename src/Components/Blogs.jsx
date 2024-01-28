import React from "react";
import Footer from "./Footer";
import {
  Box,
  Input,
  Select,
  SimpleGrid,
  Flex,
  Center,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Grid8 from "./Grid8";
import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import { UpperHome } from "./UpperHome";
import axios from "axios";

import { useState, useEffect } from "react";
import { BlogElement } from "./BlogElement";
import { Pagination } from "./Pagination";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { UseDispatch, useDispatch } from "react-redux";
export const Blogs = () => {
  const [data, setData] = useState([]);
  const [permanentdata, setPermanentData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortVal, setSortVal] = useState(null);
  const [filterVal, setFilterVal] = useState(null);
  const dispatch = useDispatch();
  const [search, setSearch] = useState(null);

  var url = `https://blog-backend-cl3f.onrender.com/blogs?page=${page}`;

  useEffect(() => {
    bringData();
  }, [page, filterVal, sortVal]);

  useEffect(() => {
    axios
      .get("https://blog-backend-cl3f.onrender.com/blogs/all")
      .then((res) => {
        setPermanentData(res.data.total_Blogs);
        dispatch({ type: "TOTAL_PAGES", payload: res.data.total_Blogs.length });
      });
  }, []);

  const bringData = () => {
    // ------------->

    console.log(sortVal, filterVal);
    if (sortVal === "asc") {
      url += "&sort=asc";
    } else if (sortVal === "desc") {
      url += "&sort=desc";
    }

    if (filterVal === "Travel") {
      sortVal !== null
        ? (url += `&sort=${sortVal}&tag=Travel`)
        : (url += "&tag=Travel");
    } else if (filterVal === "Technology") {
      sortVal !== null
        ? (url += `&sort=${sortVal}&tag=Technology`)
        : (url += "&tag=Technology");
    } else if (filterVal === "Food") {
      sortVal !== null
        ? (url += `&sort=${sortVal}&tag=Food`)
        : (url += "&tag=Food");
    }

    // ------------->

    axios
      .get(url)
      .then((res) => {
        setData(res.data.allBlogs);
      })
      .catch((err) => {
        console.log("error in blog comp while fetching data" + err);
      });
  };

  const handleSearch = (value) => {
    if (value !== "") {
      let filteredArray = permanentdata.filter((item) =>
        item.heading.toLowerCase().includes(value.toLowerCase())
      );
      setData(filteredArray);
    } else {
      bringData();
    }
  };

  const handlePage = (data) => {
    setPage(page + data);
  };

  return (
    <div>
      <UpperHome />
      <Flex
        width="80%"
        m="auto"
        alignItems="center"
        justifyContent="space-between"
        mt={20}
      >
        <Select
          placeholder="Filter By Tag"
          mr={4}
          variant="filled"
          bg="#FEEBC8"
          fontWeight={"medium"}
          onChange={(e) => setFilterVal(e.target.value)}
        >
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
          <option value="Food">Food</option>
        </Select>
        <Select
          placeholder="Sort By Budget"
          mr={4}
          variant="filled"
          bg="#FEEBC8"
          fontWeight={"medium"}
          onChange={(e) => setSortVal(e.target.value)}
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>

        <InputGroup
          onChange={(e) => {
            handleSearch(e.target.value);
            setSearch(e.target.value);
          }}
        >
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputLeftElement>
          <Input
            borderColor="red.300"
            type="text"
            placeholder="Search your Destination"
            fontWeight={"medium"}
          />
        </InputGroup>
      </Flex>
      <Box px={{ base: 4, md: 8, lg: 14, xl: 16 }} py={8}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 4 }} gap={"4"}>
          {data.length > 0 &&
            data.map((ele) => {
              return (
                <div>
                  <BlogElement ele={ele} />
                </div>
              );
            })}
        </SimpleGrid>
      </Box>
      <Center>
        <Pagination page={page} handlePage={handlePage} />
      </Center>
      <Box>
        <Footer />
      </Box>
    </div>
  );
};
