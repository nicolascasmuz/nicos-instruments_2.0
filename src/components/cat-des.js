import classicGuitars from "../resources/classic-guitars-cat.png";
import microphones from "../resources/microphones-cat.png";
import keyboards from "../resources/keyboards-cat.png";
import percussion from "../resources/percussion-cat.png";
import styled from "styled-components";

export function FeaturedCategories() {
  const CatContainer = styled.div`
    display: grid;
    gap: 10px;

    @media (min-width: 700px) {
      grid-template-rows: auto auto;
      grid-template-columns: auto auto;
    }

    .cat-container {
      position: relative;
      height: 176px;
      text-align: center;
    }

    @media (min-width: 1000px) {
      .cat-container {
        height: 238px;
      }
    }

    .cat-container .cat-img {
      height: 100%;
      transition: all 0.25s;
    }

    .cat-container .text-overlay {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: "Bebas Neue", cursive;
      font-size: 50px;
      line-height: 40px;
      opacity: 0;
      color: #ac1a22;
      margin: 0;
      transition: all 0.25s;
    }

    @media (min-width: 1000px) {
      .cat-container .text-overlay {
        font-size: 65px;
        line-height: 55px;
      }
    }

    .cat-container:hover {
      .text-overlay {
        opacity: 1;
      }
      .cat-img {
        filter: blur(3px) grayscale(50%);
      }
    }
    }
  `;

  return (
    <CatContainer>
      <div className="cat-container">
        <img className="cat-img" src={classicGuitars} alt="cat-01" />
        <h2 className="text-overlay">Guitarras acusticas</h2>
      </div>
      <div className="cat-container">
        <img className="cat-img" src={microphones} alt="cat-02" />{" "}
        <h2 className="text-overlay">Microfonos</h2>
      </div>
      <div className="cat-container">
        <img className="cat-img" src={keyboards} alt="cat-03" />
        <h2 className="text-overlay">Teclados</h2>
      </div>
      <div className="cat-container">
        <img className="cat-img" src={percussion} alt="cat-04" />
        <h2 className="text-overlay">Percusion</h2>
      </div>
    </CatContainer>
  );
}
