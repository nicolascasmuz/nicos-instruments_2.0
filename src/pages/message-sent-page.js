import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;
  padding: 40px 60px;

  .general-section__wrapper {
    display: grid;
    justify-items: center;
    gap: 65px;
  }

  .message-sent__title {
    font-family: "Bungee Shade", cursive;
    text-align: center;
    font-size: 32px;
    color: #f0efda;
    line-height: 1;
    margin: 0;
  }

  .message-sent__p {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #f0efda;
    text-align: center;
    margin: 0;
  }

  .message-sent__button {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #f0efda;
    border: none;
    text-decoration: none;
    border-radius: 5px;
    background-color: #ac1a22;
    width: 150px;
    height: 35px;
    transition: all 0.25s;
  }
`;

export function MessageSentPage() {
  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <h2 className="message-sent__title">Muchas gracias</h2>
        <p className="message-sent__p">
          Tu mensaje ha sido enviado, te responderemos a la brevedad.
        </p>
        <Link to="/">
          <button className="message-sent__button">Volver a inicio</button>
        </Link>
      </div>
    </BodySection>
  );
}
