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

import Navigators from "./Navigate";
import { useNavigate } from "react-router-dom";

import Header from "./Header";

const Main1 = () => {
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

  const oimg = [o_1, o_2, o_3, o_4, o_5];

  const navigate = useNavigate();
  const goSearch = () => {
    console.log(select);
    navigate("/search");
  };

  const kr = [
    {
      id: 1,
      name: "tteokbokki",
      description: "Spicy rice cakes in gochujang sauce.",
    },
    {
      id: 2,
      name: "naengmyeon",
      description: "Cold buckwheat noodles in savory broth.",
    },
    {
      id: 3,
      name: "bulgogi",
      description: "Marinated and grilled thinly sliced beef.",
    },
    {
      id: 4,
      name: "tteokgalbi",
      description: "Grilled seasoned short beef rib patties.",
    },
    {
      id: 5,
      name: "yukhoe",
      description: "Raw beef tartare seasoned with various flavors.",
    },
    {
      id: 6,
      name: "baekban",
      description: "Balanced meal with rice, meat, and vegetables.",
    },
    {
      id: 7,
      name: "chicken fried",
      description: "Crispy fried chicken with various coatings.",
    },
    {
      id: 8,
      name: "jokbal, bossam",
      description: "Tender braised pig's trotters or pork belly wraps.",
    },
    {
      id: 9,
      name: "jjigae, jjim",
      description: "Hearty stews or braised dishes with diverse ingredients.",
    },
    {
      id: 10,
      name: "dakbokkeumtang",
      description: "Spicy braised chicken stew with vegetables.",
    },
    {
      id: 11,
      name: "samgyeopsal (fork)",
      description:
        "Grilled pork belly slices often enjoyed with lettuce wraps.",
    },
    {
      id: 12,
      name: "hanu (beef)",
      description: "High-quality Korean beef known for its tenderness.",
    },
    {
      id: 13,
      name: "gopchang",
      description: "Grilled or stir-fried small intestines, a popular snack.",
    },
  ];
  const west = [
    {
      id: 1,
      name: "pasta",
      description: "Delicious Italian noodles served in various sauces.",
    },
    {
      id: 2,
      name: "hamburger",
      description: "Classic American sandwich with a juicy meat patty.",
    },
    {
      id: 3,
      name: "chicken",
      description: "Tender and flavorful chicken prepared in various styles.",
    },
    {
      id: 4,
      name: "pizza",
      description:
        "Iconic Italian dish with a crispy crust and assorted toppings.",
    },
    {
      id: 5,
      name: "salad",
      description: "Fresh and healthy mix of vegetables, often with dressings.",
    },
    {
      id: 6,
      name: "steak",
      description: "Premium cuts of beef cooked to perfection.",
    },
  ];

  const chi = [
    {
      id: 1,
      name: "zhajiangmian",
      description: "Savory Chinese noodles with minced pork sauce.",
    },
    {
      id: 2,
      name: "dim sum",
      description:
        "Assorted bite-sized dishes, a Cantonese culinary tradition.",
    },
    {
      id: 3,
      name: "mala",
      description: "Spicy and numbing Sichuanese dish often featuring hotpot.",
    },
    {
      id: 4,
      name: "lamb skewers",
      description: "Grilled skewers of flavorful marinated lamb.",
    },
  ];

  const jap = [
    {
      id: 1,
      name: "tonkatsu",
      description: "Crispy breaded and deep-fried pork cutlet.",
    },
    {
      id: 2,
      name: "ramen",
      description: "Hearty noodle soup with various toppings and broth styles.",
    },
    {
      id: 3,
      name: "sushi",
      description: "Delicate rolls of vinegared rice and fresh seafood.",
    },
    {
      id: 4,
      name: "japanese-curry",
      description:
        "Mild and flavorful curry with rice, a popular comfort food.",
    },
  ];

  const cafe = [
    {
      id: 1,
      name: "cake",
      description: "Indulgent and sweet dessert often served with coffee.",
    },
    {
      id: 2,
      name: "macaron",
      description: "Delicate and colorful French confectionery.",
    },
    {
      id: 3,
      name: "ice cream",
      description: "Chilled and creamy treat available in various flavors.",
    },
    {
      id: 4,
      name: "sandwich",
      description:
        "Satisfying combination of fillings between two slices of bread.",
    },
    {
      id: 5,
      name: "doughnut",
      description:
        "Ring-shaped fried pastry often topped with glaze or sprinkles.",
    },
    {
      id: 6,
      name: "outdoor terrace",
      description:
        "Open-air seating area for enjoying refreshments and relaxation.",
    },
  ];

  const others = [
    { id: 1, name: "Vietnam" },
    { id: 2, name: "Thailand" },
    { id: 3, name: "Maxico" },
    { id: 4, name: "India" },
    { id: 5, name: "see food" },
    { id: 6, name: "others" },
  ];

  const [pick1, setPick1] = useState(kr);
  const [pick2, setPick2] = useState(west);
  const [pick3, setPick3] = useState(jap);
  const [pick4, setPick4] = useState(chi);
  const [pick5, setPick5] = useState(cafe);
  const [pick6, setPick6] = useState(others);
  const [select, setSelect] = useState([]);

  return (
    <>
      <Header></Header>
      <Navigators />
      <BigDiv>
        <BigBody>
          <Category>Korean-style Food</Category>
          <BigFood>
            {pick1.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={krimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                    <ImgText id="over">{item.description}</ImgText>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Western-style Food</Category>
          <BigFood>
            {pick2.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={wesimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                    <ImgText id="over">{item.description}</ImgText>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Japanese-style Food</Category>
          <BigFood>
            {pick3.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={jpimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                    <ImgText id="over">{item.description}</ImgText>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>Chinese-style Food</Category>
          <BigFood>
            {pick4.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={chiimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                    <ImgText id="over">{item.description}</ImgText>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>cafe</Category>
          <BigFood>
            {pick5.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={caimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                    <ImgText id="over">{item.description}</ImgText>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>

        <BigBody>
          <Category>others</Category>
          <BigFood>
            {pick6.map(function (item) {
              return (
                <FoodDiv>
                  <FoodImg
                    key={item.id}
                    value={item.name}
                    onClick={() => {
                      !select.includes(item)
                        ? setSelect((select) => [...select, item])
                        : setSelect(select.filter((button) => button !== item));
                    }}
                    className={
                      select.includes(item)
                        ? "button table_btn_s"
                        : "button table_btn_ns"
                    }
                  >
                    <DetailImg
                      src={oimg[item.id - 1]}
                      object-fit="cover"
                      height="200px"
                      width="300px"
                      background="no repeat"
                      className={
                        select.includes(item) ? "img select" : "img not_select"
                      }
                    ></DetailImg>
                  </FoodImg>
                  <FoodName>{item.name}</FoodName>
                </FoodDiv>
              );
            })}
          </BigFood>
        </BigBody>
      </BigDiv>
      <NextStep onClick={goSearch}>next</NextStep>
    </>
  );
};

export default Main1;

const BigDiv = styled.div`
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
  font-weight:500;
  background-color: #ffeccf;
  font-size: 18px;
  line-height: 40px;
  border-radius: 30px;
  margin-left: 5px;
  
`;

const BigFood = styled.div`
  height: 310px;
  width: 1680px;
  white-space: nowrap; // 가로 스크롤의 핵심
  border: 2px solid #D9D9D9;
  margin-top: 10px;
  border-radius: 20px;
  overflow-y: scroll;
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
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
  
  &:hover img {
    transform: scale(1.05);
    opacity: 0.2;
  }
  &.table_btn_s {
    opacity: 0.3;
  }
  &.table_btn_ns {
  }
  &:hover #over {
    display: block;
    text-align: center;
  }
`;

const DetailImg = styled.img`
  transition: all 0.2s linear;
  border-radius: 20px;
  &.select {
  }
  &.not_select {
  }
`;

const ImgText = styled.div`
  position: absolute;
  top: 40%;
  font-size: 18px;
  white-space:normal;
  &#over {
    display: none;
  }
`;

const FoodName = styled.div`
  margin-left: 5px;
  line-height: 40px;
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
  font-size: 18px;
  bottom: 30px;
  width: 10%;
  height: 50px;
  margin: 0, auto;
  border: 0;
  background-color: #ffeccf;
  font-weight: 500;
  border-radius: 20px;
`;
