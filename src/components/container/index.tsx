import { Stack } from '@mui/material';
import { TodoList, TodoForm, DatePanel } from '@/components';

export const Container = () => {
  return (
    <Stack
      sx={{
        my: 5,
        padding: 4,
        width: '100%',
        maxWidth: 720,
        maxHeight: 650,
        minHeight: 650,
        borderRadius: 2,
        boxShadow: (theme) => theme.customShadows.widget,
        backgroundColor: (theme) => theme.customColors.beige50,
        border: (theme) => `10px inset ${theme.customColors.yellow100}`,
      }}
    >
      <DatePanel />
      <TodoForm />
      <TodoList />
    </Stack>
  );
};
