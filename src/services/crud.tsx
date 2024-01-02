import { instance } from "../axios/instance";
import { Response, TaskData } from "../data/types";

export const create_operation = async(task_data: TaskData): Promise<Response>=>{
    try{
        const response = await instance.post('/tasks', task_data);
        return { status: response.status, message: "Task created successfully" }
    } catch(error: any){
        return {status: 404, message: error.message}
    }
}