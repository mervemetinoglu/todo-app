import { Box, Skeleton } from '@mui/material';

export const TodoListItemSkeleton = () => {
  return (
    <Box display="flex" width="100%" mb={2}>
      <Skeleton
        width={40}
        height={40}
        animation="wave"
        variant="rectangular"
        sx={{ mr: 2, borderRadius: 1 }}
      />
      <Skeleton
        height={40}
        width="100%"
        animation="wave"
        variant="rectangular"
        sx={{ display: 'flex', borderRadius: 1 }}
      />
      <Skeleton
        width={40}
        height={40}
        animation="wave"
        variant="rectangular"
        sx={{ ml: 2, borderRadius: 1 }}
      />
    </Box>
  );
};
