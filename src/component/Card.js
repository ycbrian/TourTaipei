import React from "react";
import styled from "styled-components";
import defaultTP from "../image/defaultTP.jpg";

const Card = props => {
  const { name, address, images } = props;
  let src;
  if (images) src = images.src;

  return (
    <StyledCard src={src}>
      <div className="card-image" />
      <p className="card-name">{name}</p>
      <p className="card-addr">{address}</p>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 32rem;
  height: 40rem;
  border: 0.15rem solid var(--color-secondary-dark);
  border-radius: 1.5rem;
  overflow: hidden;
  text-align: center;
  color: var(--color-secondary-dark);
  background-color: var(--color-primary);
  transition: all 0.15s ease-in;

  :hover {
    transform: scale(1.07);
  }

  .card- {
    &image {
      width: 100%;
      height: 70%;
      background: url(${props => (props.src ? props.src : defaultTP)})
        center/cover no-repeat;
    }

    &name {
      font-size: 2.1rem;
      margin: 2.5rem 0 1rem 0;
    }

    &addr {
      font-size: 1.5rem;
    }
  }
`;

export default Card;
