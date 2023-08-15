import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import SettingImg from "../assets/setting.png"
import { useNavigate } from "react-router-dom";
const Header = () => {

  const navigate = useNavigate();
  const goSearch = () => {
    
    navigate("/");
  };
    return (
      <HeaderDiv>
        <DetailHeaderDiv>
          <LocationDiv>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp; Seoul, Jung- gu, Mugyu-ro , 14
          </LocationDiv>
          <LogoDiv onClick={goSearch}>Yummy Smile</LogoDiv>

          <SettingDiv>
            <ImgDiv>
              <img src={SettingImg}></img>
            </ImgDiv>
          </SettingDiv>
        </DetailHeaderDiv>
      </HeaderDiv>
    );


     
};

export default Header;

export const HeaderDiv = styled.div`
  width: 1680px;
  height: 150px;
  font-family: "Inter", sans-serif;

  position: relative;
  margin-left: 120px;

  margin-right: 120px;
`;

export const DetailHeaderDiv = styled.div`
  display: flex;
  font-size: 18px;
`;
export const LogoDiv = styled.div`
  width: 560px;
  font-weight: bold;
  float: left;
  margin-top: 30px;
  font-size: 64px;
  margin-left: 60px;
  font-family: "LOTTERIACHAB";
  font-weight: 300;
  color: #ff9100;
`;
export const LocationDiv = styled.div`
  width: 560px;
  margin-right: auto;
  text-align: left;
  float: left;
  line-height: 200px;
`;
export const SettingDiv = styled.div`
  width: 560px;
  float: right;
`;

const ImgDiv = styled.div`
  margin-top: 60px;
  margin-right: 10px;
  float: right;
`;
