import styled from "styled-components";
import SearchImg from "../assets/search.png";

const Filter = () => {
  return (
    <NavBigDiv>
      <DetailNavDiv>거리순</DetailNavDiv>

      <DetailNavDiv>평점순</DetailNavDiv>

      <DetailNavDiv>리뷰순</DetailNavDiv>

      <DetailNavDiv>방문순</DetailNavDiv>

      <NavSearchDiv>
        <NavTextDiv>search</NavTextDiv>
        <NavImgDiv>
          <img src={SearchImg}></img>
        </NavImgDiv>
        
      </NavSearchDiv>
      <HorizonLine></HorizonLine>
    </NavBigDiv>
  );
};


const HorizonLine = () => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "2px solid #D9D9D9",
        lineHeight: "70px",
      }}
    >
      <span style={{ background: "#fff", padding: "0 10px" }}></span>
    </div>
  );
};


export default Filter;

export const NavBigDiv = styled.div`
  width: 1680px;
  height: 55px;

  position: relative;
  margin-left: 120px;
  margin-right: 120px;
  
  
`;

export const DetailNavDiv = styled.div`
  margin-right: 40px;
  width: 200px;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  background-color: #fff6e9;
  box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.2);
  border-radius: 20px;
`;

const SmallDetailDiv = styled.div`
  float: left;
  text-align: center;
  line-height: 48px;
  font-size: 24px;
`;

export const NavSearchDiv = styled.div`
  position: absolute;
  width: 400px;
  height: 40px;
  margin-left: 1250px;
  margin-right: 60px;
  font-size: 20px;
  background-color: white;
  border-radius: 40px;
  text-align: left;
  top: 15%;
  display: flex;
  justify-content: flex-start;
  box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.2);
`;

const NavTextDiv = styled.div`
  margin-left: 40px;
  margin-right: auto;
  line-height: 35px;
`;
const NavImgDiv = styled.div`
  margin-right: 30px;
  margin-left: 100px;
  margin-top: 3px;
`;
