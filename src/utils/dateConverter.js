export function formatDateTime(dateTimeStr) {
  const dateTime = new Date(dateTimeStr);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  };
  return dateTime.toLocaleString("en", options);
}

export function simpleDate(dateStr) {
  const date = new Date(dateStr);
  const day = date.getDate();
  const month = date.getMonth() + 1; // Месяцы в JavaScript нумеруются с 0
  return `${day < 10 ? "0" : ""}${day}.${month < 10 ? "0" : ""}${month}`;
}
