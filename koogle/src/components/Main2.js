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
import Yummy from "../assets/Yummy.png";
import { useNavigate } from "react-router";

const list = [
  {
    id: 1,
    name: "을밀대",
    address: "주소 123",
    image: "/path/to/image",
    koogle_rating: 1,
    phone: "02 1234 5678",
    distance: 850,
  },
  {
    id: 2,
    name: "수저가",
    address: "수저가 주소",
    image: "/path/to/image",
    koogle_rating: 2,
    phone: "02 5678 1234",
    distance: 850,
  },
  {
    id: 3,
    name: "밀플랜비",
    address: "밀플랜비 주소",
    image: "/path/to/image",
    koogle_rating: 3,
    phone: "02 0000 0000",
    distance: 850,
  },
];
const Main2 = () => {
  const navigate = useNavigate();
  const goSearch = (item) => {
    navigate("/info", {
      state: { resName: item.name, address: item.address, phone: item.phone },
    });
  };

  return (
    <>
      <Filter />
      <BigBody>
        {list.map((item) => (
          <Store>
            <BigImg>
              <img
                src={TestImg}
                styled={{ objectFit: "cover" }}
                alt="store img"
              ></img>
            </BigImg>
            <Details>
              <First>
                <Name>{item.name}</Name>
                <Rank>
                  {[...Array(item.koogle_rating)].map((i) => (
                    <img
                      style={{
                        width: "27px",
                        height: "27px",
                        marginTop: "5px",
                        marginLeft: "5px",
                        padding: "1px",
                      }}
                      key={i}
                      src={Yummy}
                      alt="store"
                    />
                  ))}
                </Rank>
              </First>

              <Loc>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#ffa42e" }}
                />
                &nbsp; {item.address}
              </Loc>
              <Call>
                <FontAwesomeIcon icon={faPhone} style={{ color: "#ffa42e" }} />
                &nbsp;{item.phone}
              </Call>
              <Last>
                <Distance>
                  <FontAwesomeIcon
                    icon={faPersonWalking}
                    style={{ color: "#ffa42e" }}
                  />
                  &nbsp;&nbsp;{item.distance}
                </Distance>
                <More onClick={() => goSearch(item)}>
                  see more&nbsp;
                  <FontAwesomeIcon icon={faArrowRight} />
                </More>
              </Last>
            </Details>
          </Store>
        ))}
      </BigBody>
    </>
  );
};

export default Main2;

export const BigBody = styled.div`
  width: 1680px;
  height: auto;
  cursor: default;
  position: relative;
  margin-left: 120px;
  margin-top: 50px;
  margin-right: 120px;
  font-family: "Noto Sans", sans-serif;
`;

const Store = styled.div`
  width: 770px;
  height: 230px;
  margin: 50px auto;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
  position: relative;
`;

const BigImg = styled.div`
  position: absolute;

  width: 230px;
  height: 100%;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
`;

const Details = styled.div`
  position: absolute;
  margin-left: 230px;
  height: 100%;
  width: 540px;
  font-size: 18px;

  text-align: left;
`;

const First = styled.div`
  font-size: 24px;
  margin-top: 25px;
  margin-left: 30px;
  margin-bottom: 10px;
`;
const Name = styled.div`
  display: inline-block;
  background-color: #ffa42e;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
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
  color: #585555;
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
