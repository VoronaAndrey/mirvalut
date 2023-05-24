import { styled } from "@mui/material";

import { tabletBreakpoint } from "../../../helpers/breakpointCalendar";
import { COLORS } from "../../../helpers/colors";

export const WrapperInfo = styled("div")(({ theme }) => ({
  borderTop: "1px solid black",
  margin: "10px 0 0 0",
}));
export const Title = styled("p")(({ theme }) => ({
  fontWeight: 500,
  fontSize: 22,
  color: COLORS.DARK,
  margin: 0,
}));
export const Info = styled("p")(({ theme }) => ({
  fontWeight: 400,
  fontSize: 14,
  color: COLORS.MAIN_TEXT,
  margin: 0,
}));
export const DeleteButton = styled("button")(({ theme }) => ({
  margin: "0 auto",
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
