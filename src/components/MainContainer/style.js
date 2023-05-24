import { styled } from "@mui/material";
import { MAX_WITH_CONTAINER } from "../../helpers/breakpointCalendar";
import { COLORS } from "../../helpers/colors";

export const Container = styled("main")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: COLORS.MAIN_BAGROUND,
}));
export const StyledContainer = styled("div")(({ theme }) => ({
  maxWidth: MAX_WITH_CONTAINER.PHONE,
  padding: "0 8px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  background: COLORS.MAIN_BAGROUND,
}));
