import styled from "styled-components";

const Navigators = () => {
  return (
    <NavBigDiv>
      <DetailNavDiv>korean</DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv>western</DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv>japanese</DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv>chinese</DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv>cafe</DetailNavDiv>
      <SmallDetailDiv>|</SmallDetailDiv>
      <DetailNavDiv>others</DetailNavDiv>
      <NavSearchDiv>
              <NavTextDiv>search</NavTextDiv>
              <NavImgDiv><img src="search.png"></img> </NavImgDiv>
      </NavSearchDiv>
    </NavBigDiv>
  );
};

export default Navigators;

export const NavBigDiv = styled.div`
  width: 1680px;
  height: 55px;

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
  line-height: 48px;
  font-size: 24px;

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
  height: 35px;
  margin-left: 1250px;
  margin-right: 60px;
  font-size: 24px;
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
`




