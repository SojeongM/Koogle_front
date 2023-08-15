import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";
import phoneimg from "../assets/phone.png";
import Menu from "./Menu";
import CustomerReviews from "./CustomerReview";
import Navigators from "./Navigate";

const Operating_Hours = [
  "Mon 12:00 - 22: 00",
  "Tue 12:00 - 22: 00",
  "Wed 12:00 - 22: 00",
  "Thur 12:00 - 22: 00",
  "Fri 12:00 - 22: 00",
  "Sat 12:00 - 22: 00",
  "Sun : closed",
];
const storeData = {
  image: testimg,
  name: "DugaHun Restraurant",
  category: "#Italian",
  rating: "⭐⭐⭐",
  phone: {
    icon: phoneimg,
    number: "02-1234-5678",
  },
  address: "📍Seoul, Jongro- gu, Samcheong-ro 14",
  hours: Operating_Hours,
  reservation: true,
};

const OpeningInfoList = ({ hoursList }) => {
  return (
    <>
      {hoursList.map((hours, index) => (
        <OpeningInfo key={index}>{hours}</OpeningInfo>
      ))}
    </>
  );
};

const Info = () => {
  return (
    <>
      <Navigators />
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
      <MenuDisplay>
        <MenuBox width="1563px" height="517px" marginLeft="160px">
          <MenuInfo>
            <Menu />
          </MenuInfo>
        </MenuBox>
      </MenuDisplay>
    </>
  );
};

const OverViews = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const MenuDisplay = styled.div`
  display: flex;
  padding-top: 5px;
`;

const BaseBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || "0"};
`;

const InfoBox = styled(BaseBox)`
  padding-top: 0px;
  display: flex;
  border: 1px solid black;
`;

const ImageBox = styled.img`
  width: 370px;
  height: 335px;
  margin-top: 50px;
  margin-left: 40px;
  object-fit: cover; // 이미지가 박스 안에서 잘리지 않게
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;
const TopInfo = styled.div`
  display: flex;
  margin-top: 20px;
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
  margin-right: 20px;
  font-size: 20px;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px; // 이미지와의 간격 조절
`;

const AddressInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const OpeningInfo = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
`;

const Ratings = styled.p`
  font-size: 20px;
  margin-top: 30px;
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
`;

const PhoneNumberText = styled.span`
  font-size: 25px;
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
  margin-bottom: 0px;
  cursor: pointer;
  border-radius: 10px;
  border: 0px;
  background-color: ${(props) => (props.available ? "#ffeccf" : "#d4d4d4")};
  cursor: ${(props) => (props.available ? "pointer" : "default")};
`;

const MapBox = styled(BaseBox)`
  margin-left: 60px;
  width: 480px;
  height: 450px;
  border: 1px solid black;
`;

const MenuBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 30px;
  height: auto;
`;

const MenuInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  height: 300px;
  margin-right: 20px;
`;
export default Info;
