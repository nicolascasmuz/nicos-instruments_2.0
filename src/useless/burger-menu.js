import React from "react";
import styled from "styled-components";

const BurgerMenuComp = styled.div`
  .header__menu-label {
    cursor: pointer;
  }

  .img {
    height: 40px;
    margin: 0;
  }

    @media (min-width: 769px) {
      .img {
        display: none;
      }
    }
  
  .header__menu-lista {
    position: fixed;
    width: 100%;
    height: 0vh;
    top: 74px;
    background-color: #141414;
    opacity: 95%;
    text-align: center;
    transition: all 0.5s;
    padding: 0;
  }

    @media (min-width: 769px) {
      .header__menu-lista {
        display: none;
      }
    }

  .header__menu-lista li {
    list-style: none;
    display: none;
    line-height: 30px;
    margin: 50px 0;
    transition: all 0.5s;
  }

  .header__menu-lista li a {
    color: #fafafa;
  }

  #check {
    display: none;
  }

  #check:checked ~ .header__menu-lista {
    height: 100vh;
  }

  #check:checked ~ .header__menu-lista li {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .header__option {
    font-family: "Bebas", cursive;
    text-decoration: none;
  }
  }
`;

export function BurgerMenu(props) {
  return (
    <BurgerMenuComp src={props.pic} alt="burger-menu">
      <input className="header__menu-input" type="checkbox" id="check" />
      <label htmlFor="check" className="header__menu-label">
        <img className="img" src={props.pic} alt="burger-menu" />
      </label>
      <ul className="header__menu-lista">
        <li>
          <a href="" className="header__option">
            Quienes somos
          </a>
          <a href="" className="header__option">
            Nuestros productos
          </a>
          <a href="" className="header__option">
            Contacto
          </a>
        </li>
      </ul>
    </BurgerMenuComp>
  );
}
