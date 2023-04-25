import React from "react";
import styled from "styled-components";

const LoupeComp = styled.div`
  .label {
    cursor: pointer;
  }

  .img {
    height: 40px;
  }

  @media (min-width: 769px) {
    .img {
      display: none;
    }
  }

  .input-search {
    position: fixed;
    width: 100%;
    height: 0vh;
    top: 100px;
    background-color: #fafafa;
    opacity: 95%;
    text-align: center;
    transition: all 0.5s;
    padding: 0;
  }

  @media (min-width: 769px) {
    .input-search {
      display: none;
    }
  }

  #check {
    display: none;
  }

  #check:checked ~ .input-search {
    height: 35px;
  }
`;

export function Loupe(props) {
  return (
    <LoupeComp>
      <input className="input-check" type="checkbox" id="check" />
      <label htmlFor="check" className="label">
        <img className="img" src={props.pic} alt="search-loupe" />
      </label>
      <input className="input-search"></input>
    </LoupeComp>
  );
}
