import { styled } from "@mui/material";
import { COLORS } from "../../helpers/colors";
export const MainWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));
export const LogoSection = styled("div")(({ theme }) => ({
  height: 100,
  display: "flex",
  alignItems: "center",
}));
export const LogoIMG = styled("img")(({ theme }) => ({
  marginRight: 16,
}));
export const MapIMG = styled("img")(({ theme }) => ({
  width: 50,
  height: 50,
}));
export const LinkAdress = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: 14,
  color: "#000000",
}));
export const ContactsSection = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const ContactsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: 100,
}));
export const Contact = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));
export const ContactIMG = styled("img")(({ theme }) => ({
  width: 28,
  height: 28,
}));
export const ContactData = styled("a")(({ theme }) => ({
  textDecoration: "none",
  color: "#000000",
}));
export const MenuSection = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: 30,
}));
export const Menu = styled("p")(({ theme }) => ({
  fontSize: 14,
  margin: 0,
}));
