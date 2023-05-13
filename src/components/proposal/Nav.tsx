import {
  Box,
  Button,
  HStack,
  Image,
  Tabs,
  TabList,
  Tab,
} from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { Dispatch, SetStateAction } from "react";

interface Props {
    setTabIndex: Dispatch<SetStateAction<Number>>;
  }

const Nav = ({setTabIndex}:Props) => {
  
  return (
    <HStack justifyContent="space-between" height="80px">
      <Box display="flex">
        <Image src={logo} boxSize="60px" />
        <HStack>
          <Tabs onChange={(index: Number) => setTabIndex(index)} variant='soft-rounded' colorScheme='green'>
            <TabList>
              <Tab>Discovery</Tab>
              <Tab>Similarity</Tab>
            </TabList>
          </Tabs>
        </HStack>
      </Box>
      <Button colorScheme="blue">Raise Request</Button>
    </HStack>
  );
};

export default Nav;
