import { styled } from "@mui/material";
import { MAX_WITH_CONTAINER } from "../../helpers/breakpointCalendar";
import { COLORS } from "../../helpers/colors";
export const MainWrapper = styled("p")(({ theme }) => ({
  padding: "60px 8px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontSize: 18,
  margin: "0 auto",
  background: COLORS.MAIN_BAGROUND,
}));
