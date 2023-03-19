import dayjs from 'dayjs';
import { days } from '@/constants/days';

export const getCurrentDateAndDay = () => {
  const date = dayjs();

  const currentDate = date.format('MMM D, YYYY');

  const dayIdx = date.day();
  const currentDay = days[dayIdx];

  return {
    currentDay,
    currentDate,
  };
};
