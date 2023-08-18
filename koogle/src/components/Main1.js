import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationCrosshairs,
  faLocationDot,
  faPersonWalking,
  faPhone,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
import SettingImg from "../assets/setting.png";
import TestImg from "../assets/testimg.jpg";
import { useState } from "react";
import kr_1 from "../assets/kr_1.jpg";
import kr_2 from "../assets/kr_2.jpg";
import kr_3 from "../assets/kr_3.jpg";
import kr_4 from "../assets/kr_4.jpg";
import kr_5 from "../assets/kr_5.jpg";
import kr_6 from "../assets/kr_6.jpg";
import kr_7 from "../assets/kr_7.jpg";
import kr_8 from "../assets/kr_8.jpg";
import kr_9 from "../assets/kr_9.jpg";
import kr_10 from "../assets/kr_10.jpg";
import kr_11 from "../assets/kr_11.jpg";
import kr_12 from "../assets/kr_12.jpg";
import kr_13 from "../assets/kr_13.jpg";
import wes_1 from "../assets/wes_1.jpg";
import wes_2 from "../assets/wes_2.jpg";
import wes_3 from "../assets/kr_7.jpg";
import wes_4 from "../assets/wes_4.jpg";
import wes_5 from "../assets/wes_5.jpg";
import wes_6 from "../assets/wes_6.jpg";
import o_1 from "../assets/o_1.jpg";
import o_2 from "../assets/o_2.jpg";
import o_3 from "../assets/o_3.jpg";
import o_4 from "../assets/o_4.jpg";
import o_5 from "../assets/o_5.jpg";
import o_6 from "../assets/o_6.jpg";
import jp_1 from "../assets/jp_1.jpg";
import jp_2 from "../assets/jp_2.jpg";
import jp_3 from "../assets/jp_3.jpg";
import jp_4 from "../assets/jp_4.jpg";
import chi_1 from "../assets/chi_1.jpg";
import chi_2 from "../assets/chi_2.jpg";
import chi_3 from "../assets/chi_3.jpg";
import chi_4 from "../assets/chi_4.jpg";
import ca_1 from "../assets/ca_1.jpg";
import ca_2 from "../assets/ca_2.jpg";
import ca_3 from "../assets/ca_3.jpg";
import ca_4 from "../assets/ca_4.jpg";
import ca_5 from "../assets/ca_5.jpg";
import ca_6 from "../assets/ca_6.jpg";
import check from "../assets/check.png";

import Navigators from "./Navigate";
import { useAsyncError, useNavigate } from "react-router-dom";

const krimg = [
  kr_1,
  kr_2,
  kr_3,
  kr_4,
  kr_5,
  kr_6,
  kr_7,
  kr_8,
  kr_9,
  kr_10,
  kr_11,
  kr_12,
  kr_13,
];

const wesimg = [wes_1, wes_2, wes_3, wes_4, wes_5, wes_6];

const jpimg = [jp_1, jp_2, jp_3, jp_4];

const chiimg = [chi_1, chi_2, chi_3, chi_4];

const caimg = [ca_1, ca_2, ca_3, ca_4, ca_5, ca_6];

const oimg = [o_1, o_2, o_3, o_4, o_5, o_6];

const kr = [
  {
    id: 1,
    name: "tteokbokki",
    description: "Spicy rice cakes in gochujang sauce.",
    src: kr_1,
  },
  {
    id: 2,
    name: "naengmyeon",
    description: "Cold buckwheat noodles in savory broth.",
    src: kr_2,
  },
  {
    id: 3,
    name: "bulgogi",
    description: "Marinated and grilled thinly sliced beef.",
    src: kr_3,
  },
  {
    id: 4,
    name: "tteokgalbi",
    description: "Grilled seasoned short beef rib patties.",
    src: kr_4,
  },
  {
    id: 5,
    name: "yukhoe",
    description: "Raw beef tartare seasoned with various flavors.",
    src: kr_5,
  },
  {
    id: 6,
    name: "baekban",
    description: "Balanced meal with rice, meat, and vegetables.",
    src: kr_6,
  },
  {
    id: 7,
    name: "chicken fried",
    description: "Crispy fried chicken with various coatings.",
    src: kr_7,
  },
  {
    id: 8,
    name: "jokbal, bossam",
    description: "Tender braised pig's trotters or pork belly wraps.",
    src: kr_8,
  },
  {
    id: 9,
    name: "jjigae, jjim",
    description: "Hearty stews or braised dishes with diverse ingredients.",
    src: kr_9,
  },
  {
    id: 10,
    name: "dakbokkeumtang",
    description: "Spicy braised chicken stew with vegetables.",
    src: kr_10,
  },
  {
    id: 11,
    name: "samgyeopsal (fork)",
    description: "Grilled pork belly slices often enjoyed with lettuce wraps.",
    src: kr_11,
  },
  {
    id: 12,
    name: "hanu (beef)",
    description: "High-quality Korean beef known for its tenderness.",
    src: kr_12,
  },
  {
    id: 13,
    name: "gopchang",
    description: "Grilled or stir-fried small intestines, a popular snack.",
    src: kr_13,
  },
];
const west = [
  {
    id: 14,
    name: "pasta",
    description: "Delicious Italian noodles served in various sauces.",
    src: wes_1,
  },
  {
    id: 15,
    name: "hamburger",
    description: "Classic American sandwich with a juicy meat patty.",
    src: wes_2,
  },
  {
    id: 16,
    name: "chicken",
    description: "Tender and flavorful chicken prepared in various styles.",
    src: wes_3,
  },
  {
    id: 17,
    name: "pizza",
    description:
      "Iconic Italian dish with a crispy crust and assorted toppings.",
    src: wes_4,
  },
  {
    id: 18,
    name: "salad",
    description: "Fresh and healthy mix of vegetables, often with dressings.",
    src: wes_5,
  },
  {
    id: 19,
    name: "steak",
    description: "Premium cuts of beef cooked to perfection.",
    src: wes_6,
  },
];

