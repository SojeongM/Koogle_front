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
import shop_1 from "../assets/shop_1.jpg";
import shop_2 from "../assets/shop_2.jpg";
import shop_3 from "../assets/shop_3.jpg";

const list = [
  {
    id: 1,
    name: "Five Luck Fisheries",
    address: "2nd floor, 190-4 Seongmisan-ro, Mapo-gu, Seoul (Yeonnam-dong)",
    image: shop_1,
    koogle_rating: 2,
    phone: "070-8683-3500",
    distance: "634m",
  },
  {
    id: 2,
    name: "Mentakamooshow",
    address: "49-10, Wausan-ro 13-gil, Mapo-gu, Seoul, Republic of Korea",
    image: shop_2,
    koogle_rating: 3,
    phone: "0303-0123-4567",
    distance: "1km",
  },
  {
    id: 3,
    name: "Hakatanaka",
    address: "2nd floor (Seogyo-dong), 50, Wausan-ro 23-gil, Mapo-gu, Seoul",
    image: shop_3,
    koogle_rating: 1,
    phone: "02-332-3207",
    distance: "140m",
  },
];
const Main2 = () => {
  const navigate = useNavigate();
  const goSearch = (item) => {
    navigate("/info", {
      state: {
        resName: item.name,
        address: item.address,
        phone: item.phone,
        img: item.image,
      },
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
                src={item.image}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
  margin-top: 15px;
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
  margin-left: 10px;
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
