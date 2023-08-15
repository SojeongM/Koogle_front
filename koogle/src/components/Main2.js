import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
  faLocationCrosshairs,
  faLocationDot,
  faPersonWalking,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import SettingImg from "../assets/setting.png";
import TestImg from "../assets/testimg.jpg";
import Filter from "./Filter";
import { useNavigate } from "react-router-dom";

const Main2 = () => {

  const navigate = useNavigate();
  const goSearch = () => {
   
    navigate("/info");
  };
  return (
    <>
      <Filter />
      <BigBody>
        <Store>
          <BigImg>
            <img src={TestImg} object-fit="cover"></img>
          </BigImg>
          <Details>
            <First>
              <Name>Dugahun Restaurant</Name>
              <Rank>3 Koggle</Rank>
            </First>

            <Loc>
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; Seoul, Jongro- gu, Samcheong-ro 14
            </Loc>
            <Call>
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;02-1234-5678
            </Call>
            <Last>
              <Distance>
                <FontAwesomeIcon icon={faPersonWalking} />
                &nbsp;&nbsp;850m
              </Distance>
              <More onClick={goSearch}>
                see more&nbsp;
                <FontAwesomeIcon icon={faArrowRight} />
              </More>
            </Last>
          </Details>
        </Store>
        <Store></Store>
        <Store></Store>
        <Store></Store>
      </BigBody>
    </>
  );
};

export default Main2;

export const BigBody = styled.div`
  width: 1680px;
  height: auto;

  position: relative;
  margin-left: 120px;
  margin-top: 50px;
  margin-right: 120px;
  
`;

const Store = styled.div`
  width: 770px;
  height: 230px;
  margin: 50px auto;
  box-shadow: 3px 3px 3px 3px rgb(0, 0, 0, 0.2);
  position: relative;
`;

const BigImg = styled.div`
  position: absolute;
  
  width: 230px;
  height: 100%;
  overflow: hidden;
`;

const Details = styled.div`
  position: absolute;
  margin-left:230px;
  height: 100%;
  width: 540px;
  font-size: 18px;

  text-align: left;
  
`;

const First = styled.div`
  font-size: 30px;
  margin-top: 25px;
  margin-left: 30px;
`;
const Name = styled.div`
  display: inline-block;
`;
const Rank = styled.div`
  display: inline-block;
  margin-left: 30px;
  font-size: 24px;
  margin-bottom: 20px;
  color: red;

`;

const Loc = styled.div`
  margin-left: 30px;
  margin-bottom: 20px;
  color: #585555;;
`;

const Call = styled.div`
  margin-left: 30px;
  margin-bottom: 20px;
`;

const Last = styled.div`
  margin-left: 30px;
`;
const Distance = styled.div`
  display: inline-block;
`;

const More = styled.div`
  display: inline-block;
  float: right;
  margin-right: 30px;
`;

