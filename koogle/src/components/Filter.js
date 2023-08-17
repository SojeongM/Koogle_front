import styled from "styled-components";
import SearchImg from "../assets/search.png";
import Navigators from "./Navigate";
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Review from "./Review";

const item1 = [
  {
    name: "Distance",
  },
  {
    name: "Ranking",
  },
  {
    name: "By Review",
  },
  {
    name: "Today's Popular",
  },
];

const item2 = [
  {
    name: "By Country",
  },
  {
    name: "Most Recent",
  },
  {
    name: "Highest Rated First",
  },
  {
    name: "Lowest Rated First",
  },
];
const Select = () => {
  const [select, setSelect] = useState("");
  const handleClick = (name) => {
    setSelect(name);
    console.log(name);
  };
  return (
    <>
      {item1.map((item) => (
        <DetailNavDiv
          key={item.name}
          onClick={() => handleClick(item.name)} // type 받아 set함수에 넣어준다
          isClicked={select === item.name}
        >
          {item.name}
        </DetailNavDiv>
      ))}
    </>
  );
};

const Select2 = () => {
  const [select, setSelect] = useState("");
  const handleClick = (name) => {
    setSelect(name);
    console.log(name);
  };
  return (
    <>
      {item2.map((item) => (
        <DetailNavDiv
          key={item.name}
          onClick={() => handleClick(item.name)} // type 받아 set함수에 넣어준다
          isClicked={select === item.name}
        >
          {item.name}
        </DetailNavDiv>
      ))}
    </>
  );
};

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
          <Select />
        </>
      ) : (
        <>
          <Select2 />
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
            <FontAwesomeIcon
              icon={faSearch}
              onClick={goSearch}
              style={{ color: "#ffa42e" }}
            />
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
        borderBottom: "2px solid #ffa42e",
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
  font-family: "Noto Sans", sans-serif;
`;

export const DetailNavDiv = styled.div`
  margin-right: 40px;

  width: 200px;
  height: 40px;
  float: left;
  text-align: center;
  line-height: 35px;
  font-size: 18px;
  border: 2px solid #ffa42e;

  border-radius: 20px;
  cursor: default;
  font-weight: 500;
  ${({ isClicked }) =>
    isClicked
      ? `background-color: #ffa42e;
    color: white;`
      : ``}
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
  border: 2px solid #ffa42e;
`;

const NavTextDiv = styled.div`
  margin-left: 40px;
  margin-right: auto;
  line-height: 35px;
  font-size: 16px;
`;
const NavImgDiv = styled.div`
  margin-right: 30px;
  margin-left: 100px;
  margin-top: 6px;
`;
