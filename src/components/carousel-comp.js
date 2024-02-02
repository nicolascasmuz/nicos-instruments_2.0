import React, { useEffect } from "react";

import styled from "styled-components";
import piano from "../resources/Piano-Digital-Kawai-Kdp120.jpg";
import teclado from "../resources/Teclado-musical-Yamaha-PSR-E273.jpg";
import strato from "../resources/fender-stratocaster-special-usa.jpg";
import lesPaul from "../resources/Gibson-Modern-Collection-Les-Paul-Studio.jpg";
import sg from "../resources/gibson-sg-faded-2018.jpg";
import bajo from "../resources/Sterling-By-Music-Man-Stingray.jpg";
import arrowLeft from "../resources/arrow-left.png";
import arrowRight from "../resources/arrow-right.png";

export function CarouselComp() {
  useEffect(() => {
    const carouselEl = document.querySelector(".carousel");
    const firstImgEl = carouselEl.querySelectorAll("img")[0];
    const arrowsEl = document.querySelectorAll(".carousel-wrapper .arrow");

    const interval = setInterval(() => {
      carouselEl.scrollLeft++;
    }, 100);

    let isDragStart = false,
      prevPageX,
      prevScrollLeft;

    let firstImgWidth = firstImgEl.clientWidth + 40;

    arrowsEl.forEach((arrow) => {
      arrow.addEventListener("click", () => {
        clearInterval(interval);
        carouselEl.scrollLeft +=
          arrow.id === "left" ? -firstImgWidth : firstImgWidth;
      });
    });

    function dragStart(e) {
      isDragStart = true;
      prevPageX = e.pageX;
      prevScrollLeft = carouselEl.scrollLeft;
    }

    function dragging(e) {
      if (!isDragStart) return;
      e.preventDefault();
      carouselEl.classList.add("dragging");
      let positionDiff = e.pageX - prevPageX;
      carouselEl.scrollLeft = prevScrollLeft - positionDiff;
    }

    function dragStop() {
      isDragStart = false;
      carouselEl.classList.remove("dragging");
    }

    carouselEl.addEventListener("mousedown", (e) => {
      dragStart(e);
      clearInterval(interval);
    });
    carouselEl.addEventListener("mousemove", dragging);
    carouselEl.addEventListener("mouseup", dragStop);
  }, []);

  const CarouselDiv = styled.div`
    min-width: 300px;
    max-width: 1000px;
    position: relative;
    margin: 0 30px;
  
    .carousel-wrapper .arrow {
      top: 50%;
      height: 46px;
      width: 46px;
      cursor: pointer;
      position: absolute;
      transform: translateY(-50%);
    }
  
    .carousel-wrapper .arrow:first-child {
      left: -23px;
    }
  
    .carousel-wrapper .arrow:last-child {
      right: -23px;
    }
  
    .carousel-wrapper .carousel {
      cursor: pointer;
      overflow: hidden;
      white-space: nowrap;
      scroll-behavior: smooth;
      margin: 0 35px;
    }

    .carousel.dragging {
      cursor: grab;
      scroll-behavior: auto;
    }

    .carousel.dragging img {
      pointer-events: none;
    }
  
    .carousel img {
      height: 340px;
      object-fit: cover;
      width: 100%;
      margin-left: 8px;
    }
  
    @media (min-width: 469px) {
      .carousel img {
        height: 340px;
        object-fit: cover;
        width: calc(100% / 2);
        margin-left: 8px;
      }
    }
  
    @media (min-width: 769px) {
      .carousel img {
        height: 340px;
        object-fit: cover;
        width: calc(100% / 3);
        margin-left: 8px;
      }
    }
  
    .carousel img:first-child {
      margin-left: 0px;
    }
    }
  `;

  return (
    <CarouselDiv>
      <div className="carousel-wrapper">
        <img id="left" className="arrow" src={arrowLeft} alt="arrow-left" />
        <div className="carousel">
          <img src={piano} alt="piano" />
          <img src={teclado} alt="teclado" />
          <img src={strato} alt="strato" />
          <img src={lesPaul} alt="les-paul" />
          <img src={sg} alt="sg" />
          <img src={bajo} alt="bajo" />
        </div>
        <img id="right" className="arrow" src={arrowRight} alt="arrow-right" />
      </div>
    </CarouselDiv>
  );
}
