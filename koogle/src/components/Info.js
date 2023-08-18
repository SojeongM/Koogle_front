import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";
import phoneimg from "../assets/phone.png";
import Menu from "./Menu";
import CustomerReviews from "./CustomerReview";
import Navigators from "./Navigate";
import logoimg from "../assets/Yummy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router";
import shop_3 from "../assets/shop_3.jpg";
import mapimg from "../assets/map.jpg";
import { useRef, useEffect } from "react";
import Map from "./Map";
const Operating_Hours = {
  Mon: "Regular Holiday",
  Tue: "12:00 - 22: 00",
  Wed: "12:00 - 22: 00",
  Thur: "12:00 - 22: 00",
  Fri: "12:00 - 22: 00",
  Sat: "12:00 - 22: 00",
  Sun: "closed",
};

const storeData = {
  hours: [
    { hour: "Regular Holiday", day: "Mon" },
    { hour: "Regular Holiday", day: "Tue" },
    { hour: "11:30 - 21: 00", day: "Wed" },
    { hour: "11:30 - 21: 00", day: "Thr" },
    { hour: "11:30 - 21: 00", day: "Fri" },
    { hour: "11:30 - 21: 00", day: "Sat" },
    { hour: "11:30 - 21: 00", day: "Sun" },
  ],

  image: testimg,
  name: "DugaHun Restraurant",
  category: "#Japanese",
  rating: 2,
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
  const location = useLocation();
  const resName = location.state?.resName;
  const address = location.state?.address;
  const phone = location.state?.phone;

  return (
    <>
      <Navigators nav={false} />
      <OverViews>
        <InfoBox width="1020px" height="450px" marginLeft="180px">
          <ImageBox src={shop_3} alt="restaurant pic" />
          <StoreInfo>
            <div
              style={{
                marginLeft: "20px",
                display: "flex",
                padding: "10px 20px",
                flexDirection: "column",
              }}
            >
              <TopInfo>
                <StoreName>{resName}</StoreName>
                {[...Array(storeData.rating)].map((i) => (
                  <Ratings key={i} src={logoimg} />
                ))}
              </TopInfo>

              <BottomInfo>
                <Category>{storeData.category}</Category>
                <PhoneNumberContainer>
                  <FontAwesomeIcon
                    icon={faPhone}
                    style={{ fontSize: "20px", color: "#ffa42e" }}
                  />
                  <PhoneNumberText>{phone}</PhoneNumberText>
                </PhoneNumberContainer>
              </BottomInfo>

              <AddressInfo>📍 &nbsp;{address}</AddressInfo>

              <OpeningInfoList hoursList={storeData.hours} />
              <BookBtn>
                <ReservationButton available={storeData.reservation}>
                  {storeData.reservation
                    ? "Reservation Available"
                    : "Reservation Unavailable"}
                </ReservationButton>
              </BookBtn>
            </div>
          </StoreInfo>
        </InfoBox>
        <Map/>
      </OverViews>

      <CustomerReviews resName={resName} address={address} />

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
  object-fit: cover;
  border-radius: 10px;
`;

const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;
const TopInfo = styled.div`
  display: flex;
  margin-top: 35px;
`;

const StoreName = styled.p`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  color: black;
`;

const Category = styled.div`
  display: flex;
  margin-right: 50px;
  font-size: 20px;
  padding: 5px 10px;
  background-color: #ffa42e;
  color: white;
  border-radius: 20px;
`;

const BottomInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
  margin-left: 0px;
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

const Ratings = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const PhoneNumberContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: black;
`;

const PhoneNumberText = styled.span`
  margin-left: 15px;
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

export const MapBox = styled.img`
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
