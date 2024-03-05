import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card-comp";

export function CategoryPage() {
  const BodySection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #362b2f;
    min-height: calc(100vh - 260px);
    overflow: auto;
    padding: 40px 0;

    .general-section__wrapper {
      display: grid;
      justify-content: center;
      gap: 35px;
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

    .category__top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }

    .category__h2 {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      line-height: 1.25;
    }

    .category__select {
      font-family: "Bebas", cursive;
      font-size: 18px;
      color: #080808;
      width: 120px;
      height: 30px;
      background-color: #f0efda;
      border: none;
      border-radius: 5px;
    }
  `;

  const params = useParams();
  const paramsReplaced = params.cat.replace("-", " ");

  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState("menor precio");

  async function pullResults(cat, order) {
    fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=nicosStock"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const items = data.items;

        if (order === "menor precio") {
          const searchProduct = items.filter((p) => {
            const filteredProducts = p.fields.cat === cat;
            return filteredProducts;
          });

          const lowerPrice = searchProduct.sort((pA, pB) => {
            if (pA.fields.price > pB.fields.price) {
              return 1;
            }
            if (pA.fields.price < pB.fields.price) {
              return -1;
            }
            return 0;
          });

          setProducts(lowerPrice);
        } else if (order === "mayor precio") {
          const searchProduct = items.filter((p) => {
            const filteredProducts = p.fields.cat === cat;
            return filteredProducts;
          });

          const higherPrice = searchProduct.sort((pA, pB) => {
            if (pA.fields.price < pB.fields.price) {
              return 1;
            }
            if (pA.fields.price > pB.fields.price) {
              return -1;
            }
            return 0;
          });

          setProducts(higherPrice);
        }
      });
  }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    pullResults(params.cat, order);
  }, [params.cat, order]);

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <div className="category__top-container">
          <h2 className="category__h2">{paramsReplaced}</h2>
          <select
            className="category__select"
            name="order"
            value={order}
            onChange={handleChange}
          >
            <option value="menor precio">Menor precio</option>
            <option value="mayor precio">Mayor precio</option>
          </select>
        </div>
        <div className="card-wrapper">
          {products.map((r, index) => (
            <Card
              key={index}
              title={r.fields.title}
              price={r.fields.price}
              pic={r.fields.url}
            />
          ))}
        </div>
      </div>
    </BodySection>
  );
}
