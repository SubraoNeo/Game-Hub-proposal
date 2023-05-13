import React, { useState } from "react";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  List,
  ListIcon,
  ListItem,
  Select,
  Show,
  Spacer,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { BsSpeedometer2 } from "react-icons/bs";
import { CiVolumeHigh } from "react-icons/ci";
import { MdOutlineReduceCapacity } from "react-icons/md";
import Nav from "../components/proposal/Nav";
import { BsSearch } from "react-icons/bs";

const Proposal = () => {
  const [tabIndex, setTabIndex] = useState<Number>(0);
  return (
    <Box marginX={5}>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <Nav setTabIndex={setTabIndex} />
          <Divider orientation="horizontal" />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" marginTop={5}>
            <Box fontSize="md" fontWeight="bold" paddingBottom={3}>
              Themes
            </Box>
            <List spacing={5}>
              <ListItem>
                <ListIcon as={BsSpeedometer2} color="green.500" />
                Speed
              </ListItem>
              <ListItem>
                <ListIcon as={MdOutlineReduceCapacity} color="green.500" />
                Capacity
              </ListItem>
              <ListItem>
                <ListIcon as={CiVolumeHigh} color="green.500" />
                Volume
              </ListItem>
            </List>
          </GridItem>
        </Show>
        <GridItem area="main" marginTop={5}>
          <Flex>
            <Text fontSize="md" fontWeight="bold">
              Metrics
            </Text>
            <Spacer />
            <Box>
              <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input
                  borderRadius={20}
                  placeholder="Search for 308 Metrices...."
                  variant="filled"
                />
              </InputGroup>
            </Box>
          </Flex>
          <Flex>
            <Box>
              <HStack spacing={3}>
                <Select variant="outline" placeholder="Order By" size="md">
                  <option value="1">Name</option>
                  <option value="2">Date</option>
                </Select>
                <Select variant="outline" placeholder="Platform" size="md">
                  <option value="1">Web</option>
                  <option value="2">Mobile</option>
                </Select>
                <Select variant="outline" placeholder="Customer" size="md">
                  <option value="1">1</option>
                  <option value="2">2</option>
                </Select>
              </HStack>
            </Box>
          </Flex>
          <Flex marginTop={5}>
            <Wrap spacing={5}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((val, index) => {
                return (
                  <WrapItem key={index}>
                    <Center w="150px" h="150px" bg="red.200">
                      {tabIndex ? `Volume M ${val}` : `Speed D ${val}`}
                    </Center>
                  </WrapItem>
                );
              })}
            </Wrap>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Proposal;
