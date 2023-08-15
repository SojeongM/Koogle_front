import styled from "styled-components";
import testimg from "../assets/testimg.jpg";
import phoneimg from "../assets/phone.png";

const Info = () => {
  return (
    <>
      <First>
        <InfoBox width="1020px" height="450px" marginLeft="180px">
          <ImageBox src={testimg} alt="rurant pic" />
          <StoreInfo>
            <TopInfo>
              <StoreName>DugaHun Restraurant</StoreName>
              <Category>#Italian</Category>
            </TopInfo>
            <BottomInfo>
              <Ratings>자체 평점</Ratings>
              <PhoneNumberContainer>
                <PhoneIcon src={phoneimg} alt="전화 사진" />
                <PhoneNumberText>02-1234-5678</PhoneNumberText>
              </PhoneNumberContainer>
            </BottomInfo>
            <AddressInfo>📍Seoul, Jongro- gu, Samcheong-ro 14</AddressInfo>
            <OpeningInfo>Mon 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Tue 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Wed 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Thur 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Fri 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Sat 12:00 - 22: 00</OpeningInfo>
            <OpeningInfo>Sun 12:00 - 22: 00</OpeningInfo>
            <button>Reservation Available</button>
          </StoreInfo>
        </InfoBox>
        <MapBox width="500px" height="450px" marginLeft="40px" />
      </First>
      <Second>
        <ReviewBox width="1563px" height="280px" marginLeft="180px">
          <PhotoReviews>
            <ReviewPhoto src={testimg} alt="리뷰 사진"></ReviewPhoto>
            <ReviewPhoto src={testimg} alt="리뷰 사진"></ReviewPhoto>
            <ReviewPhoto
              src={testimg}
              alt="리뷰 사진"
              className="last"
            ></ReviewPhoto>
          </PhotoReviews>
          <NaverReview>
            <DetailReview>️ 🖼️Nice Interrior 113</DetailReview>
            <DetailReview>️ 🍕 Delicious Food 89</DetailReview>
            <DetailReview>️ ☀️ Nice View 83</DetailReview>
            <DetailReview>️ 🍷 For Special Day 81</DetailReview>
            <DetailReview>️ 🥰 Friendly Service 77</DetailReview>
          </NaverReview>
          <NaverReview>
            <DetailReview>️ 🖼️Nice Interrior 113</DetailReview>
            <DetailReview>️ 🍕 Delicious Food 89</DetailReview>
            <DetailReview>️ ☀️ Nice View 83</DetailReview>
            <DetailReview>️ 🍷 For Special Day 81</DetailReview>
            <DetailReview>️ 🥰 Friendly Service 77</DetailReview>
            See more Review
          </NaverReview>
        </ReviewBox>
      </Second>
      <Third>
        <MenuBox width="1563px" height="517px" marginLeft="180px">
          <MenuInfo>
            <MenuRow>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
            </MenuRow>
          </MenuInfo>
          <MenuInfo>
            <MenuRow>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
              <Menuimg src={testimg} alt="메뉴 사진" />
              <MenuPriceContainer>
                <MenuPrice>수저가 짬뽕</MenuPrice>
                <MenuPrice>7000 ₩</MenuPrice>
              </MenuPriceContainer>
            </MenuRow>
          </MenuInfo>
        </MenuBox>
      </Third>
    </>
  );
};

export default Info;

const First = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 80px;
`;

const Second = styled.div`
  display: flex;
  padding-top: 40px;
`;

const Third = styled.div`
  display: flex;
  padding-top: 40px;
`;

const BaseBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || "0"};
  border: 1px solid black;
`;

const InfoBox = styled(BaseBox)`
  padding-top: 50px;
  display: flex;
  border: 1px solid black;
`;

const ImageBox = styled.img`
  width: 370px;
  height: 335px;
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
  align-items: center;
`;

const StoreName = styled.p`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px; // 다음 요소와의 간격 조절
  color: black;
`;

const Category = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 16px;
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
`;

const OpeningInfo = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 5px;
  align-items: center;
`;

const Ratings = styled.p`
  font-size: 16px;
  padding-right: 60px;
  color: black;
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
  font-size: 16px;
`;

const MapBox = styled(BaseBox)`
  width: 500px;
  height: 450px;
  border: 1px solid black;
`;

const ReviewBox = styled(BaseBox)`
  display: flex;
  border: 1px solid black;
`;

const PhotoReviews = styled.div`
  display: flex;
  margin-right: 130px;
  padding-top: 30px;
  padding-left: 40px;
`;
const ReviewPhoto = styled.img`
  position: relative;
  width: 185px;
  height: 190px;
  &.last {
    opacity: 0.6;

    ::after {
      content: "+";
      top: 50%;
      left: 50%;
      font-size: 24px;
      color: black;
      width: 100%;
      height: 100%;
      display: flex;
    }
  }
`;

const NaverReview = styled.div`
  display: flex;
  flex-direction: column;

  width: 337px;
  height: 202px;
  margin-top: 40px;
`;

const DetailReview = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 20px;
`;

const MenuBox = styled(BaseBox)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding-left: 45px;
  padding-top: 53px;
  height: auto;
  overflow-x: auto; // 가로스크롤
  border: 1px solid black;
`;

const MenuInfo = styled.div`
  display: flex;
  width: 350px;
  height: 170px;
  margin-right: 20px;
  &:nth-child(3n) {
    margin-right: 0;
  }
  border: 1px solid black;
`;

const MenuRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-bottom: 35px; // 각 줄 사이의 간격

  &:last-child {
    margin-bottom: 0;
  }
`;

const MenuPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
`;

const Menuimg = styled.img`
  display: flex;
  width: 190px;
  height: 160px;
  border: 1px solid black;
`;

const MenuPrice = styled.div`
  display: flex;
  margin: 40px 20px 0px 0px;
  width: 356px;
  height: 43px;
`;
