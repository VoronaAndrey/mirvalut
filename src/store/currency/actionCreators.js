import api from "../../api";
import { currencyStart } from "./currencyReducer";

export const getAllCurrency = () => async (dispatch) => {
  try {
    dispatch(currencyStart());
    const response = await api.currency.getCurrency();
    const html = response.data;
    const temp = document.createElement("div");
    temp.innerHTML = html;
    const rows = temp.querySelectorAll(".valutes-table tr");
    const rowsWithoutHeader = Array.from(rows).slice(1); // пропускаем первый элемент
    rowsWithoutHeader.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const name = cells[0].textContent;
      const code = cells[1].textContent;
      const purchase = cells[2].textContent;
      const sale = cells[3].textContent;
    });

    // dispatch(currencyStart(res));
  } catch (error) {
    console.log(error);
  }
};
