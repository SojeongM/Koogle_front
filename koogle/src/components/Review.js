import styled from "styled-components";
import Filter from "./Filter";
import testimg from "../assets/testimg.jpg";
import profileimg from "../assets/profile.svg";
import React from "react";
import { useEffect, useState } from "react";
import { axios } from "react";

import { text } from "@fortawesome/fontawesome-svg-core";
import { useRecoilValue } from "recoil";
import { selectState } from "./atoms/select";
import { useLocation } from "react-router-dom";
import r_1 from "../assets/r_1.jpg"
import r_2 from "../assets/r_2.jpg"
import r_3 from "../assets/r_3.jpg";
import r_4 from "../assets/r_4.jpg";
import r_5 from "../assets/r_5.jpg";
import r_6 from "../assets/r_6.jpg";
import r_7 from "../assets/r_7.jpg";
import r_8 from "../assets/r_8.jpg";
import r_9 from "../assets/r_9.jpg";
import r_10 from "../assets/r_10.jpg";


const reviewDetails = [
  { icon: "🖼️", text: "Nice Interrior" },
  { icon: "🍕", text: "Delicious Food" },
  { icon: "🍙", text: "It's good for solo dining" },
  { icon: "👨‍🍳", text: "They have a special menu" },
  { icon: "☀️", text: "Nice View" },
  { icon: "🍷", text: "For Special Day" },
  { icon: "🥰", text: "Friendly Service" },
  { icon: "✨", text: "The Store is Spacious" },
];

const selectedReviewDetails = [
  { icon: "🖼️", text: "Nice Interrior" },
  { icon: "🍕", text: "Delicious Food" },
  { icon: "☀️", text: "Nice View" },
  { icon: "😋", text: "음식이 맛있어요" },
  { icon: "💖", text: "친절해요" },
];

const randomData = [
  { icon: "🍕", text: "Delicious Food" },

  { icon: "🖼️", text: "Nice Interrior" },
  { icon: "☀️", text: "Nice View" },
  { icon: "🍷", text: "For Special Day" },
  { icon: "🥰", text: "Friendly Service" },
];

const countryFlags = {
  USA: "🇺🇸",
  UK: "🇬🇧",
  KOR: "🇰🇷",
  JPN: "🇯🇵",
  CHN: "🇨🇳",
  GER: "🇩🇪",
  FRA: "🇫🇷",
  VNM: "🇻🇳",
  THA: "🇹🇭",
};

/* 최대 5개까지 랜덤 데이터 고르는 함수  */
function getRandomLength(max) {
  return Math.floor(Math.random() * 5) + 1;
}
function getRandomDetails(details) {
  const randomLength = getRandomLength(details.length);
  const shuffledDetails = [...details].sort(() => 0.5 - Math.random());
  return shuffledDetails.slice(0, randomLength);
}

const datas = [
  {
    restaurants_info: {
      restaurant_name: "Hakatanaka",
      address: "2nd floor (Seogyo-dong), 50, Wausan-ro 23-gil, Mapo-gu, Seoul",
      total_review: 12,
      avg_star: 4.2,
    },
    country_reviews: [
      {
        username: "Anonymus",
        star: 4,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "이번 주말에 방문했던 식당은 정말 기대 이상이었어요. 메뉴 하나하나 세심하게 준비된 느낌이 들었고, 직원들의 친절한 서비스도 인상적이었습니다. 특히 주문한 음식의 맛이 기억에 남아 다음에도 꼭 방문하고 싶네요. 코로나19로 힘든 시기지만, 이런 좋은 식당 덕분에 힐링할 수 있었어요. 다들 꼭 한 번 방문해보세요!",
        country: "KOR",

        created_at: "1 dyas, 21hours, 19minutes ago",
        reviewPhotos: [r_1, r_3],
      },
      {
        username: "WanderlustWill",
        star: 5,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "The ambiance of the restaurant was just impeccable. Every dish we ordered was presented beautifully and tasted even better. Staff were attentive without being intrusive. Will definitely return.",
        country: "USA",

        created_at: "1 dyas, 21hours, 19minutes ago",
        reviewPhotos: [r_2, r_4],
      },
      {
        username: "EpicureEmma",
        star: 5,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "From the moment we walked in, we felt welcomed. The culinary journey here is simply sublime, with each dish telling its own story. An experience worth every penny.",
        country: "USA",

        created_at: "0 dyas, 22hours, 53minutes ago",
        reviewPhotos: [r_5, r_6],
      },
      {
        username: "Hunter_Chris",
        star: 5,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "Never have I been so impressed with the fusion of flavors and presentation. Each bite was a delightful surprise. Highly recommend the chef's special!",
        country: "USA",

        created_at: "0 dyas, 22hours, 52minutes ago",
        reviewPhotos: [r_7],
      },
      {
        username: "GourmetGrace",
        star: 4,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "The music, lighting, and decor created a perfect setting for our anniversary dinner. Coupled with delicious food, it made our night memorable.",
        country: "USA",

        created_at: "0 dyas, 22hours, 52minutes ago",
        reviewPhotos: [r_9],
      },
      {
        username: "Yukio",
        star: 4,
        total_review_count: 1,
        total_image_count: 1,
        content:
          "A hidden gem in the city! The dishes were crafted with care and expertise. The combination of traditional recipes with a modern twist was phenomenal. Can't wait to visit again.",
        country: "JPN",
        created_at: "0 days, 22hours, 51minutes ago",
        reviewPhotos: [r_8, r_10],
      },
    ],
    country_list: ["UK", "USA"],
  },
];

