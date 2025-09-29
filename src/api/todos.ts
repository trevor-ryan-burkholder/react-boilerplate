import { axiosClient, toApiError } from '../lib/http/axios';

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

// READ
export async function fetchTodos(): Promise<Todo[]> {
  try {
    const { data } = await axiosClient.get<Todo[]>('/todos');
    return data;
  } catch (err) {
    throw toApiError(err);
  }
}

// CREATE
export type CreateTodoInput = { title: string };
export async function createTodo(input: CreateTodoInput): Promise<Todo> {
  try {
    const { data } = await axiosClient.post<Todo>('/todos', input);
    return data;
  } catch (err) {
    throw toApiError(err);
  }
}

// TOGGLE
export async function toggleTodo(id: string): Promise<Todo> {
  try {
    const { data } = await axiosClient.patch<Todo>(`/todos/${id}/toggle`);
    return data;
  } catch (err) {
    throw toApiError(err);
  }
}
