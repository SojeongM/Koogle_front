import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";
import menu_1 from "../assets/menu_1.jpg";
import menu_2 from "../assets/menu_2.jpg";
import menu_3 from "../assets/menu_3.jpg";
import menu_4 from "../assets/menu_4.jpg";
import menu_5 from "../assets/menu_5.jpg";

const menuData = [
  { name: "Mr. Tanaka set meal", price: "18800₩", img: menu_1 },
  { name: "Fried chicken meal", price: "14800₩", img: menu_2 },
  { name: "Miso eggplant set", price: "16800₩", img: menu_3 },
  { name: "Karaage set meal", price: "14800₩", img: menu_4 },
  { name: "Stemina natto set meal", price: "7000₩", img: menu_5 },
];

function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      <MenuWrapper>
        {menuData.map((item, index) => (
          <MenuItem key={index}>
            <MenuImage src={item.img} alt="메뉴 이미지"></MenuImage>
            <MenuName>{item.name}</MenuName>
            <MenuPrice>{item.price}</MenuPrice>
          </MenuItem>
        ))}
      </MenuWrapper>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  border: 2px solid #d9d9d9;
  border-radius: 10px;
  font-family: "Noto Sans", sans-serif;
  margin-bottom: 20px;
`;
const MenuTitle = styled.h2`
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
`;

const MenuItem = styled.div`
  flex: 0 0 25%;
  min-width: 25%;
  box-sizing: border-box;
  padding: 5px;
  text-align: center;
`;

const MenuImage = styled.img`
  width: 80%;
  margin-bottom: 10px;
`;

const MenuName = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

const MenuPrice = styled.p`
  color: grey;
  font-size: 16px;
  margin-top: 10px;
`;

export default Menu;
