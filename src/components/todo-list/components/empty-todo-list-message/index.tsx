import { Stack, Typography } from '@mui/material';

export const EmptyTodoListMessage = () => {
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        color: (theme) => theme.customColors.purple100,
      }}
    >
      <Typography
        sx={{
          mb: 2,
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        You have no todos yet! You need to do something...
        <span role="img" aria-label="writing-hand">
          &#x270D;
        </span>
      </Typography>
      <Typography>
        You can add a new todo easily by clicking on the &apos;ADD&apos; button above.
      </Typography>
    </Stack>
  );
};
