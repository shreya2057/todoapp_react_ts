import { Box, Divider, Flex, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react";
import { task_categories } from "../data/task_categories";
import { InfoIcon } from "@chakra-ui/icons";

function Categories(){
    return(
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
    );
}

export default Categories;