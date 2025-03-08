import { format } from 'date-fns';

export const formatLastSignIn = (date) => {
  return format(new Date(date), "MMM dd, yyyy, h:mm a");
}

export const formatMemberSince = (date) => {
  return format(new Date(date), "MMMM yyyy");
}