import BurgerMenu from "../BurgerMenuComponent";
import {
  MainWrapper,
  LogoSection,
  LogoIMG,
  MapIMG,
  LinkAdress,
  ContactsSection,
  ContactsContainer,
  Contact,
  ContactIMG,
  ContactData,
  MenuSection,
  Menu,
} from "./style";

const HeaderMenu = () => {
  return (
    <>
      <MainWrapper>
        <LogoSection>
          <a href="/home">
            <LogoIMG src="./image/logotype.webp" />
          </a>
          <a href="https://mirvalut.com/contact/">
            <MapIMG src="./image/map.webp" />
          </a>
        </LogoSection>
        <LinkAdress href="https://mirvalut.com/contact/">
          Адреси відділень
        </LinkAdress>
        <ContactsSection>
          <ContactsContainer>
            <Contact>
              <ContactIMG src="./image/viber.svg" />
              <ContactData
                href="viber://chat?number=+380639988884"
                rel="nofollow"
              >
                (063)9988884
              </ContactData>
            </Contact>
            <Contact>
              <ContactIMG src="./image/vodafon.svg" />
              <ContactData href="tel:+380509988884" rel="nofollow">
                (050)9988884
              </ContactData>
            </Contact>
            <Contact>
              <ContactIMG src="./image/kyivstar.svg" />
              <ContactData href="tel:+380960488884" rel="nofollow">
                (096)0488884
              </ContactData>
            </Contact>
          </ContactsContainer>
          <MenuSection>
            <BurgerMenu />
            <Menu>Меню послуг</Menu>
          </MenuSection>
        </ContactsSection>
      </MainWrapper>
    </>
  );
};

export default HeaderMenu;
