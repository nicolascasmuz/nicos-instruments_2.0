/* import React, { useEffect, useState } from "react"; */
import { CarouselComp } from "./carousel-comp";
import styled from "styled-components";
/* import { Card } from "./card-comp"; */

export function BodyComp() {
  const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;
  padding: 40px 0;

  .general-title {
    font-family: "Bungee", cursive;
    padding: 25px 0px;
    margin: 0;
  }

  .general-section__wrapper {
    display: grid;
    justify-content: center;
  }

  .carousel-wrapper {
    min-width: 300px;
    max-width: 1000px;
    position: relative;
    margin: 0 30px;
  }

  .general-section__wrapper .arrow {
    top: 50%;
    height: 46px;
    width: 46px;
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
  }

  .general-section__wrapper .arrow:first-child {
    left: -23px;
  }

  .general-section__wrapper .arrow:last-child {
    right: -23px;
  }

  .general-section__wrapper .general-section__carousel {
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    margin: 0 35px;
  }

  .general-section__carousel img {
    height: 340px;
    object-fit: cover;
    width: 100%;
    margin-left: 8px;
  }

  @media (min-width: 469px) {
    .general-section__carousel img {
      height: 340px;
      object-fit: cover;
      width: calc(100% / 2);
      margin-left: 8px;
    }
  }

  @media (min-width: 769px) {
    .general-section__carousel img {
      height: 340px;
      object-fit: cover;
      width: calc(100% / 3);
      margin-left: 8px;
    }
  }

  .general-section__carousel img:first-child {
    margin-left: 0px;
  }

  .card-wrapper {
    display: grid;
    justify-content: center;
    gap: 15px 25px;
    margin-bottom: 30px;
  }
  
  @media (min-width: 769px) {
    .card-wrapper {
      grid-template-columns: auto auto;
    }
  }
  
  @media (min-width: 1069px) {
    .card-wrapper {
      grid-template-columns: auto auto auto;
      justify-content: center;
    }
  }
  }
`;

  /* const [products, setProducts] = useState([]);

   console.log("products: ", products); 

  useEffect(() => {
    const getProducts = async (url) => {
      let res = await fetch(url);
      let json = await res.json();

      json.items.forEach(async (i) => {
        let product = {
          title: i.fields.title,
          pic: i.fields.url,
          price: i.fields.price,
        };
        setProducts((products) => [...products, product]);
      });
    };

    getProducts(
      "https://cdn.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=R0xhbEL0Ahlh81y60QK3Me6gqMvwB2tUMpl2J9pXI-U&&content_type=nicosStock"
    );
  }, []); */

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <CarouselComp />
      </div>
    </BodySection>
  );
}

{
  /* <GeneralComp className="general-comp">
      <h1 className="general-title">Resultados: {products.length}</h1>
      <div className="general-section__wrapper">
        <div class="card-wrapper">
          {products.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            products.map((i) => (
              <Card title={i.title} pic={i.pic} price={i.price} />
            ))
          )}
        </div>
      </div>
    </GeneralComp> */
}