const koreanReviews = datas
  .flatMap((data) => data.country_reviews)
  .filter((review) => review.country === "KOR");
const otherReviews = datas
  .flatMap((data) => data.country_reviews)
  .filter((review) => review.country !== "KOR");

console.log(koreanReviews);
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
  const select = useRecoilValue(selectState);
  const location = useLocation();

  const resName = location.state.resName;
  const address = location.state.address;

  if (showPopup) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  // useEffect(() => {
  //   if (select == "") {
  //     const data = axios.get(
  //       `${""}/api/restaurants/reviews/${"레스토랑이름"}/review_detail/${""}/`
  //     );
  //   }
  // }, [select]);

  return (
    <>
      <div>
        <HorizonLine />
        <InfoBox>
          <ResName>
            🍴{datas[0].restaurants_info.restaurant_name}
            <WriteReviewBtn onClick={() => setShowPopup(true)}>
              ✍️Write a Review
            </WriteReviewBtn>
          </ResName>

          <AddressInfo>📍{datas[0].restaurants_info.address}</AddressInfo>
          <Ratings>
            🌟&nbsp;
            <RatingValue>{datas[0].restaurants_info.avg_star}</RatingValue>
            {datas[0].restaurants_info.total_review}&nbsp; reviews
          </Ratings>
        </InfoBox>
      </div>

      <Filter showLine={false} />

      <Blank />
      <HorizonLine />
      <ReviewContainer>
        {Array.from({
          length: Math.max(koreanReviews.length, otherReviews.length),
        }).map((_, index) => (
          <React.Fragment key={index}>
            {/* 한국 리뷰 */}
            {koreanReviews[index] && (
              <ReviewBox
                style={{
                  gridColumn: "1",
                }}
              >
                <Photo>
                  <Profilepic src={profileimg} alt="유저사진" />
                  <UserInfo>
                    <NickName>
                      {countryFlags[koreanReviews[index].country] ||
                        koreanReviews[index].country}{" "}
                      {koreanReviews[index].username}
                    </NickName>
                    <RatingInfo>
                      <TimeSpan>{koreanReviews[index].created_at}</TimeSpan>
                    </RatingInfo>
                    <div>
                      {getRandomDetails(reviewDetails).map((detail) => (
                        <DetailButton disableHover={true} key={detail.text}>
                          {detail.icon} {detail.text}
                        </DetailButton>
                      ))}
                    </div>
                  </UserInfo>
                </Photo>
                <ReviewText>{koreanReviews[index].content}</ReviewText>
                <PhotoReviewBox>
                  {(koreanReviews[index]?.reviewPhotos || []).map((photo) => (
                    <PhotoReview key={photo} src={photo} alt="리뷰사진" />
                  ))}
                </PhotoReviewBox>
              </ReviewBox>
            )}

            {/* 비한국 리뷰 */}
            {otherReviews[index] && (
              <ReviewBox
                style={{
                  gridColumn: "2",
                }}
              >
                <Photo>
                  <Profilepic src={profileimg} alt="유저사진" />
                  <UserInfo>
                    <NickName>
                      {countryFlags[otherReviews[index].country] ||
                        otherReviews[index].country}{" "}
                      {otherReviews[index].username}
                    </NickName>
                    <RatingInfo>
                      ⭐ {otherReviews[index].star}{" "}
                      <TimeSpan>{otherReviews[index].created_at}</TimeSpan>
                    </RatingInfo>
                    <div>
                      {getRandomDetails(reviewDetails).map((detail) => (
                        <DetailButton disableHover={true} key={detail.text}>
                          {detail.icon} {detail.text}
                        </DetailButton>
                      ))}
                    </div>
                  </UserInfo>
                </Photo>
                <ReviewText>{otherReviews[index].content}</ReviewText>
                <PhotoReviewBox>
                  {(otherReviews[index]?.reviewPhotos || []).map((photo) => (
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
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0px 20px;
  line-height: 1.4;
`;

const PhotoReviewBox = styled.div`
  display: flex;
  margin-top: 5px;
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
  text-align: center;
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
  margin-right: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e6e6e6;
  }
`;
const DetailButton = styled.button`
  background-color: ${(props) => (props.selected ? "#faddac" : "#f8f8f8")};
  margin-top: 10px;
  margin-right: 10px;
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
       margin: 0px; 
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
