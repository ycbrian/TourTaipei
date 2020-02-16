import React from "react";
import styled from "styled-components";
import Img from "./Img";

const ImgGallery = props => {
  const { images } = props;
  const imgArr = images.map((img, ind) => {
    return <Img key={ind} src={img.src} />;
  });
  return <StyledGallery>{imgArr}</StyledGallery>;
};

const StyledGallery = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  margin: 5.5rem 0 4rem 0;
`;

export default ImgGallery;
