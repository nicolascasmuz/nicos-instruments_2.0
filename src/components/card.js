import React from "react";
import styled from "styled-components";
import imgPrueba from "../resources/gibson-sg-faded-2018.jpg";

const CardComp = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  gap: 0px;
  background-color: #f0efda;
  border: solid 3px #ac1a22;
  border-radius: 10px;
  width: 320px;
  height: 200px;
  padding-top: 10px;
  overflow: hidden;

  @media (min-width: 769px) {
    gap: 12px;
    grid-template-columns: none;
    grid-template-rows: none;
    width: 250px;
    height: auto;
    padding: 10px 0px;
  }

  .card-title {
    grid-column: 1 / span 2;
    line-height: 20px;
    color: #ac1a22;
    font-family: "Bungee", cursive;
    margin: 0px 10px 10px 10px;
    text-align: left;
  }

  @media (min-width: 769px) {
    .card-title {
      grid-column: auto;
      margin: 0px 10px 0 10px;
    }
  }

  .card-img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .card-price-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 25px;
  }

  @media (min-width: 769px) {
    .card-price-link {
      align-items: initial;
      gap: 0px;
    }
  }

  .card-price {
    font-family: "Bebas", cursive;
    font-size: 25px;
    margin: 0px 10px;
    text-align: left;
  }

  .card-see-more {
    display: block;
    font-family: "Bebas", cursive;
    font-size: 15px;
    margin: 0px 10px;
  }

  @media (min-width: 769px) {
    .card-see-more {
      text-align: right;
    }
  }
`;

export function Card(props) {
  const altResplaced = props.title.replace(" ", "-");
  const altToLowerCase = altResplaced.toLowerCase();

  return (
    <CardComp>
      <h3 className="card-title">{props.title}</h3>
      <img
        src={props.pic}
        alt={props.title.toLowerCase().replaceAll(" ", "-")}
        className="card-img"
      />
      <div className="card-price-link">
        <h4 className="card-price">${props.price}</h4>
        <a href="" className="card-see-more">
          Ver mas...
        </a>
      </div>
    </CardComp>
  );
}
