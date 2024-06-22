import { format } from "date-fns";

// format the given date string to Date object then get the day in string
function getDateAsDay(date) {
  const newDate = format(new Date(date), "EEEE");

  return newDate;
}

function getFormattedDate(date) {
  const newDate = format(new Date(date), "EEEE MMMM yyyy HH:mm");
  return newDate;
}

function getDateAsHour(date) {
  const newDate = format(new Date(date), "HH:mm");
  return newDate;
}

export { getDateAsDay, getFormattedDate, getDateAsHour };
