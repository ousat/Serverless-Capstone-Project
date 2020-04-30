import { TodoItem } from './todoItem';

export interface GetAllTodoResponse {
    items: TodoItem[],
    lastEvaluatedKey: any
  }
