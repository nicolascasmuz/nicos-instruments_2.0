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

    .h2__results {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      margin: 0 0 0 70px;
    }

    .h2__loading {
      font-family: "Bungee Shade", cursive;
      font-size: 25px;
      color: #f0efda;
      margin: 0 0 0 70px;
    }
  `;

  const params = useParams();

  const [results, setResults] = useState([]);

  async function pullResults(q) {
    fetch(
      "https://preview.contentful.com/spaces/boc2rp8m0dgi/environments/master/entries?access_token=Y1_N0gShtcshwQbkaOPc2u0lA-7zD8351Q0NWQCRCsU&&content_type=nicosStock"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const items = data.items;

        const lowerCaseQuery = q.toLowerCase();

        const searchProduct = items.filter((p) => {
          const productTitle = p.fields.title.toLowerCase();
          const filteredProducts = productTitle.includes(lowerCaseQuery);

          return filteredProducts;
        });

        setResults(searchProduct);
      });
  }

  useEffect(() => {
    pullResults(params.query);
  }, [params]);

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <h2 className="h2__results">Resultados: {results.length}</h2>
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
