import React, { FormEvent } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
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
    let formData = new FormData(event.currentTarget);
    let username = formData.get("username") as string;
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
              <Select placeholder="Tipo">
                <Option value="DNI">DNI</Option>
                <Option value="PASAPORTE">Pasaporte</Option>
              </Select>
              <Input placeholder="Número" name="documentNumber" handleInputChange={e => props.setState({documentNumber: e.target.value})} value={props.state}/>
            </div>
            <div>
            <Input placeholder="Celular" name="phoneNumber" handleInputChange={e => props.setState({phoneNumber: e.target.value})} value={props.state}/>
            </div>
            <div>¡
              <Input label="Placa" name="carNumber" handleInputChange={e => props.setState({carNumber: e.target.value})} value={props.state}/>
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
