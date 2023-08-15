import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import testimg from "../assets/testimg.jpg";

const reviewDetails = [
  { icon: "🖼️", text: "Nice Interrior", count: 113 },
  { icon: "🍕", text: "Delicious Food", count: 89 },
  { icon: "☀️", text: "Nice View", count: 83 },
  { icon: "🍷", text: "For Special Day", count: 81 },
  { icon: "🥰", text: "Friendly Service", count: 77 },
];

const CustomerReviews = () => {
  {
    /*link 태그로 처리할것 */
  }
  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/review");
  };
  return (
    <ReviewsContainer>
      <ReviewBox width="1563px" height="280px" marginLeft="0px">
        <PhotoReviews onClick={goSearch}>
          <ReviewPhoto src={testimg} alt="리뷰 사진"></ReviewPhoto>
          <ReviewPhoto src={testimg} alt="리뷰 사진"></ReviewPhoto>
          <ReviewPhoto
            src={testimg}
            alt="리뷰 사진"
            className="last"
          ></ReviewPhoto>
        </PhotoReviews>

        <NaverReview>
          <EmojiReviewContainer>
            <EmojiTitle>Local's Pick</EmojiTitle>
            {reviewDetails.map((review, index) => (
              <DetailReview key={index}>
                {review.icon} {review.text} {review.count}
              </DetailReview>
            ))}
          </EmojiReviewContainer>
        </NaverReview>

        <NaverReview>
          <EmojiReviewContainer>
            <EmojiTitle>Traveler's Pick</EmojiTitle>
            {reviewDetails.map((review, index) => (
              <DetailReview key={index}>
                {review.icon} {review.text} {review.count}
              </DetailReview>
            ))}
          </EmojiReviewContainer>

          <span
            onClick={goSearch}
            style={{ cursor: "pointer", alignSelf: "flex-end" }}
          >
            See more Review
          </span>
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
  margin: 20px 0 0 0px; // 컨테이너 외부의 상하 여백
`;

const BaseBox = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  margin-left: ${(props) => props.marginLeft || "0"};
`;
const ReviewBox = styled(BaseBox)`
  display: flex;
  box-shadow: 2px 2px 2px 2px rgb(0, 0, 0, 0.2);

  border-radius: 10px;
  border-radius: 8px; // 모서리 둥글게, 필요에 따라 조절 가능
`;

const PhotoReviews = styled.div`
  display: flex;
  margin-right: 130px;
  padding-top: 40px;
  padding-left: 50px;
  cursor: pointer;
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

const EmojiReviewContainer = styled.div``;
const EmojiTitle = styled.div`
  font-size: 20px;
  margin-top: 15px;
  margin-bottom: 20px;
`;
const NaverReview = styled.div`
  display: flex;
  flex-direction: column;

  width: 337px;
  height: 202px;
  margin: 20px 40px;
`;

const DetailReview = styled.div`
  display: flex;
  margin-bottom: 10px;
  font-size: 20px;
`;

export default CustomerReviews;
