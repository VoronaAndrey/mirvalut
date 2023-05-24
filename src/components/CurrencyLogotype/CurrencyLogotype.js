import { getImg } from "../../helpers/getImg";
import {
  MainWrapper,
  CurrencyIconWrapper,
  CurrencyCod,
  CurrencyWrapper,
  CurrencyName,
} from "./style";

const CurrencyLogotype = ({ data }) => {
  const getCurrency = (currency) => {
    return (
      <CurrencyWrapper key={currency.cod}>
        <CurrencyIconWrapper>
          {getImg(
            `flags/${currency.cod}.webp`,
            150,
            80,
            "0px 0px 7px 4px rgba(0, 0, 0, 0.05)"
          )}
          <CurrencyCod>{currency.cod}</CurrencyCod>
        </CurrencyIconWrapper>
        <CurrencyName>{currency.name}</CurrencyName>
      </CurrencyWrapper>
    );
  };
  return (
    <>
      <MainWrapper>{data.map((cur) => getCurrency(cur))}</MainWrapper>
    </>
  );
};

export default CurrencyLogotype;
