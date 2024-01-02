import { Box, Divider, Flex, Heading, ListItem, Stack, UnorderedList, Text, useBreakpointValue } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import Navbar from "../components/Navbar";
import TodoCard from "../components/TodoCard";
import { task_categories } from "../data/task_categories";

function Home(){

    const visibility = useBreakpointValue({"sm": false, "md":true});

    return(
        <Flex height={"100vh"} direction={"column"} p={0} m={0}>
            <Navbar/>
            <Flex width={"100%"} height={"100%"}>
                {
                    visibility
                    &&
                    <Flex direction={"column"} justifyContent={"space-between"} height={"100%"} borderRightWidth={1}>

                        <Flex flexBasis={"20%"} direction={"column"} gap={7} px={8} py={5}>
                            <Stack spacing={3}>
                                <Heading fontSize="lg">Categories Available</Heading>
                                <UnorderedList spacing={2}>
                                    {
                                        task_categories.map((item:string, key:number)=><ListItem textColor={"cadetblue"} key={key}>{item}</ListItem>)
                                    }
                                </UnorderedList>
                            </Stack>
                            <Divider/>
                        </Flex>
                        <Box bgColor={"#c7d2fe"} px={5} py={1} display={"flex"} textColor={"#164e63"} fontWeight={"bold"} justifyContent={"center"} alignContent={"center"}>
                            <InfoIcon alignSelf={"center"} mx={2}/>
                            <Text>Todo App</Text>
                        </Box>
                    </Flex>
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