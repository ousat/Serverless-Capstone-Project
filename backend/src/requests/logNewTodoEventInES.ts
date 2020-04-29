import { TodoItem } from "../models/todoItem";

/**
 * Fields in a LogNewTodoEventInES to log a single TODO item in ElasticSearch.
 */
export interface LogNewTodoEventInES {
    todo:TodoItem
    index:string
    type:string
    id:string
  }
  
