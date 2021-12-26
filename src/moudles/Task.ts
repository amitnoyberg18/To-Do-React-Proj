export type Task = {
    id:number,
    userId:number,
    status:string,
    TaskName:string,
    description:string,
    timeToEnd ?:Date
}