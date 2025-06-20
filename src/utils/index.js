export const getDateDifferenceFromNow = (fromDate) => {
  const now = new Date();
  const from = new Date(fromDate);
  let difference = Math.floor((now - from) / 1000); // in seconds

  const years = Math.floor(difference / (365 * 24 * 3600));
  difference %= 365 * 24 * 3600;
  const months = Math.floor(difference / (30 * 24 * 3600));
  difference %= 30 * 24 * 3600;
  const days = Math.floor(difference / (24 * 3600));
  difference %= 24 * 3600;
  const hours = Math.floor(difference / 3600);
  difference %= 3600;
  const minutes = Math.floor(difference / 60);
  const seconds = difference % 60;

  let message = [];
  if (years > 0) message.push(`${years} years`);
  if (months > 0) message.push(`${months} months`);
  if (days > 0) message.push(`${days} days`);
  if (hours > 0) message.push(`${hours} hours`);
  if (minutes > 0) message.push(`${minutes} minutes`);
  if (seconds > 0) message.push(`${seconds} seconds`);

  return message.join(" ");
};
