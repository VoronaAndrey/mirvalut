import { MainWrapper, Container } from "./style";
import { Link } from "react-router-dom";
import HeaderMenu from "../HeaderMenu/HeaderMenu";
import { COLORS } from "../../helpers/colors";
const Header = () => {
  return (
    <>
      <MainWrapper>
        <Container>
          <HeaderMenu />
        </Container>
      </MainWrapper>
    </>
  );
};

export default Header;
