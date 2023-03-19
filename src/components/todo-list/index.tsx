import { List } from '@mui/material';
import useSWR from 'swr';
import produce from 'immer';
import { useCallback } from 'react';
import {
  TodoListItem,
  TodoListItemSkeleton,
  EmptyTodoListMessage,
} from './components';
import { ITodo } from '@/api/models/todos.model';
import { deleteTodo, updateTodo } from '@/api/services/todos.service';
import { ID_PREFIX } from '@/constants/dummyIdPrefix';
import { customToastError, customToastSuccess } from '@/helpers/toast';

export const TodoList = () => {
  const { data: todos, mutate, isLoading } = useSWR<ITodo[]>('todos');

  const isEmptyData = !todos || todos.length === 0;

  const onDeleteHandler = async (id: string) => {
    if (!todos) return;

    if (id.includes(ID_PREFIX)) return;

    const newTodoList = produce(todos, (draft) => {
      const index = draft.findIndex((todo) => todo.id === id);
      draft.splice(index, 1);
    });

    try {
      await mutate(
        async () => {
          await deleteTodo(id);
          customToastSuccess('Todo deleted successfully!');
          return newTodoList;
        },
        {
          revalidate: false,
          throwOnError: true,
          rollbackOnError: true,
          optimisticData: newTodoList,
        }
      );
    } catch {
      customToastError('Something went wrong!');
    }
  };

  const onToggleHandler = useCallback(
    async (id: string) => {
      if (!todos) return;

      if (id.includes(ID_PREFIX)) return;

      const todo = todos.find((_todo) => _todo.id === id);

      if (!todo) return;

      const newTodoList = produce(todos, (draft) => {
        const index = draft.findIndex((_todo) => _todo.id === id);

        draft[index].isCompleted = !draft[index].isCompleted;
      });

      try {
        await mutate(
          async () => {
            await updateTodo({
              path: id,
              payload: {
                ...todo,
                isCompleted: !todo.isCompleted,
              },
            });
            customToastSuccess('Todo updated successfully!');
            return newTodoList;
          },
          {
            revalidate: false,
            throwOnError: true,
            rollbackOnError: true,
            optimisticData: newTodoList,
          }
        );
      } catch {
        customToastError('Something went wrong!');
      }
    },
    [todos, mutate]
  );

  return (
    <List
      sx={{
        pr: 2,
        mt: 10,
        width: '100%',
        maxHeight: 500,
        overflowY: 'auto',
      }}
    >
      {isLoading ? (
        Array(4)
          .fill(0)
          .map((_, index) => <TodoListItemSkeleton key={index} />)
      ) : isEmptyData ? (
        <EmptyTodoListMessage />
      ) : (
        todos.map((todo) => {
          return (
            <TodoListItem
              todo={todo}
              key={todo.id}
              onClickDelete={() => onDeleteHandler(todo.id)}
              onClickToggle={() => onToggleHandler(todo.id)}
            />
          );
        })
      )}
    </List>
  );
};
