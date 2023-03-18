export interface ITodo {
  id: string;
  todo: string;
  isCompleted: boolean;
}

export interface ITodos {
  data: ITodo[];
}

export interface ITodoFetchRequest {
  path: string;
  payload: ITodo;
}
