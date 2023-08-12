import styled from "styled-components";
import Filter from "./Filter";
import testimg from "../assets/testimg.jpg";
import profileimg from "../assets/profile.svg";
import React from "react";

const Review = () => {
  const reviews = [
    {
      profileImage: profileimg,
      nickname: "닉네임1",
      flag: "🇰🇷",
      rating: 4.3,
      reviewTime: "1month ago",
      totalReviews: 105,
      totalPhotos: 20,
      reviewText: "리뷰내용~ 어쩌고 저쩌고 맛있었고",
      reviewPhotos: [testimg, testimg, testimg],
    },
    {
      profileImage: profileimg,
      nickname: "닉네임2",
      flag: "🇰🇷",
      rating: 4.3,
      reviewTime: "1month ago",
      totalReviews: 105,
      totalPhotos: 20,
      reviewText: "리뷰내용~ 어쩌고 저쩌고 맛있었고",
      reviewPhotos: [testimg, testimg, testimg],
    },
    {
      profileImage: profileimg,
      nickname: "닉네임3",
      flag: "🇺🇸",
      rating: 4.8,
      reviewTime: "2weeks ago",
      totalReviews: 50,
      totalPhotos: 10,
      reviewText: "또 다른 리뷰 내용~",
      reviewPhotos: [testimg],
    },
  ];
  const koreanReviews = reviews.filter((review) => review.flag === "🇰🇷");
  const otherReviews = reviews.filter((review) => review.flag !== "🇰🇷");

  return (
    <>
      <div>
        <InfoBox>
          <ResName>
            Dugahun Restaurant
            <WriteReviewBtn>✍️Write a Review</WriteReviewBtn>
          </ResName>
          <AddressInfo>📍Seoul, Jongro- gu, Samcheong-ro 14</AddressInfo>
          <Ratings>
            🌟 <RatingValue> 4.52</RatingValue>
            290 Reviews
          </Ratings>
        </InfoBox>
      </div>
      <Filter showLine={false} />
      <ReviewContainer>
        {koreanReviews.map((_, index) => (
          <React.Fragment key={index}>
            {/* 한국 리뷰 */}
            {koreanReviews[index] && (
              <ReviewBox>
                <Photo>
                  <Profilepic
                    src={koreanReviews[index].profileImage}
                    alt="유저사진"
                  />
                  <UserInfo>
                    <NickName>
                      {koreanReviews[index].flag}{" "}
                      {koreanReviews[index].nickname}
                    </NickName>
                    <RatingInfo>
                      ⭐ {koreanReviews[index].rating}{" "}
                      <TimeSpan>{koreanReviews[index].reviewTime}</TimeSpan>
                    </RatingInfo>
                    <UserDetails>
                      {koreanReviews[index].totalReviews} Reviews |{" "}
                      {koreanReviews[index].totalPhotos} Photos
                    </UserDetails>
                  </UserInfo>
                </Photo>
                <ReviewText>{koreanReviews[index].reviewText}</ReviewText>
                <PhotoReviewBox>
                  {koreanReviews[index].reviewPhotos.map((photo) => (
                    <PhotoReview key={photo} src={photo} alt="리뷰사진" />
                  ))}
                </PhotoReviewBox>
              </ReviewBox>
            )}

            {/* 비한국 리뷰 */}
            {otherReviews[index] && (
              <ReviewBox>
                <Photo>
                  <Profilepic
                    src={otherReviews[index].profileImage}
                    alt="유저사진"
                  />
                  <UserInfo>
                    <NickName>
                      {otherReviews[index].flag} {otherReviews[index].nickname}
                    </NickName>
                    <RatingInfo>
                      ⭐ {otherReviews[index].rating}{" "}
                      <TimeSpan>{otherReviews[index].reviewTime}</TimeSpan>
                    </RatingInfo>
                    <UserDetails>
                      {otherReviews[index].totalReviews} Reviews |{" "}
                      {otherReviews[index].totalPhotos} Photos
                    </UserDetails>
                  </UserInfo>
                </Photo>
                <ReviewText>{otherReviews[index].reviewText}</ReviewText>
                <PhotoReviewBox>
                  {otherReviews[index].reviewPhotos.map((photo) => (
                    <PhotoReview key={photo} src={photo} alt="리뷰사진" />
                  ))}
                </PhotoReviewBox>
              </ReviewBox>
            )}
          </React.Fragment>
        ))}
      </ReviewContainer>
    </>
  );
};

const InfoBox = styled.div`
  width: 50vw;
  height: 20vh;
  margin: 50px 0 40px 165px;
  background-color: #f8f8f8;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const ResName = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 20%;
  margin-top: 20px;
  font-color: black;
  font-weight: 500;
  font-size: 27px;
  margin-left: 0px;
  margin-bottom: 20px;
`;

const WriteReviewBtn = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  margin-left: 60px;
`;

const RatingValue = styled.span`
  margin-right: 15px;
`;

const Ratings = styled.span`
  display: flex;
  margin-top: 15px;
  margin-left: 60px;
`;

const ReviewBox = styled.div`
  width: 40vw;
  height: 23vw;
  margin-top: 30px;
  margin-left: 100px;
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Profilepic = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
`;

const PhotoReview = styled.img`
  display: flex;
  width: 9vw;
  height: 9vw;
  margin-top: 45px;
  margin-left: 20px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
`;

const NickName = styled.div`
  display: flex;
  font-weight: bold;
`;

const RatingInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TimeSpan = styled.span`
  margin-left: 10px;
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  margin-top: 20px;
  margin-left: 0px;
`;

const UserDetails = styled.div`
  font-size: 0.8em;
  color: grey;
`;

const ReviewText = styled.p`
  background-color: #f8f8f8;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const PhotoReviewBox = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Photo = styled.div`
  display: flex;
  flex-direction: row;
`;
export default Review;
