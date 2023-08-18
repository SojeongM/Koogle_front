import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faGear } from "@fortawesome/free-solid-svg-icons";

import SettingImg from "../assets/setting.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderDiv>
      <DetailHeaderDiv>
        <LocationDiv>
          <FontAwesomeIcon icon={faLocationDot} />
          &nbsp; 160 Yanghwa-ro, Mapo-gu, Seoul,
        </LocationDiv>
        <Link to={"/"}>
          <LogoDiv>YummySmile</LogoDiv>
        </Link>

        <SettingDiv>
          <ImgDiv>
            <FontAwesomeIcon
              icon={faGear}
              style={{ fontSize: "30px", color: "gray" }}
            />
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
  font-family: "Noto Sans", sans-serif;
  position: relative;
  margin-left: 120px;

  margin-right: 120px;
`;

export const DetailHeaderDiv = styled.div`
  cursor: default;
  display: flex;
  font-size: 18px;
`;
export const LogoDiv = styled.div`
  font-family: "LOTTERIACHAB";

  width: 500px;
  float: left;
  margin-top: 30px;
  font-size: 64px;
  color: #ffa42e;
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
  margin-top: 100px;
  margin-right: 10px;
  float: right;
`;
