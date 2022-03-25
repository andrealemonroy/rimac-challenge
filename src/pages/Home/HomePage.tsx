import React, { FormEvent } from "react";
import Select from "../../components/Select/Select";
import Option from "../../components/Select/Option/Option";
import "./HomePage.scss";
const HomePage = () => {
  const TYPES_DOCUMENT = ["DNI", "PASAPORTE"];
  type TypesDocument = typeof TYPES_DOCUMENT[number];

  const [selected, setSelected] = React.useState<TypesDocument>(
    TYPES_DOCUMENT[0]
  );
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="home">
      <div className="home__background">
        <div className="home__background__content">
          <div className="home__background__content__logo">
            <img src="/img/logoRimac.png" />
          </div>
          <div className="home__background__content__illustration">
            <img src="/img/homeIlustracion.svg" />
          </div>
          <div className="home__background__content__highlight">
            <p>¡NUEVO!</p>
          </div>
          <div className="home__background__content__title">
            <span className="home__background__content__title-gray">
              Seguro{" "}
            </span>
            <span className="home__background__content__title-red">
              Vehicular Tracking
            </span>
          </div>
          <div className="home__background__content__paragraph">
            <p>Cuéntanos donde le haras seguimiento a tu seguro</p>
          </div>
        </div>
      </div>
      <div className="home__data">
        <div className="home__data__doubt">
          <span>¿Tienes alguna duda?</span>
          <span className="home__data__doubt__phone">
            <img src="/img/ic_phone.png" />
            <span className="home__data__doubt__phone-acian">
              (01) 411 6001
            </span>
          </span>
        </div>
        <div className="home__data__form">
          <div className="home__data__form__title">
            <p>Déjanos tus datos</p>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <Select placeholder="Choose an option">
                <Option value="one">One</Option>
                <Option value="two">Two</Option>
                <Option value="three">Three</Option>
                <Option value="four">Four</Option>
              </Select>
              {/* <select name="select">
                <option value="value1">Value 1</option>
                <option value="value2" selected>
                  Value 2
                </option>
                <option value="value3">Value 3</option>
              </select> */}
              <input
                name="documentNumber"
                type="number"
                placeholder="Nro. de doc"
              />
            </div>
            <div>
              <input name="phoneNumber" type="number" placeholder="Celular" />
            </div>
            <div>
              <input name="cardNumber" type="text" placeholder="Placa" />
            </div>
            <div>
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />{" "}
                Acepto la Política de Protecciòn de Datos Personales y los
                Términos y Condiciones.
              </label>
            </div>
            <button type="submit">COTÍZALO</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
