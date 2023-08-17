import styled from "styled-components";
import Filter from "./Filter";
import testimg from "../assets/testimg.jpg";
import profileimg from "../assets/profile.svg";
import React from "react";
import { useState } from "react";

import { text } from "@fortawesome/fontawesome-svg-core";
const reviewDetails = [
  { icon: "🖼️", text: "Nice Interrior" },
  { icon: "🍕", text: "Delicious Food" },
  { icon: "☀️", text: "Nice View" },
  { icon: "🍷", text: "For Special Day" },
  { icon: "🥰", text: "Friendly Service" },
  { icon: "😋", text: "음식이 맛있어요" },
  { icon: "💖", text: "친절해요" },
  { icon: "✨", text: "매장이 넓어요" },
  { icon: "😋", text: "특별한 메뉴가 있어요" },
];
const selectedReviewDetails = [
  { icon: "🖼️", text: "Nice Interrior" },
  { icon: "🍕", text: "Delicious Food" },
  { icon: "☀️", text: "Nice View" },
];
const reviews = [
  {
    profileImage: profileimg,
    nickname: "Anonymus",
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
    nickname: "Anonymus",
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

const ReviewPopup = ({ onClose }) => {
  const [reviewContent, setReviewContent] = useState("");
  const [selectedDetails, setSelectedDetails] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleDetailClick = (text) => {
    if (selectedDetails.includes(text)) {
      setSelectedDetails((prev) => prev.filter((item) => item !== text));
    } else {
      if (selectedDetails.length < 5) {
        setSelectedDetails((prev) => [...prev, text]);
      }
    }
  };

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const alreadySelectedCount = selectedImages.length;

    const newFileURLs = selectedFiles.map((file) => URL.createObjectURL(file));
    const totalImages = alreadySelectedCount + newFileURLs.length;

    if (totalImages > 3) {
      alert("You can upload up to 3 photos.");
      return;
    }
    setSelectedImages((prevImages) => [...prevImages, ...newFileURLs]);
  };

  const removeImage = (index) => {
    const newSelectedImages = [...selectedImages];
    newSelectedImages.splice(index, 1);
    setSelectedImages(newSelectedImages);
  };

  const [selectedStars, setSelectedStars] = useState(0);

  return (
    <PopupOverlay>
      <PopupContent>
        <h2
          style={{ fontSize: "30px", fontWeight: "700", marginBottom: "20px" }}
        >
          Post Your Review ✍️
        </h2>

        <StarBox>
          <h3
            style={{
              fontSize: "20px",
              marginRight: "12px",
            }}
          >
            How was your food?
          </h3>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <Star
                key={index}
                selected={index < selectedStars}
                onClick={() => setSelectedStars(index + 1)}
              >
                ★
              </Star>
            ))}
        </StarBox>
        <div>
          {reviewDetails.map((detail) => (
            <DetailButton
              disableHover={false}
              key={detail.text}
              selected={selectedDetails.includes(detail.text)}
              onClick={() => handleDetailClick(detail.text)}
            >
              {detail.icon} {detail.text}
            </DetailButton>
          ))}
        </div>

        <StyledTextarea
          placeholder="Write a Review :)"
          value={reviewContent}
          onChange={(e) => setReviewContent(e.target.value)}
        ></StyledTextarea>

        <div></div>
        <ImageUploadBtn as="label" htmlFor="imageUpload">
          📸 Add Photos
        </ImageUploadBtn>
        <input
          type="file"
          id="imageUpload"
          style={{ display: "none" }}
          multiple
          onChange={handleImageChange}
        />
        <ImageUploadContainer>
          {selectedImages.map((imgURL, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                display: "inline-block",
                margin: "5px",
              }}
            >
              <img
                src={imgURL}
                alt="선택한 이미지"
                style={{ width: "100px", height: "100px" }}
              />
              <span
                style={{
                  position: "absolute",
                  right: "0",
                  top: "0",
                  cursor: "pointer",
                }}
                onClick={() => removeImage(index)}
              >
                x
              </span>
            </div>
          ))}
        </ImageUploadContainer>

        <ButtonContainer>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <SubmitButton disabled={reviewContent.length < 1}>
            Submit
          </SubmitButton>
        </ButtonContainer>
      </PopupContent>
    </PopupOverlay>
  );
};

