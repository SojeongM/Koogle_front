import React from "react";
import styled from "styled-components";
import testimg from "../assets/testimg.jpg";

const reviewDetails = [
  { icon: "🖼️", text: "Nice Interrior", count: 113 },
  { icon: "🍕", text: "Delicious Food", count: 89 },
  { icon: "☀️", text: "Nice View", count: 83 },
  { icon: "🍷", text: "For Special Day", count: 81 },
  { icon: "🥰", text: "Friendly Service", count: 77 },
];

const CustomerReviews = () => {
  return (
    <ReviewsContainer>
      <ReviewBox width="1563px" height="280px" marginLeft="60px">
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
          {reviewDetails.map((review, index) => (
            <DetailReview key={index}>
              {review.icon} {review.text} {review.count}
            </DetailReview>
          ))}
        </NaverReview>
        <NaverReview>
          {reviewDetails.map((review, index) => (
            <DetailReview key={index}>
              {review.icon} {review.text} {review.count}
            </DetailReview>
          ))}
          See more Review
        </NaverReview>
      </ReviewBox>
    </ReviewsContainer>
  );
};
const ReviewsContainer = styled.div`
  display: flex;
  justify-content: center; // 자식 요소들을 가로 방향 중앙에 위치시킴
  align-items: center; // 자식 요소들을 세로 방향 중앙에 위치시킴
  padding: 20px; // 컨테이너 내부의 여백
  margin: 20px 0 0 40px; // 컨테이너 외부의 상하 여백
`;

const BaseBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || "0"};
`;
const ReviewBox = styled(BaseBox)`
  display: flex;
  border: 1px solid black;
  border-radius: 8px; // 모서리 둥글게, 필요에 따라 조절 가능
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); // 약간의 그림자 효과
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
  margin: 40px 40px;
`;

const DetailReview = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 20px;
`;

export default CustomerReviews;