const chi = [
  {
    id: 20,
    name: "zhajiangmian",
    description: "Savory Chinese noodles with minced pork sauce.",
    src: chi_1,
  },
  {
    id: 21,
    name: "dim sum",
    description: "Assorted bite-sized dishes, a Cantonese culinary tradition.",
    src: chi_2,
  },
  {
    id: 22,
    name: "mala",
    description: "Spicy and numbing Sichuanese dish often featuring hotpot.",
    src: chi_3,
  },
  {
    id: 23,
    name: "lamb skewers",
    description: "Grilled skewers of flavorful marinated lamb.",
    src: chi_4,
  },
];

const jap = [
  {
    id: 24,
    name: "tonkatsu",
    description: "Crispy breaded and deep-fried pork cutlet.",
    src: jp_1,
  },
  {
    id: 25,
    name: "ramen",
    description: "Hearty noodle soup with various toppings and broth styles.",
    src: jp_2,
  },
  {
    id: 26,
    name: "sushi",
    description: "Delicate rolls of vinegared rice and fresh seafood.",
    src: jp_3,
  },
  {
    id: 27,
    name: "japanese-curry",
    description: "Mild and flavorful curry with rice, a popular comfort food.",
    src: jp_4,
  },
];

const cafe = [
  {
    id: 28,
    name: "cake",
    description: "Indulgent and sweet dessert often served with coffee.",
    src: ca_1,
  },
  {
    id: 29,
    name: "macaron",
    description: "Delicate and colorful French confectionery.",
    src: ca_2,
  },
  {
    id: 30,
    name: "ice cream",
    description: "Chilled and creamy treat available in various flavors.",
    src: ca_3,
  },
  {
    id: 31,
    name: "sandwich",
    description:
      "Satisfying combination of fillings between two slices of bread.",
    src: ca_4,
  },
  {
    id: 32,
    name: "doughnut",
    description:
      "Ring-shaped fried pastry often topped with glaze or sprinkles.",
    src: ca_5,
  },
  {
    id: 33,
    name: "outdoor terrace",
    description:
      "Open-air seating area for enjoying refreshments and relaxation.",
    src: ca_6,
  },
];

const others = [
  { id: 1, name: "Vietnam", src: o_1 },
  { id: 2, name: "Thailand", src: o_2 },
  { id: 3, name: "Maxico", src: o_3 },
  { id: 4, name: "India", src: o_4 },
  { id: 5, name: "see food", src: o_5 },
  { id: 6, name: "others", src: o_6 },
];

const FoodContainer = ({ id, name, description, setSelect, select, src }) => {
  const [isClicked, setisClicked] = useState(false);

  const onClick = () => {
    setisClicked(!isClicked);
    if (isClicked) {
      const filtered = select.filter((item) => item != id);
      setSelect(filtered);
    } else {
      setSelect([...select, id]);
    }
  };
  console.log(select);
  return (
    <>
      <FoodDiv>
        <FoodImg key={id} value={name} isClicked={isClicked}>
          <DetailImg
            src={src}
            onClick={onClick}
            isClicked={isClicked}
          ></DetailImg>
          <ImgText id="over">{description}</ImgText>
          <CheckImg isClicked={isClicked}>
            <img src={check} style={{ width: "70px" }} />
          </CheckImg>
        </FoodImg>
        <FoodName>{name}</FoodName>
      </FoodDiv>
    </>
  );
};

