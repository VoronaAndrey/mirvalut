import {
  MainWrapper,
  DescriptionWrapper,
  Text,
  List,
  ServicesSection,
  ServiseLogo,
  FunctionalSection,
  MainFunctionalWrapper,
  FunctionalText,
  SelectCurenccy,
  ValidRange,
  Elipse,
  TitleButton,
  TitleElement,
} from "./style";
import { getImg } from "../../helpers/getImg";
import MainTitle from "../MainTitle";
import { useAppDispatch } from "../../store";
import { useEffect } from "react";
import { getAllCurrency } from "../../store/currency/actionCreators";
import { useSelector } from "react-redux";
import CurrencyLogotype from "../CurrencyLogotype/CurrencyLogotype";
import { getDate } from "../../hooks/useDate";

const HomeSection = () => {
  const dispatch = useAppDispatch();
  const { data } = useSelector((state) => state.currency.currency);
  // useEffect(() => {
  //   // dispatch(getAllCurrency());
  // }, []);
  const getServicesLogo = (name) => {
    return (
      <>
        <ServiseLogo
          src={`./image/${name}.webp`}
          alt={`img-${name}`}
        ></ServiseLogo>
      </>
    );
  };
  return (
    <>
      <MainWrapper>
        <MainTitle>Калькулятор валют</MainTitle>
        <DescriptionWrapper>
          <Text>
            Бесплатный финансовый калькулятор от Mirvalut, позволяет понять:
          </Text>
          <List>
            1. Сколько денег Вы получите при обмене валюты по рыночному курсу;
          </List>
          <List>
            2. Узнать кроссы курс при конвертации, например, фунтов в евро;
          </List>
          <List>
            3. Понять сколько денег за минусом комиссии останется при сдаче
            ветхих и вышедших из обращения денег.;
          </List>
          <Text>
            {`По наличию валюты и для резерва звоните нашим менеджерам. Актуальный
            курс валют на ${getDate()}.`}
          </Text>
        </DescriptionWrapper>
        <ServicesSection>
          {getServicesLogo("buySale")}
          {getServicesLogo("corsCourse")}
          {getServicesLogo("currencyWithCommission")}
        </ServicesSection>
        <FunctionalSection>
          <MainFunctionalWrapper>
            {getImg("search.svg", 34, 34, "", "pointer")}{" "}
            <FunctionalText>Искать по названию</FunctionalText>
          </MainFunctionalWrapper>
          <MainFunctionalWrapper>
            <SelectCurenccy>Выберите валюту</SelectCurenccy>
            <ValidRange>
              <Elipse className="active"></Elipse>
              <Elipse></Elipse>
              <Elipse></Elipse>
            </ValidRange>
          </MainFunctionalWrapper>
          <MainFunctionalWrapper>
            <TitleButton>
              <TitleElement />
              <TitleElement />
              <TitleElement />
            </TitleButton>
            <FunctionalText>Отобразить списком</FunctionalText>
          </MainFunctionalWrapper>
        </FunctionalSection>
        <CurrencyLogotype data={data} />
      </MainWrapper>
    </>
  );
};

export default HomeSection;
