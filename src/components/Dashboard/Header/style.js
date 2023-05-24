import { styled } from "@mui/material";

import { tabletBreakpoint } from "../../../helpers/breakpointCalendar";
import { COLORS } from "../../../helpers/colors";
export const MainWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  height: 96,
  flexDirection: "column",
  alignItems: "center",
  boxShadow: " 0px 1px 8px rgba(0, 0, 0, 0.100361)",
  ...tabletBreakpoint({
    padding: "0 30px",
  }),
}));

export const HeaderWrapper = styled("div")(({ theme }) => ({
  maxWidth: 1320,
  width: "-webkit-fill-available",
  padding: "0 20px",
  display: "flex",
  justifyContent: "space-around",
}));

export const InfoSection = styled("div")(({ theme }) => ({
  display: "flex",
  height: 96,
  alignItems: "center",
}));
export const FunctionMenu = styled("dic")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const HeaderTitle = styled("p")(({ theme }) => ({
  marginRight: 50,
  whiteSpace: "nowrap",
  color: COLORS.MAIN_TEXT,
}));
export const LogOut = styled("button")(({ theme }) => ({
  padding: "10px",
  width: "100%",
  border: `1px solid ${COLORS.DARK}`,
  backgroundColor: COLORS.MAIN_BG,
  borderRadius: 20,
  cursor: "pointer",
  color: COLORS.MAIN_TEXT,
  "&:hover": {
    backgroundColor: COLORS.BLUE,
    color: COLORS.DARK,
  },
}));
