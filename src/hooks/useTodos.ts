import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { createTodo, fetchTodos, toggleTodo, type CreateTodoInput, type Todo } from '../api/todos';

// Centralized keys to avoid typos
export const todoKeys = {
  all: ['todos'] as const,
};

export function useTodos() {
  return useQuery<Todo[], Error>({
    queryKey: todoKeys.all,
    queryFn: fetchTodos,
  });
}

export function useCreateTodo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateTodoInput) => createTodo(input),
    onSuccess: () => {
      // simplest: refetch the list
      qc.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
}

export function useToggleTodo() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => toggleTodo(id),
    // optimistic update for snappy UX
    onMutate: async (id) => {
      await qc.cancelQueries({ queryKey: todoKeys.all });
      const prev = qc.getQueryData<Todo[]>(todoKeys.all);

      if (prev) {
        qc.setQueryData<Todo[]>(
          todoKeys.all,
          prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)),
        );
      }
      return { prev };
    },
    onError: (_err, _id, ctx) => {
      if (ctx?.prev) {
        qc.setQueryData(todoKeys.all, ctx.prev);
      }
    },
    onSettled: () => {
      qc.invalidateQueries({ queryKey: todoKeys.all });
    },
  });
}
