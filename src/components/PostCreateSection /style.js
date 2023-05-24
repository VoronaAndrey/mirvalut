import { styled } from "@mui/material";
import { COLORS } from "../../helpers/colors";
export const Form = styled("form")(({ form }) => ({
  background: COLORS.MAIN_BG,
  width: 500,
  margin: "140 auto 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));
export const WrapperInput = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  marginBottom: 20,
}));
export const SubmitButton = styled("button")(({ form, className }) => ({
  display: "flex",
  margin: "0 auto",
  padding: 10,
  border: "none",
  borderRadius: 5,
  marginBottom: 20,
  background: !className?.includes("active") ? COLORS.MAIN_TEXT : COLORS.ORANGE,
  color: COLORS.MAIN_BG,
  cursor: "pointer",
}));