const Review = () => {
  const [showPopup, setShowPopup] = React.useState(false);
  if (showPopup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <>
      <div>
        <HorizonLine />
        <InfoBox>
          <ResName>
            🍴Dugahun Restaurant
            <WriteReviewBtn onClick={() => setShowPopup(true)}>
              ✍️Write a Review
            </WriteReviewBtn>
          </ResName>

          <AddressInfo>📍Seoul, Jongro- gu, Samcheong-ro 14</AddressInfo>
          <Ratings>
            🌟 <RatingValue>4.52</RatingValue>
            290 Reviews
          </Ratings>
        </InfoBox>
      </div>
      <Filter showLine={false} />
      <Blank />
      <HorizonLine />
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
                      <TimeSpan>{koreanReviews[index].reviewTime}</TimeSpan>
                    </RatingInfo>
                    <div>
                      {selectedReviewDetails.map((detail) => (
                        <DetailButton disableHover={true} key={detail.text}>
                          {detail.icon} {detail.text}
                        </DetailButton>
                      ))}
                    </div>
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
                    <div>
                      {selectedReviewDetails.map((detail) => (
                        <DetailButton disableHover={true} key={detail.text}>
                          {detail.icon} {detail.text}
                        </DetailButton>
                      ))}
                    </div>
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
      {showPopup && <ReviewPopup onClose={() => setShowPopup(false)} />}
    </>
  );
};

const InfoBox = styled.div`
  width: 50vw;
  height: 20vh;
  margin: 40px 0 40px 120px;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
`;

const ResName = styled.div`
  display: flex;

  align-items: center;
  height: 20%;
  margin-top: 30px;

  font-color: black;
  font-weight: 500;
  font-size: 25px;
  margin-left: 100px;

  margin-bottom: 20px;
`;

const WriteReviewBtn = styled.button`
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 10px 20px;
  font-size: 20px;
  border-radius: 5px;
  margin-left: 300px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const AddressInfo = styled.div`
  display: flex;
  margin-left: 100px;
  font-size: 20px;
`;

const RatingValue = styled.span`
  margin-right: 15px;
`;

const Ratings = styled.span`
  display: flex;
  margin-top: 15px;
  margin-left: 100px;
  font-size: 20px;
`;

const ReviewBox = styled.div`
  width: 820px;
  height: auto;
  margin-top: 20px;
  margin-right: 40px;
  padding: 20px;
  border: 2px solid #d9d9d9;

  border-radius: 10px;
`;

const Profilepic = styled.img`
  display: flex;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  object-fit: cover;
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
  object-fit: cover;
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
  font-size: 20px;
  margin-bottom: 5px;
`;

const RatingInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 15px;
`;

const TimeSpan = styled.span`
  margin-left: 10px;
  font-size: 15px;
`;

const ReviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0px;
  margin: 10px 120px;
`;

const ReviewText = styled.p`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 20px;
`;

const PhotoReviewBox = styled.div`
  display: flex;
  margin-top: 10px;
`;
const Photo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Noto Sans", sans-serif;
`;

const PopupContent = styled.div`
  width: 40%;
  height: 70%;
  padding: 25px;
  background: white;
  border-radius: 10px;
  position: relative;
  text-align: center;
`;

const StarBox = styled.div`
  display: flex;
  align-items: center;
  margin-left: 200px;
  margin-bottom: 10px;
  gap: 3px;
`;

const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => (props.selected ? "#FFD700" : "#ddd")};
  transition: color 0.2s;
`;

const StyledTextarea = styled.textarea`
  width: 90%;
  height: 20%;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  font-size: 25px;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  overflow: auto;
`;

const ImageUploadBtn = styled.label`
  display: inline-block;
  width: 50%;
  height: 6.5%;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  padding: 10px 15px;
  font-size: 20px;
  background-color: #e6e6e6;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center; // label 태그에 대한 중앙 정렬을 위해 추가
  &:hover {
    background-color: #d4d4d4;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: flex-end;
  top: 530px;
  left: 780px;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 40px;
  padding: 15px 15px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;

const CancelButton = styled.button`
  position: absolute;
  right: 140px;
  padding: 15px 15px;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px; // 버튼 간의 간격
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const DetailButton = styled.button`
  background-color: ${(props) => (props.selected ? "#faddac" : "#f8f8f8")};
  margin-top: 10px;
  border: 1px solid #ccc;
  padding: 6px 15px;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
  ${(props) =>
    !props.disableHover &&
    `
      &:hover {
        background-color: ${props.selected ? "#d4d4d4" : "#faddac"};
      }
    `}
`;

const Blank = styled.div`
  height: 10px;
`;

const HorizonLine = () => {
  return (
    <div
      style={{
        width: "1680px",
        textAlign: "center",
        borderBottom: "2px solid #ffa42e",
        lineHeight: "70px",
        marginLeft: "120px",
        marginRight: "120px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 0px" }}></span>
    </div>
  );
};

export default Review;
