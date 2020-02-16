import React from "react";
import styled from "styled-components";
import headImg from "../image/taipeicity.jpg";
import Card from "../component/Card";
import { Link } from "react-router-dom";

const Home = props => {
  const data = props.travelData;

  let page = (
    <div className="loader-box">
      <div className="loader-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );

  if (data.length > 0) {
    let dataArr = data.map(item => {
      const { id, name, address, images } = item;
      return (
        <Link key={id} to={`/${id}`} className="card-link">
          <Card name={name} address={address} images={images[0]} />
        </Link>
      );
    });
    page = <section className="home-cardGroup">{dataArr}</section>;
  }

  return (
    <StyledHome img={headImg}>
      <header className="home-header">台北市旅遊景點</header>
      {page}
    </StyledHome>
  );
};

const StyledHome = styled.main`
  .home- {
    &header {
      display: flex;
      align-items: flex-end;
      padding: 0 0 8rem 15rem;
      font-size: 5rem;
      letter-spacing: 0.5rem;
      color: var(--color-primary);
      width: 100%;
      height: 60rem;
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2),
          rgba(0, 0, 0, 0.7) 75%,
          rgba(0, 0, 0, 1)
        ),
        url(${props => props.img});
      background-size: cover;
      background-position: center;
    }
    &cardGroup {
      padding: 11rem 3rem;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
      grid-column-gap: 2rem;
      grid-row-gap: 9rem;
      justify-items: center;
      background-color: var(--color-primary-light);
    }
  }
  .card-link {
    text-decoration: none;
  }
`;

export default Home;
