export const getDate = () => {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const formattedDate = `${day < 10 ? "0" : ""}${day}.${
    month < 10 ? "0" : ""
  }${month}.${year}`;
  return formattedDate;
};
