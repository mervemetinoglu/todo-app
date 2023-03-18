import { HiOutlineSparkles } from 'react-icons/hi';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { getCurrentDateAndDay } from '@/helpers/getCurrentDate';

export const DatePanel = () => {
  const { currentDay, currentDate } = getCurrentDateAndDay();
  const theme = useTheme();

  return (
    <Stack
      sx={{
        width: '100%',
        alignItems: 'center',
      }}
    >
      <Box display="flex" alignItems="center">
        <HiOutlineSparkles
          fontSize={48}
          fill={theme.customColors.yellow100}
          color={theme.customColors.purple100}
        />
        <Typography
          sx={{
            mx: 2,
            fontWeight: 'bold',
            fontSize: { xs: 36, md: 48 },
          }}
        >
          {currentDay}
        </Typography>
        <HiOutlineSparkles
          fontSize={48}
          fill={theme.customColors.yellow100}
          color={theme.customColors.purple100}
        />
      </Box>
      <Typography sx={{ mt: 2, fontSize: { xs: 20, md: 24 } }}>
        {currentDate}
      </Typography>
    </Stack>
  );
};
