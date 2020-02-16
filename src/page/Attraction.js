import React from "react";
import { useParams } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { findData } from "../util/dataHandle";
import styled from "styled-components";
import defaultTP from "../image/defaultTP.jpg";
import ImgGallery from "../component/ImgGallery";

const Attraction = props => {
  const { id } = useParams();
  const { travelData } = props;

  let page, image;
  if (travelData.length) {
    const data = findData(id, travelData);
    if (!data) page = <Redirect to="/" />;
    else {
      const { name, introduction, address, tel, ticket, url, images } = data;

      image = images.length > 0 ? images[0].src : defaultTP;
      page = (
        <>
          <div className="attr-headImage" />
          <div className="attr-textGroup">
            <p className="attr-name">{name}</p>
            <p
              dangerouslySetInnerHTML={{ __html: introduction }}
              className="attr-intro"
            />
            {images.length > 0 ? <ImgGallery images={images} /> : null}
            {address && (
              <label htmlFor="address" className="attr-posLabel">
                地址：
              </label>
            )}
            <p className="attr-address" id="address">
              {address}
            </p>

            {tel && (
              <label htmlFor="tel" className="attr-posLabel">
                聯絡方式：
              </label>
            )}
            <p className="attr-tel" id="tel">
              {tel}
            </p>
            {ticket && (
              <label htmlFor="ticket" className="attr-posLabel">
                票價：
              </label>
            )}
            <p className="attr-ticket" id="ticket">
              {ticket}
            </p>
            {url && (
              <label htmlFor="address" className="attr-posLabel">
                更多資訊：
              </label>
            )}
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="attr-infoLink"
            >
              {url}
            </a>
            <Link to="/">
              <button className="attr-button">返回上頁</button>
            </Link>
          </div>
        </>
      );
    }
  } else {
    page = (
      <div className="loader-box">
        <div className="loader-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return <StyledAttr img={image}>{page}</StyledAttr>;
};

const StyledAttr = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-secondary-dark);
  background-color: var(--color-primary-light);

  .attr- {
    &headImage {
      margin-top: 8rem;
      width: 70%;
      height: 60vh;
      background: url(${props => props.img}) center/cover no-repeat;
    }
    &textGroup {
      font-size: 3.4rem;
      padding: 5rem 7rem 5rem 7rem;
      margin-bottom: 10rem;
      width: 70%;
      background-color: white;
      letter-spacing: 1px;
    }
    &posLabel {
      font-size: 2.5rem;
      font-weight: 500;
    }
    &name {
      letter-spacing: 2px;
      font-size: 3.5rem;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    &intro {
      padding: 0 1rem;
      margin-bottom: 1.5rem;
    }
    &address {
      padding: 0 1rem;
      margin-bottom: 1.5rem;
    }
    &tel {
      padding: 0 1rem;
      margin-bottom: 1.5rem;
    }
    &ticket {
      padding: 0 1rem;
      margin-bottom: 1.5rem;
    }

    &infoLink {
      letter-spacing: 0px;
      display: block;
      text-decoration: none;
      padding: 0 1rem;
      color: rgb(35, 137, 218);
      margin-bottom: 4rem;
    }

    &button {
      background-color: var(--color-primary-dark);
      font-size: 2rem;
      letter-spacing: 2px;
      font-weight: 500;
      padding: 1.5rem;
      border-radius: 2rem;
      border: none;
      color: white;
      cursor: pointer;
      outline: none;
      margin-left: 80%;
      transition: all 0.12s ease-in;
      &:hover {
        color: var(--color-secondary);
        background-color: var(--color-primary);
      }
    }
  }
`;

export default Attraction;
