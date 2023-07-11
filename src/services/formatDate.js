import { format } from 'date-fns';

export const movieReleaseYear = date => {
  if (date) {
    return format(new Date(date), 'yyyy');
  }
};