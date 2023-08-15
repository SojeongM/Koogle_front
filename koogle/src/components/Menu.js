import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";

const menuData = [
  { name: "Item 1", price: "5000₩" },
  { name: "Item 2", price: "6000₩" },
  { name: "Item 3", price: "5500₩" },
  { name: "Item 4", price: "6500₩" },
  { name: "Item 5", price: "7000₩" },
  { name: "Item 6", price: "7500₩" },
  { name: "Item 7", price: "8000₩" },
  { name: "Item 8", price: "8500₩" },
];

function Menu() {
  return (
    <MenuContainer>
      <MenuTitle>Menu</MenuTitle>
      <MenuWrapper>
        {menuData.map((item, index) => (
          <MenuItem key={index}>
            <MenuImage src={testimg} alt="메뉴 이미지"></MenuImage>
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
  flex: 1;
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
`;

export default Menu;
