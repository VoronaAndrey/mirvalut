import { styled } from "@mui/material";
import { COLORS } from "../../helpers/colors";
export const MainWrapper = styled("div")(({ theme }) => ({
  display: "grid",
  width: "100%",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: 6,
  gridRowGap: 10,
  justifyItems: "center",
}));
export const CurrencyIconWrapper = styled("div")(({ theme }) => ({
  height: 130,
  width: 150,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 10,
  overflow: "hidden",
}));
export const CurrencyCod = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: 28,
  height: "100%",
  width: "100%",
  color: COLORS.CURRENCY_COLOR,
  lineHeight: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: COLORS.WHITE_BG,
}));
export const CurrencyWrapper = styled("div")(({ theme }) => ({
  filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1))",
  cursor: "pointer",
}));
export const CurrencyName = styled("p")(({ theme }) => ({
  fontSize: 18,
  lineHeight: 1,
  display: "flex",
  width: "100%",
  justifyContent: "center",
}));
// export const MainWrapper = styled("div")(({ theme }) => ({}));
// export const MainWrapper = styled("div")(({ theme }) => ({}));
