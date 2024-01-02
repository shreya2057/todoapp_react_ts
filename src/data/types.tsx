export interface TaskData{
    name: string,
    category: string[],
    start: Date,
    end: Date
}

export interface Response{
    status: number,
    message: string | object
}
