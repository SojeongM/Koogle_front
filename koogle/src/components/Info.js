import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";
import phoneimg from "../assets/phone.png";
import Menu from "./Menu";
import CustomerReviews from "./CustomerReview";
import Navigators from "./Navigate";

import { useNavigate } from "react-router";

const Operating_Hours = {
  Mon: "12:00 - 22: 00",
  Tue: "12:00 - 22: 00",
  Wed: "12:00 - 22: 00",
  Thur: "12:00 - 22: 00",
  Fri: "12:00 - 22: 00",
  Sat: "12:00 - 22: 00",
  Sun: "closed",
};

const storeData = {
  hours: [
    { hour: "12:00 - 22: 00", day: "Mon" },
    { hour: "12:00 - 22: 00", day: "Tue" },
    { hour: "12:00 - 22: 00", day: "Wed" },
    { hour: "12:00 - 22: 00", day: "Thr" },
    { hour: "12:00 - 22: 00", day: "Fri" },
    { hour: "12:00 - 22: 00", day: "Sat" },
    { hour: "closed", day: "Sun" },
  ],

  image: testimg,
  name: "DugaHun Restraurant",
  category: "#Italian",
  rating: "⭐⭐⭐",
  phone: {
    icon: phoneimg,
    number: "02-1234-5678",
  },
  address: "📍Seoul, Jongro- gu, Samcheong-ro 14",
  reservation: true,
};

const OpeningInfoList = ({ hoursList }) => {
  return (
    <>
      {hoursList.map((hours, index) => (
        <OpeningInfo key={index}>
          {hours.day}: {hours.hour}
        </OpeningInfo>
      ))}
    </>
  );
};

const Info = () => {
  return (
    <>
      <Navigators nav={false} />
      <OverViews>
        <InfoBox width="1020px" height="450px" marginLeft="180px">
          <ImageBox src={storeData.image} alt="restaurant pic" />
          <StoreInfo>
            <TopInfo>
              <StoreName>{storeData.name}</StoreName>
              <Ratings>{storeData.rating}</Ratings>
            </TopInfo>
            <BottomInfo>
              <Category>{storeData.category}</Category>
              <PhoneNumberContainer>
                <PhoneIcon src={storeData.phone.icon} alt="phone icon" />
                <PhoneNumberText>{storeData.phone.number}</PhoneNumberText>
              </PhoneNumberContainer>
            </BottomInfo>
            <AddressInfo>{storeData.address}</AddressInfo>

            <OpeningInfoList hoursList={storeData.hours} />

            <BookBtn>
              <ReservationButton available={storeData.reservation}>
                {storeData.reservation
                  ? "Reservation Available"
                  : "Reservation Unavailable"}
              </ReservationButton>
            </BookBtn>
          </StoreInfo>
        </InfoBox>
        <MapBox />
      </OverViews>

      <CustomerReviews />

      <MenuBox width="1590px" marginLeft="150px">
        <MenuInfo />
        <Menu />
      </MenuBox>
    </>
  );
};

const OverViews = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  font-family: "Noto Sans", sans-serif;
`;

const BaseBox = styled.div`
  width: ${({ width }) => width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

const InfoBox = styled(BaseBox)`
  border: 2px solid #d9d9d9;

  border-radius: 10px;
  padding-top: 0px;
  display: flex;
`;

const ImageBox = styled.img`
  width: 370px;
  height: 335px;
  margin-top: 50px;
  margin-left: 40px;
  object-fit: cover; // 이미지가 박스 안에서 잘리지 않게
  border-radius: 10px;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
const TopInfo = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
`;

const StoreName = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 10px; // 다음 요소와의 간격 조절
  color: black;
`;

const Category = styled.div`
  display: flex;
  margin-right: 40px;
  font-size: 20px;
  margin-bottom: 0px;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-left: 40px;
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 20px;
  margin-bottom: 20px;
`;

const OpeningInfo = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
`;

const Ratings = styled.p`
  font-size: 20px;
  margin-top: 0px;
  margin-left: 10px;
  color: black;
  margin-bottom: 10px;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center; // 이미지와 텍스트를 수직으로 정렬
  font-size: 16px;
  color: black;
`;

const PhoneIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
  border-radius: 10px;

`;

const PhoneNumberText = styled.span`
  font-size: 20px;
`;
const BookBtn = styled.div`
  margin-top: -50px;
  margin-bottom: 150px;
  float: right;
`;

const ReservationButton = styled.button`
  width: 160px;
  height: 60px;
  font-size: 18px;
  margin-left: 350px;
  margin-top: -100px;
  cursor: pointer;
  border-radius: 10px;
  border: 0px;
  color: white;
  font-weight: bold;
  background-color: ${({ available }) => (available ? "#ffa42e" : "#d4d4d4")};
  cursor: ${({ available }) => (available ? "pointer" : "default")};
`;

const MapBox = styled(BaseBox)`
  margin-left: 60px;
  width: 480px;
  height: 450px;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
`;

const MenuBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: "Noto Sans", sans-serif;
  padding-left: 30px;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  margin-top: 20px;
  margin-right: 20px;
`;
export default Info;
