import { styled } from "@mui/material";
import { COLORS } from "../../../helpers/colors";
export const MainWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 50,
  padding: "0 20px 20px 20px",
}));

export const MainTitle = styled("h1")(({ theme }) => ({
  color: COLORS.MAIN_TEXT,
}));
