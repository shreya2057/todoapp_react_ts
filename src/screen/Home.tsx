import { Box, Flex, Heading, Stack, useBreakpointValue } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import Categories from "../components/Categories";

function Home(){

    const visibility = useBreakpointValue({"sm": false, "md":true});

    return(
        <Flex height={"100vh"} direction={"column"} p={0} m={0}>
            <Navbar/>
            <Flex width={"100%"} height={"100%"}>
                {
                    visibility
                    &&
                    <Categories/>
                }
                <Flex flex={1} justifyContent={"center"} align={"center"}>
                    <Box borderWidth={1} px={10} py={6} rounded={"md"} shadow={"md"} backgroundColor={"#eff6ff"}>
                        <Stack spacing={5}>
                            <Heading fontSize="xl">Todo List</Heading>
                            <TodoCard/>
                            <TodoCard/>
                        </Stack>
                    </Box>
                </Flex>
            </Flex>       
        </Flex>
    );
}

export default Home;