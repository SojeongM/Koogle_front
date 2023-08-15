import styled from "styled-components";
import SearchImg from "../assets/search.png"
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigators = () => {

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const SearchBox={
    border: "none",
    outline: "none"
  }

  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/search");
  };

  return (
    <NavBigDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 200,
            behavior: "smooth",
          });
        }}
      >
        korean
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 590,
            behavior: "smooth",
          });
        }}
      >
        western
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 980,
            behavior: "smooth",
          });
        }}
      >
        japanese
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 1370,
            behavior: "smooth",
          });
        }}
      >
        chinese
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 1760,
            behavior: "smooth",
          });
        }}
      >
        cafe
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv
        onClick={() => {
          window.scrollTo({
            top: 2150,
            behavior: "smooth",
          });
        }}
      >
        others
      </DetailNavDiv>
      <NavSearchDiv>
        <NavTextDiv>
          <input
            style={SearchBox}
            type="text"
            value={search}
            placeholder="Search"
            onChange={onChange}
          />
        </NavTextDiv>
        <NavImgDiv>
          <FontAwesomeIcon icon={faSearch} onClick={goSearch} />
        </NavImgDiv>
      </NavSearchDiv>
    </NavBigDiv>
  );
};

export default Navigators;



export const NavBigDiv = styled.div`
  width: 1680px;
  height: 45px;
  cursor: default;
  position: relative;
  margin-left: 120px;
  margin-right: 120px;
  background-color: #fff6e9;
  box-shadow: 5px 5px 3px rgb(0, 0, 0, 0.2);
`;

export const DetailNavDiv = styled.div`
  
  margin: 0 60px;
  float: left;
  text-align: center;
  line-height: 43px;
  font-size: 20px;
`;

const SmallDetailDiv = styled.div`

  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
`;


export const NavSearchDiv = styled.div`
  position: absolute;
  width: 400px;
  height: 30px;
  margin-left: 1250px;
  margin-right: 60px;
  font-size: 18px;
  background-color: white;
  border-radius: 40px;
  text-align: left;
  top: 10%;
  display: flex;
  justify-content: flex-start;
  border: 2px solid #bcbcbc;
`;

const NavTextDiv = styled.div`
  margin-left: 40px;
  margin-right: auto;
  line-height: 28px;
`;
const NavImgDiv = styled.div`
    margin-right: 30px;
    margin-left: 100px;
    margin-top: 3px;
`




