import styled from "styled-components";
import SearchImg from "../assets/search.png";
import Navigators from "./Navigate";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Review from './Review';

const Filter = ({ showLine = true }) => {
    const [search, setSearch] = useState("");
    const onChange = (e) => {
      setSearch(e.target.value);
    };
  const SearchBox = {
    border: "none",
    outline: "none",
  };

  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/search");
  };

  return (
    <NavBigDiv>
      {showLine ? (
        <>
          <DetailNavDiv>Distance</DetailNavDiv>

          <DetailNavDiv>Rating</DetailNavDiv>

          <DetailNavDiv>By Review</DetailNavDiv>

          <DetailNavDiv>Today's Popular</DetailNavDiv>
        </>
      ) : (
        <>
          <DetailNavDiv>By Country</DetailNavDiv>

          <DetailNavDiv>Most Recent</DetailNavDiv>

          <DetailNavDiv>Highest Rated First</DetailNavDiv>

          <DetailNavDiv>Lowest Rated First</DetailNavDiv>
        </>
      )}

      {showLine && (
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
      )}
      {showLine && <HorizonLine />}
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
  font-size: 18px;
  background-color: #ffeccf;

  border-radius: 20px;
  cursor: default;
  font-weight: 500;
`;

const SmallDetailDiv = styled.div`
  float: left;
  text-align: center;
  line-height: 48px;
  font-size: 16px;
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
  box-shadow: 4px 4px 3px rgb(0, 0, 0, 0.2);
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
