import { Card, Heading, Stack, Text } from "@chakra-ui/react";

function TodoCard(){
    const taskName:string = "Doing Task";
    const taskDate:string = "20/12/2023";
    return (
        <Card width={350}>
            <Stack mx={8} my={3}>
                <Heading fontSize={"md"}>Task Details</Heading>
                <Stack mx={3}>
                    <Text fontSize={"sm"}><b>Task name:</b> {taskName}</Text>
                    <Text fontSize={"sm"}><b>Start date:</b> {taskDate}</Text>
                    <Text fontSize={"sm"}><b>End date:</b> {taskDate}</Text>
                </Stack>
            </Stack>
        </Card>
    );
}

export default TodoCard;