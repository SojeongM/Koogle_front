import styled from "styled-components";
import SearchImg from "../assets/search.png"
import { useState } from "react";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navigators = ({nav=true}) => {

  const [search, setSearch] = useState("");
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  const SearchBox={
    border: "none",
    outline: "none"

  }

  function NavTrue (point) {
     window.scrollTo({
       top: point,
       behavior: "smooth",
     });
  }

  const navigate = useNavigate();
  const goSearch = () => {
    navigate("/");
  };

  return (
    <NavBigDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(200) : goSearch())}>
        korean
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(590) : goSearch())}>
        western
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(980) : goSearch())}>
        japanese
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(1370) : goSearch())}>
        chinese
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(1760) : goSearch())}>
        cafe
      </DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv onClick={() => (nav ? NavTrue(2150) : goSearch())}>
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
          <FontAwesomeIcon
            icon={faSearch}
            style={{ color: "#ffa42e" }}
            onClick={goSearch}
          />
        </NavImgDiv>
      </NavSearchDiv>
    </NavBigDiv>
  );
};

export default Navigators;



export const NavBigDiv = styled.div`
  font-family: "Noto Sans", sans-serif;
  width: 1680px;
  height: 45px;
  cursor: default;
  position: relative;
  margin-left: 120px;
  margin-right: 120px;
  border-bottom: 2px solid #ffa42e;
`;

export const DetailNavDiv = styled.div`
  margin: 0 60px;
  float: left;
  text-align: center;
  line-height: 43px;
  font-size: 18px;
  transition: all 0.2s linear;
  &:hover {
    font-size:20px;
  }
`;

const SmallDetailDiv = styled.div`
  float: left;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #ffa42e;
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
  border: 2px solid #ffa42e;
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




