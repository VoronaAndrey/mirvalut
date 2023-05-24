import { styled } from "@mui/material";
import {
  MAX_WITH_CONTAINER,
  tabletBreakpoint,
} from "../../helpers/breakpointCalendar";
export const MainWrapper = styled("header")(({ theme }) => ({
  width: "100%",
  height: 100,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const Container = styled("div")(({ theme }) => ({
  maxWidth: MAX_WITH_CONTAINER.PHONE,
  height: "100%",
  width: "100%",
}));
