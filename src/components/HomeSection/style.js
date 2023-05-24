import { styled } from "@mui/material";
import { COLORS } from "../../helpers/colors";
export const MainWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const DescriptionWrapper = styled("div")(({ theme }) => ({
  background: COLORS.WHITE_BG,
  padding: "0 28px",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)",
  borderRadius: 10,
}));
export const Text = styled("p")(({ theme }) => ({
  fontSize: 18,
  margin: "28px 0",
}));
export const List = styled("p")(({ theme }) => ({
  fontSize: 18,
  margin: "0 0 0 5px",
}));
export const ServicesSection = styled("div")(({ theme }) => ({
  marginTop: 35,
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "6px",
  gridRowGap: 0,
}));
export const ServiseLogo = styled("img")(({ theme }) => ({
  width: 240,
  height: 154,
}));
export const FunctionalSection = styled("div")(({ theme }) => ({
  margin: "35px 0 0 0",
  padding: "20px 0",
  width: "100%",
  minHeight: 70,
  display: "grid",
  justifyItems: "center",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridTemplateRows: "1fr",
  gridColumnGap: "6px",
  gridRowGap: 0,
}));
export const MainFunctionalWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  width: "fit-content",
  height: 70,
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const SelectCurenccy = styled("h2")(({ theme }) => ({
  fontWeight: 700,
  fontSize: 26,
  margin: 0,
  lineHeight: 1,
}));
export const ValidRange = styled("div")(({ theme }) => ({
  display: "flex",
}));
export const FunctionalText = styled("p")(({ theme }) => ({
  margin: 0,
  fontSize: 14,
  cursor: "pointer",
}));
export const Elipse = styled("div")(({ theme, className }) => ({
  width: className?.includes("active") ? 21 : 25,
  height: className?.includes("active") ? 21 : 25,
  borderRadius: 50,
  margin: "0 15px",
  background: className?.includes("active")
    ? COLORS.CURRENCY_COLOR
    : COLORS.WHITE_BG,
  border: className?.includes("active") ? `4px solid ${COLORS.WHITE_BG}` : "",
}));
export const TitleButton = styled("div")(({ theme }) => ({
  display: "flex",
  height: 26,
  flexDirection: "column",
  justifyContent: "space-between",
  cursor: "pointer",
}));
export const TitleElement = styled("div")(({ theme }) => ({
  height: 6,
  width: 85,
  background: "#ACACAC",
  borderRadius: 10,
}));
// export const MainWrapper = styled("div")(({ theme }) => ({}));
// export const MainWrapper = styled("div")(({ theme }) => ({}));
