import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Card } from "./card";

const GeneralComp = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;

  .general-title {
    font-family: "Bungee", cursive;
    padding: 25px 0px;
    margin: 0;
  }

  .general-section__wrapper {
    display: grid;
    justify-content: center;
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

export function General() {
  const [products, setProducts] = useState([]);

  /* console.log("products: ", products); */

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
  }, []);

  return (
    <GeneralComp className="general-comp">
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
    </GeneralComp>
  );
}
