import React from "react";
import styled from "styled-components";

const Img = props => {
  const { src } = props;
  return <StyledImg img={src} />;
};
const StyledImg = styled.div`
  width: 100%;
  height: 18rem;
  background: url(${props => props.img}) center/cover no-repeat;
`;

export default Img;
