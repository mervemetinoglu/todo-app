import dayjs from 'dayjs';

const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const getCurrentDateAndDay = () => {
  const date = dayjs();
  const dayIdx = date.day();
  const day = date.format('MMM D, YYYY');

  return {
    currentDate: day,
    currentDay: days[dayIdx - 1],
  };
};
