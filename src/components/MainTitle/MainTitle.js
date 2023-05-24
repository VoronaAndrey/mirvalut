import { Title, MainWrapper } from "./style";

const MainTitle = ({ children }) => {
  return (
    <>
      <MainWrapper>
        <Title>{children}</Title>
      </MainWrapper>
    </>
  );
};

export default MainTitle;
