import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const api = { url: "" };

if (process.env.REACT_APP_ENV == "development") {
  api.url = "http://localhost:3500";
} else if (process.env.REACT_APP_ENV == "production") {
  api.url = process.env.REACT_APP_BACKEND_URL;
}

const BodySection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #362b2f;
  min-height: calc(100vh - 260px);
  overflow: auto;
  padding: 40px 60px;

  .general-section__wrapper {
    display: grid;
    align-items: flex-start;
    gap: 65px;
  }

  @media (min-width: 769px) {
    .general-section__wrapper {
      grid-template-columns: auto auto;
      grid-template-rows: auto;
    }
  }

  .section-form__form {
    display: grid;
    gap: 20px;
    max-width: 425px;
    min-width: 315px;
  }

  @media (min-width: 769px) {
    .section-form__form {
      grid-column: 2;
      grid-row: 1;
    }
  }

  .section-form__title {
    font-family: "Bungee Shade", cursive;
    text-align: center;
    font-size: 32px;
    color: #f0efda;
    line-height: 1;
    margin: 0;
  }

  @media (min-width: 769px) {
    .section-form__title {
      grid-column: 1;
      grid-row: 1;
      font-size: 50px;
    }
  }

  .section-form__h3 {
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #f0efda;
    margin: 0;
  }

  .section-form__input-name {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    color: #fafafa;
    width: 100%;
    height: 45px;
  }

  .section-form__input-email {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 25px;
    color: #fafafa;
    width: 100%;
    height: 45px;
  }

  .section-form__textarea {
    background-color: #141414;
    border: none;
    font-family: "Bebas Neue", cursive;
    font-size: 18px;
    color: #fafafa;
    width: 100%;
    height: 160px;
  }

  .section-form__error {
    display: none;
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    color: #ea2027;
    margin: 0;
  }

  .section-form__button {
    border: none;
    background-color: #f0efda;
    color: #362b2f;
    font-family: "Bebas Neue", cursive;
    font-size: 20px;
    font-weight: 700;
    height: 45px;
    margin-top: 20px;
    transition: all 0.25s;
  }

  .section-form__button:hover {
    opacity: 85%;
  }
`;

export function ContactPage() {
  const [form, setForm] = useState({});
  const navigate = useNavigate();

  const input1El = document.querySelector(".section-form__input-name");
  const input2El = document.querySelector(".section-form__input-email");
  const input3El = document.querySelector(".section-form__textarea");
  const errorEl = document.querySelector(".section-form__error");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      nombre: form.nombre,
      email: form.email,
      mensaje: form.mensaje,
    });

    const mail = {
      name: form.nombre,
      email: form.email,
      message: form.mensaje,
    };

    if (mail.name && mail.email && mail.message) {
      await fetch(api.url + "/send-mail", {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(mail),
      }).then(() => {
        navigate("/message-sent");
      });
    } else {
      input1El.style.border = "solid 3px #EA2027";
      input2El.style.border = "solid 3px #EA2027";
      input3El.style.border = "solid 3px #EA2027";
      errorEl.style.display = "block";
      console.log("api.url: ", api.url);
    }
  };

  return (
    <BodySection className="general-comp">
      <div className="general-section__wrapper">
        <h2 className="section-form__title">Contacto</h2>
        <form className="section-form__form" onSubmit={handleSubmit}>
          <label htmlFor="nombre" className="section-form__label">
            <h3 className="section-form__h3">NOMBRE</h3>
            <input
              type="text"
              className="section-form__input-name"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email" className="section-form__label">
            <h3 className="section-form__h3">EMAIL</h3>
            <input
              type="email"
              className="section-form__input-email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="mensaje" className="section-form__label">
            <h3 className="section-form__h3">MENSAJE</h3>
            <textarea
              className="section-form__textarea"
              id="mensaje"
              cols="30"
              rows="10"
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
            ></textarea>
            <h3 className="section-form__error">
              Por favor, complete todos los campos
            </h3>
          </label>
          <button className="section-form__button">Enviar</button>
        </form>
      </div>
    </BodySection>
  );
}
