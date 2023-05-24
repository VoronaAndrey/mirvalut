import {
  InfoSection,
  MainWrapper,
  HeaderWrapper,
  HeaderTitle,
  LogOut,
  FunctionMenu,
} from "./style";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "../../../store";
import { getUser } from "../../../store/user/actionCreators";
import { logOutAdmin } from "../../../store/auth/actionCreators";

const HeaderDashboard = () => {
  const dispatch = useAppDispatch();
  const id = useSelector((state) => state.auth.authData.id);
  const user = useSelector((state) => state.user.userData.user?.username);
  const handleLogOut = () => {
    dispatch(logOutAdmin());
  };
  useEffect(() => {
    dispatch(getUser(id));
  }, [id]);
  return (
    <>
      <MainWrapper>
        <HeaderWrapper>
          <InfoSection>
            <Link to="*">
              <img
                style={{
                  width: 140,
                  height: 56,
                  marginRight: 40,
                  cursor: "pointer",
                }}
                src="./image/logo.svg"
                alt="logo"
              ></img>
            </Link>
          </InfoSection>
          <FunctionMenu>
            <HeaderTitle>{`Hi, ${user}`}</HeaderTitle>
            <LogOut
              onClick={() => {
                handleLogOut();
              }}
            >
              LogOut
            </LogOut>
          </FunctionMenu>
        </HeaderWrapper>
      </MainWrapper>
    </>
  );
};

export default HeaderDashboard;
