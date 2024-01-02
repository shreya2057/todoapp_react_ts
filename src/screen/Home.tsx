import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function Home(){
    return(
        <Flex direction={"column"} p={0} m={0}>
            <Navbar/>
            <Heading fontSize="xl">HomeScreen</Heading>
        </Flex>
    );
}

export default Home;