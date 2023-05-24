import { StyledContainer, Container } from "./style";
import Header from "../Header";
import Footer from "../Footer";
const MainContainer = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <StyledContainer> {children}</StyledContainer>
      </Container>
      <Footer />
    </>
  );
};

export default MainContainer;
