import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/card-comp";

export function ResultsPage() {
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

    .results__top-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }

    .results__h2 {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
    }

    .h2__loading {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      margin: 0 0 0 70px;
    }

    .results__select {
      font-family: "Bebas Neue", cursive;
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

  const [results, setResults] = useState([]);
  const [order, setOrder] = useState("menor precio");

  async function pullResults(q, order) {
    fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=nicosStock"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const items = data.items;
        const lowerCaseQuery = q.toLowerCase();

        if (order === "menor precio") {
          const searchProduct = items.filter((p) => {
            const productTitle = p.fields.title.toLowerCase();
            const filteredProducts = productTitle.includes(lowerCaseQuery);

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

          setResults(lowerPrice);
        } else if (order === "mayor precio") {
          const searchProduct = items.filter((p) => {
            const productTitle = p.fields.title.toLowerCase();
            const filteredProducts = productTitle.includes(lowerCaseQuery);

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

          setResults(higherPrice);
        }
      });
  }

  function handleChange(e) {
    setOrder(e.target.value);
  }

  useEffect(() => {
    pullResults(params.query, order);
  }, [params, order]);

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <div className="results__top-container">
          <h2 className="results__h2">Resultados: {results.length}</h2>
          <select
            className="results__select"
            name="order"
            value={order}
            onChange={handleChange}
          >
            <option value="menor precio">Menor precio</option>
            <option value="mayor precio">Mayor precio</option>
          </select>
        </div>
        <div className="card-wrapper">
          {results.length === 0 ? (
            <h2 className="h2__loading">Cargando...</h2>
          ) : (
            results.map((r, index) => (
              <Card
                key={index}
                title={r.fields.title}
                price={r.fields.price}
                pic={r.fields.url}
              />
            ))
          )}
        </div>
      </div>
    </BodySection>
  );
}
