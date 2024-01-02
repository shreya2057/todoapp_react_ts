import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
        <Flex px={12} py={3} bgColor={"#164e63"} textColor={"white"} justifyContent={"space-between"}>
            <Link to={'/'}><Text fontSize={"lg"} fontWeight={"bold"}>Home</Text></Link>
            <Flex gap={8}>
                <Link to={'/create'}><Text fontSize={"lg"} fontWeight={"bold"}>Create Task</Text></Link>
                <Link to={'/'}><Text fontSize={"lg"} fontWeight={"bold"}>Edit Task</Text></Link>
            </Flex> 
        </Flex>
    );
}

export default Navbar;