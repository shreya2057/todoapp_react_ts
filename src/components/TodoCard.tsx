import { Card, Heading, Stack, Text } from "@chakra-ui/react";

function TodoCard(pt:{taskName: string, start: Date, end: Date}){
    const startDate = pt.start.toLocaleString();
    const endDate = pt.end.toLocaleString();
    return (
        <Card width={350}>
            <Stack mx={8} my={3}>
                <Heading fontSize={"md"}>Task Details</Heading>
                <Stack mx={3}>
                    <Text fontSize={"sm"}><b>Task name:</b> {pt.taskName}</Text>
                    <Text fontSize={"sm"}><b>Start date:</b> {startDate}</Text>
                    <Text fontSize={"sm"}><b>End date:</b> {endDate}</Text>
                </Stack>
            </Stack>
        </Card>
    );
}

export default TodoCard;