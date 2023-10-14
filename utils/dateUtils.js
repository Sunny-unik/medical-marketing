export function adjustCurrentDate(dayToAdjust) {
  const currentDate = new Date(); // Get the current date
  const sevenDaysAgo = new Date(currentDate);

  sevenDaysAgo.setDate(currentDate.getDate() + dayToAdjust);

  return sevenDaysAgo;
}
