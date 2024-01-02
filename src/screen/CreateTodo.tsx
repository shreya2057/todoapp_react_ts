import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { 
    Flex,
    Box,
    FormControl, 
    Input,
    FormErrorMessage,
    FormLabel,
    useBreakpointValue,
    Stack,
    Center,
    Button
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import { TaskData } from "../data/types";

function CreateTodoScreen(){
    const {register, control, formState:{errors}, handleSubmit} = useForm<TaskData>();
    const { fields, append, remove } = useFieldArray<any>({
        control,
        name: "category"
    })
    const width = useBreakpointValue({"sm": 200, "md": 300});
    const visibility = useBreakpointValue({"sm": false, "md":true});

    const submit_data: SubmitHandler<TaskData> = (formdata)=>{
        console.log(formdata)
    }

    const addCategory = () => {
        if(fields.length<2){
            append(null);
        }
        
      };
    
    return(
        <>  
            <Flex height={"100vh"} direction={"column"} p={0} m={0}>
            <Navbar/>
            <Flex width={"100%"} height={"100%"}>
                {
                    visibility 
                    &&
                    <Categories/>

                }
                <Flex flex={1} direction={"column"} gap={5} justifyContent={"center"} align={"center"}>
                    <Box borderWidth={1} px={10} py={6} rounded={"md"} shadow={"md"} backgroundColor={"#eff6ff"}>
                        <form onSubmit={handleSubmit(submit_data)}>
                            <Stack spacing={3}>
                                <FormControl isInvalid={!!errors.name}>
                                    <FormLabel htmlFor="name">Task name</FormLabel>
                                    <Input 
                                        width={width}
                                        placeholder="Enter task name" 
                                        bgColor={"white"}
                                        type="text"
                                        {
                                            ...register(
                                                "name",
                                                {
                                                    required: "Task name cannot be empty"
                                                }
                                            )
                                        }
                                    />
                                    <FormErrorMessage>
                                        {errors.name?.message}
                                    </FormErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!!errors.category}>
                                    <FormLabel htmlFor="categories">Task categories</FormLabel>
                                    {   
                                        fields.map((category: any, index: number)=>
                                            <Box key={category.id} py={1} width={width}>
                                                <Flex direction={"row"} align={"center"} gap={2}>
                                                    <Input 
                                                        placeholder="Enter Categories" 
                                                        bgColor={"white"}
                                                        type="text"
                                                        {
                                                            ...register(
                                                                `category.${index}`,
                                                                {
                                                                    required: "Category cannot be empty"
                                                                }
                                                            )
                                                        }
                                                    />
                                                    <Button 
                                                        bgColor={"#cbd5e1"} 
                                                        onClick={()=>remove(index)} 
                                                        fontSize={"sm"} 
                                                        fontWeight={"normal"} 
                                                        height={4} 
                                                        width={12}
                                                        backgroundColor={"inherit"} 
                                                        _hover={{bgColor: "inherit"}}
                                                    >
                                                        <u>Delete</u>
                                                    </Button>
                                                </Flex>
                                                <FormErrorMessage>
                                                    {errors.category?.[index]?.message}
                                                </FormErrorMessage>
                                            </Box>
                                        )
                                    }
                                </FormControl>
                                <Box width={"100%"} display={"flex"} justifyContent={"end"}>
                                    <Button 
                                        bgColor={"#cbd5e1"} 
                                        onClick={addCategory} 
                                        fontSize={"sm"} 
                                        fontWeight={"normal"} 
                                        height={4}
                                        width={20}
                                        backgroundColor={"inherit"} 
                                        _hover={{bgColor: "inherit"}}
                                    >
                                        <u>Add category</u>
                                    </Button>
                                </Box> 
                                <FormControl isInvalid={!!errors.start}>
                                    <FormLabel htmlFor="name">Start Date</FormLabel>
                                    <Input 
                                        width={width}
                                        placeholder="Enter start date" 
                                        bgColor={"white"}
                                        type="date"
                                        {
                                            ...register(
                                                "start",
                                                {
                                                    required: "Start Date cannot be empty"
                                                }
                                            )
                                        }
                                    />
                                    <FormErrorMessage>
                                        {errors.start?.message}
                                    </FormErrorMessage>
                                </FormControl> 
                                <FormControl isInvalid={!!errors.end}>
                                    <FormLabel htmlFor="name">End date</FormLabel>
                                    <Input 
                                        width={width}
                                        bgColor={"white"}
                                        type="date"
                                        {
                                            ...register(
                                                "end",
                                                {
                                                    required: "End Date cannot be empty"
                                                }
                                            )
                                        }
                                    />
                                    <FormErrorMessage>
                                        {errors.end?.message}
                                    </FormErrorMessage>
                                </FormControl>   
                                <Center>
                                    <Button type="submit" bgColor={"#cbd5e1"} borderWidth={"thin"} borderColor={"#1f2937"}>Create Task</Button>
                                </Center>                 
                            </Stack>
                        </form>
                    </Box>
                </Flex>
            </Flex>       
        </Flex>
        </>
    );
}

export default CreateTodoScreen;