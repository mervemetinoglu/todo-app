import { mutate, useSWRConfig } from 'swr';
import { Box, Button, TextField } from '@mui/material';
import { FormEvent, useRef } from 'react';
import { ITodo } from '@/api/models/todos.model';
import { addTodo } from '@/api/services/todos.service';
import { customToastError, customToastSuccess } from '@/helpers/toast';
import { ID_PREFIX } from '@/constants/dummyIdPrefix';

export const TodoForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { cache } = useSWRConfig();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const value = inputRef.current?.value;

    if (!value) return;

    inputRef.current.value = '';

    const data = (cache.get('todos')?.data ?? []) as ITodo[];

    const currentList = [...data];

    const newTodo = {
      todo: value,
      isCompleted: false,
    };

    const dummyId = `${Date.now().toString()}-${ID_PREFIX}`;

    try {
      await mutate(
        'todos',
        async () => {
          const addedTask = await addTodo(newTodo);
          customToastSuccess('Todo added successfully!');
          return [...currentList, addedTask];
        },
        {
          revalidate: false,
          throwOnError: true,
          rollbackOnError: true,
          optimisticData: [
            ...currentList,
            {
              ...newTodo,
              id: dummyId,
            },
          ],
        }
      );
    } catch {
      customToastError('Something went wrong!');
    }
  };

  return (
    <Box
      sx={{
        mt: 4,
        px: 1,
        '& > form': {
          width: '100%',
          display: 'flex',
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          label="New Todo"
          variant="standard"
          inputRef={inputRef}
          sx={{ width: '100%', mr: 4 }}
        />
        <Button
          type="submit"
          sx={{
            fontWeight: 'bold',
            alignSelf: 'flex-end',
            background: 'transparent',
            color: (theme) => theme.customColors.purple100,
            '&:hover': {
              color: (theme) => theme.customColors.purple200,
            },
          }}
        >
          Add
        </Button>
      </form>
    </Box>
  );
};
