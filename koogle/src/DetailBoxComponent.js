import styled from "styled-components";
import React from "react";

const DetailBoxComponent = () => {
  return (
    <DetailBox>
      <Image
        src="https://s3-alpha-sig.figma.com/img/a72c/dac3/ddfcf8d4229117810ff655409549758b?Expires=1692576000&Signature=Kgf74zJoD~RhGznP9yXCisVhc7RLtqbCL1JmwTHM4meDF~mEmQv85iuh98yAOPBbvnffPdsLQrmOoaM6H5hgukz7ok26iXnO2kSo7-puMbh0MiGd4XBpqOxm7ZlJgLHbLcWeTWLHujxJYWooLUcDOEbZis5tB5HhyHbW8FvUo7NZfTvZFCcr-01N5BWt-HKCGXWZ2d25ZaOS2wPgjRFK1KS6v8f0q3T9m~eWgyHkgfpDKz8KGXFwURqEwQzFLvy7W7V8IJk6uzosYljzvhQj4mAxu9gW65d~kuQqzI-QSMPwwTYPbpdQVFBIiqKP--3luP5-bPpD7MyFAn09sje0Ug__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="Detail"
      />
      <Time dateTime="2023-08-07">August 7, 2023</Time>
    </DetailBox>
  );
};

export const DetailBox = styled.div`
  width: 1020px;
  height: 450px;
`;

export const Image = styled.img`
  width: 36%;
  height: auto;
`;

export const Time = styled.time`
  color: #333;
  font-size: 16px;
`;

export default DetailBoxComponent;
