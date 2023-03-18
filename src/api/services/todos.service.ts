import { ApiService } from '@/api/apiInstance';
import { ITodo, ITodoFetchRequest } from '@/api/models/todos.model';

const API = new ApiService();

const getTodos = async (): Promise<ITodo[]> => {
  const response = await API.get('todos');

  return response.data;
};

const addTodo = async (todo: Omit<ITodo, 'id'>): Promise<ITodo> => {
  const response = await API.post('todos', todo);

  return response.data;
};

const updateTodo = async ({
  path,
  payload,
}: ITodoFetchRequest): Promise<ITodo> => {
  const response = await API.patch(`todos/${path}`, { ...payload });

  return response.data;
};

const deleteTodo = async (id: string): Promise<ITodo> => {
  const response = await API.delete(`todos/${id}`);

  return response.data;
};

export { getTodos, addTodo, updateTodo, deleteTodo };
