import React, { FormEvent, useReducer, useState } from "react";
import Select from "../../components/Select/Select";
import Input from "../../components/Input/Input";
import "./HomePage.scss";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../provider/useAuth";

const HomePage = () => {
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [state, setState] = useReducer((s: any, a: any) => ({ ...s, ...a }), {
    documentNumber: "",
    phoneNumber: "",
    carNumber: "",
  });
  const options = [
    {
      label: "DNI",
      value: "DNI",
    },
    {
      label: "PASAPORTE",
      value: "PASAPORTE",
    },
  ];
  const handleInputChange = (e: { target: { value: string; name: any } }) => {
    setState({ [e.target.name]: e.target.value });
    if (
      state.documentNumber == "" ||
      state.phoneNumber == "" ||
      state.carNumber == ""
    ) {
      setError("Debes completar todos los campos");
    } else {
      setDisabled(false)
    }
  };
  type LocationProps = {
    state: {
      from: Location;
    };
  };
  let navigate = useNavigate();
  const location = useLocation() as unknown as LocationProps;
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/protected";
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      state.documentNumber == "" ||
      state.phoneNumber == "" ||
      state.carNumber == ""
    ) {
      setError("Debes completar todos los campos");
    } else {
      setError("");
      setDisabled(false);
      auth.signin(state, () => {
        navigate(from, { replace: true });
      });
    }
  }

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
          <div>
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
          <form onSubmit={handleSubmit} className="w-100 sm:w-96">
            <div className="flex mt-6">
              <Select options={options} />
              <Input
                placeholder="Nro. de doc"
                name="documentNumber"
                handleInputChange={handleInputChange}
                value={state.documentNumber}
              />
            </div>
            <div className="mt-4">
              <Input
                placeholder="Celular"
                name="phoneNumber"
                handleInputChange={handleInputChange}
                value={state.phoneNumber}
              />
            </div>
            <div className="mt-4">
              <Input
                placeholder="Placa"
                name="carNumber"
                handleInputChange={handleInputChange}
                value={state.carNumber}
              />
            </div>
            <div className="mt-6">
              <label className="home__data__form__terms">
                Acepto la <a>Política de Protección de Datos Personales</a> y
                los
                <a> Términos y Condiciones</a>.
                <input
                  type="checkbox"
                  id="terms__checkbox"
                  value="terms__checkbox"
                />
                <span className="checkmark"></span>
              </label>
            </div>
            <p>{error}</p>
            {disabled ? (
              <button className="home__data__form__button-disabled" disabled>
                COTÍZALO
              </button>
            ) : (
              <button className="home__data__form__button">COTÍZALO</button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
