import React from "react";
import "./CotizadorStyles.css";
import carImage from "../../assets/fiat_rojo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faPhoneAlt,
  faEnvelopeSquare,
  faAmbulance
} from "@fortawesome/free-solid-svg-icons";

const Cotizador = () => {
  return (
    <>
      <div className="full-page-container">
        <div className="cotizador-container">
          <h2 className="cotizador-title">COTIZADOR</h2>
          <h4 className="cotizador-subtitle">
            CITADINO, AVENTURERO, DEPORTIVO
          </h4>
          <h1>Elige el tuyo</h1>
          <img src={carImage} alt="Fiat Car" className="fiat-car" />
          <div className="form-card">
            <div className="form-container">
              <div className="form-group">
                <label htmlFor="tipo">MODELO</label>
                <select id="tipo" name="tipo">
                  <option value="citadino">Citadino</option>
                  <option value="aventurero">Aventurero</option>
                  <option value="deportivo">Deportivo</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="version">VERSION</label>
                <select id="version" name="version">
                  <option value="1.0">1.0</option>
                  <option value="1.1">1.1</option>
                  <option value="1.2">1.2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="estado">ESTADO</label>
                <select id="estado" name="estado">
                  <option value="Morelos">Morelos</option>
                  <option value="CDMX">CDMX</option>
                  <option value="Puebla">Puebla</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="distribucion">DISTRIBUCION</label>
                <select id="distribucion" name="distribucion">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <h1
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "3.5rem",
                marginTop: "40px"
              }}
            >
              Datos personales
            </h1>
            <h4 className="phrases"> ESCRIBE TUS DATOS PERSONALES</h4>
            <div className="form-container-personal">
              <div className="form-group">
                <label htmlFor="nombre">NOMBRE(S)</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="ESCRIBE TU NOMBRE"
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidoPaterno">APELLIDO PATERNO</label>
                <input
                  type="text"
                  id="apellidoPaterno"
                  name="apellidoPaterno"
                  placeholder="ESCRIBE TU APELLIDO"
                />
              </div>
              <div className="form-group">
                <label htmlFor="apellidoMaterno">APELLIDO MATERNO</label>
                <input
                  type="text"
                  id="apellidoMaterno"
                  name="apellidoMaterno"
                  placeholder="ESCRIBE TU APELLIDO"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="CORREO@EMAIL.COM.MX"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telefono">TELÉFONO</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  placeholder="01. 844 . 439 . 0654"
                />
              </div>

              <div className="form-group" style={{ gridColumn: "span 3" }}>
                <label>DESEO SER CONTACTADO POR</label>
                <div className="contact-options">
                  <div className="contact-option contact-option-telefono">
                    <FontAwesomeIcon icon={faPhone} /> TELÉFONO
                  </div>
                  <div className="contact-option contact-option-email">
                    <FontAwesomeIcon icon={faEnvelope} /> EMAIL
                  </div>
                  <div className="contact-option contact-option-ambos">
                    <FontAwesomeIcon icon={faPhone} />{" "}
                    <FontAwesomeIcon icon={faEnvelope} /> AMBOS
                  </div>
                </div>
              </div>
            </div>
            <h1
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "3.5rem",
                marginTop: "40px"
              }}
            >
              Forma de pago
            </h1>
            <h4 className="phrases"> PERSONALIZA TU COTIZACIÓN</h4>
            <div>
              <div className="form-group">
                <label htmlFor="tipoPago">ELIGE TU TIPO DE PAGO</label>
                <div className="payment-options">
                  <div className="payment-option payment-option-contado">
                    CONTADO
                  </div>
                  <div className="payment-option payment-option-credito">
                    CRÉDITO
                  </div>
                </div>
              </div>
              <br />
              <div className="form-container">
                <div className="form-group">
                  <label htmlFor="enganche">CANTIDAD DE ENGANCHE</label>
                  <input
                    type="number"
                    id="enganche"
                    name="enganche"
                    placeholder="80,000.00"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="plazo">PLAZO</label>
                  <select id="plazo" name="plazo">
                    <option value="12">12 MESES</option>
                    <option value="24">24 MESES</option>
                    <option value="36">36 MESES</option>
                    <option value="48">48 MESES</option>
                    <option value="60">60 MESES</option>
                    <option value="72">72 MESES</option>
                  </select>
                </div>
              </div>
            </div>
            <h1
              style={{
                color: "red",
                textAlign: "center",
                fontSize: "3.5rem",
                marginTop: "40px"
              }}
            >
              Comentarios
            </h1>
            <h4 className="phrases"> NOS IMPORTAN TUS COMENTARIOS</h4>
            <div className="form-container-comments">
              <div className="form-group">
                <label htmlFor="comentarios">¿DUDAS? ¿COMENTARIOS?</label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  placeholder="ESCRIBENOS"
                  rows="5"
                ></textarea>
              </div>
              <br />
              <div className="form-groups" style={{ textAlign: "left" }}>
                <label className="checkbox-label" style={{ display: "block" }}>
                  <input type="checkbox" name="privacidad" required />
                  He leído y acepto el <a href="#">aviso de privacidad</a>
                </label>
                <br />
                <label className="checkbox-label" style={{ display: "block" }}>
                  <input type="checkbox" name="promociones" />
                  No deseo recibir promociones
                </label>
              </div>

              <br />
              <div className="form-group" style={{ gridColumn: "span 2" }}>
                <button className="button-send" type="submit">
                  ENVIAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cotizador;