const Main1 = () => {
  const [pick, setPick] = useState({
    pick1: kr,
    pick2: west,
    pick3: jap,
    pick4: chi,
    pick5: cafe,
    pick6: others,
  });

  const [select, setSelect] = useState([]);

  const navigate = useNavigate();
  const goSearch = () => {
    console.log(select);
    navigate("/search");
  };

  return (
    <>
      <Navigators nav={true} />
      <BigDiv>
        <BigBody>
          <Category>Korean-style Food</Category>
          <BigFood>
            {pick.pick1.map((item) => (
              <FoodContainer {...item} setSelect={setSelect} select={select} />
            ))}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Western-style Food</Category>
          <BigFood>
            {pick.pick2.map(function (item) {
              return (
                <FoodContainer
                  {...item}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Japanese-style Food</Category>
          <BigFood>
            {pick.pick3.map(function (item) {
              return (
                <FoodContainer
                  {...item}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Chinese-style Food</Category>
          <BigFood>
            {pick.pick4.map(function (item) {
              return (
                <FoodContainer
                  {...item}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>cafe</Category>
          <BigFood>
            {pick.pick5.map(function (item) {
              return (
                <FoodContainer
                  {...item}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>others</Category>
          <BigFood>
            {pick.pick6.map(function (item) {
              return (
                <FoodContainer
                  {...item}
                  setSelect={setSelect}
                  select={select}
                />
              );
            })}
          </BigFood>
        </BigBody>
        <NextStep onClick={goSearch}>Next</NextStep>
      </BigDiv>
    </>
  );
};

export default Main1;

const BigDiv = styled.div`
  font-family: "Noto Sans", sans-serif;
  width: 1680px;
  margin-left: 120px;
  cursor: default;
`;

const BigBody = styled.div`
  height: 370px;
  width: 1680px;
  margin-top: 20px;
`;

const Category = styled.div`
  height: 40px;
  width: 230px;
  font-weight: 500;
  border: 2px solid #ffa42e;
  font-size: 20px;
  line-height: 35px;
  border-radius: 30px;
  margin-left: 5px;
  background-color: #ffa42e;
  text-align: center;
  color: white;
`;

const BigFood = styled.div`
  height: 310px;
  width: 1680px;
  white-space: nowrap;
  border: 2px solid #d9d9d9;
  margin-top: 10px;
  border-radius: 20px;
  overflow-y: scroll;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0 10px;
`;

const FoodDiv = styled.div`
  height: 240px;
  width: 300px;

  margin-top: 40px;
  margin-right: 20px;
  margin-left: 10px;
  display: inline-block;
  margin-bottom: 10px;
  float: left;
`;

const FoodImg = styled.button`
  height: 200px;
  width: 300px;
  border: 0;
  outline: 0;
  background-color: white;
  position: relative;

  ${({ isClicked }) =>
    isClicked
      ? `&:hover img {
    transform: scale(1.05);
    
  }`
      : ` &:hover img {
    transform: scale(1.05);
    opacity: 0.2;
  }
  &:hover #over {
    display: block;
    text-align: center;
  }`}
`;

const DetailImg = styled.img`
  transition: all 0.2s linear;
  border-radius: 20px;
  object-fit: cover;
  height: 200px;
  width: 300px;
  background: no repeat;
  opacity: ${({ isClicked }) => (isClicked ? 0.3 : 1)};
`;

const CheckImg = styled.div`
  position: absolute;
  width: 100%;
  top: 35%;
  transition: all 0.2s linear;

  opacity: ${({ isClicked }) => (isClicked ? 1 : 0)};
`;

const ImgText = styled.div`
  transition: all 0.4s linear;
  position: absolute;
  width: 100%;
  top: 35%;
  font-size: 18px;
  text-align: center;
  padding: 20px 10px 20px 10px;
  white-space: normal;
  font-family: "Varela Round", sans-serif;
  &#over {
    display: none;
  }
`;

const FoodName = styled.div`
  margin-left: 5px;
  line-height: 40px;
  text-align: center;
`;

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "2px solid #D9D9D9",
        lineHeight: "70px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 0px" }}></span>
    </div>
  );
};

const NextStep = styled.button`
  margin: 10px 0 40px 0;
  font-size: 20px;
  bottom: 30px;
  width: 100px;
  height: 40px;
  border: 0;

  margin-left: 790px;
  background-color: #ffa42e;
  font-weight: 500;
  border-radius: 20px;
  color: white;
`;
