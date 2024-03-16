import React, { useEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

const CarouselComp = styled.div`
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
  transition: all 0.25s;
}

.text-overlay {
  display: flex;
  flex-direction: column;
  align-items: start;
}

.cat-container .text-overlay {
  position: absolute;
  top: -82px;
  left: -75px;
  transform: translate(50%, 50%);
  font-family: "Bebas Neue", cursive;
  font-size: 25px;
  opacity: 0;
  color: #fafafa;
  margin: 0;
  transition: all 0.25s;
}

.cat-container:hover {
  .text-overlay {
    opacity: 1;
  }
  .cat-img {
    filter: blur(3px) brightness(0.2);
  }
}
}
`;

export function CarouselProduct(props) {
  const navigate = useNavigate();

  function HandleClick(e) {
    e.preventDefault();
    const attribute = e.target.getAttribute("productName");
    const attModified = attribute.toLowerCase().replaceAll(" ", "-");

    navigate("/product/" + attModified);
  }

  return (
    <CarouselComp>
      <div className="cat-container">
        <img
          className="cat-img"
          src={props.pic}
          alt={props.title.toLowerCase().replaceAll(" ", "-")}
        />
        <div className="text-overlay">
          <span>{props.title}</span>
          <span>${props.price}</span>
        </div>
      </div>
    </CarouselComp>
  );
}
