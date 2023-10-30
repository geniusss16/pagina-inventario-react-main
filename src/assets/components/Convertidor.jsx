//@ts-check
import React from "react";
import { useState, useEffect } from "react";
import "../hojas-de-estilos/Convertidor.css";


function Convertidor({ valor , valor2 }) {
  //console.log(valor2.monitors.usd.price_old);
  const [dolartoday, setDolartoday] = useState(0);
  const [dolarBcv, setDolarBcv] = useState(0);
  const [valorDelSelector, setvalorDelSelector] = useState(0);
  const [valorDelSelector2, setvalorDelSelector2] = useState("USD");
  const [monto, setMonto] = useState(1);
  const [resultados, setResultados] = useState(1);
  const [error, setError] = useState(null);
  const [formatter, setFormatter] = useState(
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
  );

  useEffect(() => {
    //const { dolartoday: valorD, promedio_real } = valor.USD;
    setvalorDelSelector(valor.monitors.dolar_today.price);
    setDolartoday(valor.monitors.dolar_today.price);
    setDolarBcv(valor2.monitors.usd.price_old);
  }, []);

  useEffect(() => {
    if (valorDelSelector2 === "USD") {
      setResultados(monto * valorDelSelector);
      setFormatter(
        new Intl.NumberFormat("es-VE", { style: "currency", currency: "VES" })
      );
    } else {
      setResultados(monto / valorDelSelector);
      setFormatter(
        new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" })
      );
    }
  }, [monto, valorDelSelector, valorDelSelector2]);

  const handleChangeMonto = (e) => {
    setMonto(e.target.value);
  };

  const handleChangeSelector = (e) => {
    const valorActualSelector = e.target.value;
    setvalorDelSelector(valorActualSelector);
  };

  const handleSelect2 = (e) => {
    setvalorDelSelector2(e.target.value);
  };

  const reiniciarBT = () => {
    setMonto(1);
  };

  if (error) {
    return <p>Ha ocurrido un error al cargar los datos</p>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <img
            className="col-12 mt-4 rounded mx-auto d-block img"
            src="/imagenes/logodolar.PNG"
            alt="dolarlogo"
          />
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <select
            name="sel1"
            id="sellist1"
            onChange={handleChangeSelector}
            className="form-select mt-4 w-25"
          >
            <option value={dolartoday}>DOLARTODAY</option>
            <option value={dolarBcv}>BCV</option>
            {/*  <option value="3">PERSONALIZADA</option> */}
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <select
            name="sel2"
            id="sellist2"
            onChange={handleSelect2}
            className="col-12 form-select mt-4 w-25"
          >
            <option value="USD">USD</option>
            <option value="BS">BS</option>
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <label className=" mt-3">Cantidad en {valorDelSelector2}:</label>
        </div>

        <div className="col-12 d-flex justify-content-center">
          <input
            type="number"
            className="form-control w-25 text-right"
            id="input1"
            name="input1"
            onChange={handleChangeMonto}
            value={monto}
          />
        </div>
      </div>

      <div className="row">
        <div className=" mt-4 col-12 d-flex justify-content-center">
          <h1>{formatter.format(resultados)}</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-12 d-flex  mb-3 justify-content-center">
          <button
            type="button"
            className="btn btn-success  col-2"
            onClick={reiniciarBT}
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Convertidor;
