import { useState, useEffect } from "react";
import React from "react";
import Convertidor from "./Convertidor";

function Api() {
  const [dataApi, setDataApi] = useState(null);
  const [loading, setLoading] = useState(true); // agregamos un estado para controlar el spinner

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://s3.amazonaws.com/dolartoday/data.json");
      const data = await response.json();
      setDataApi(data); // actualizamos dataApi con la respuesta de la API

      setTimeout(() => {
        setLoading(false); // ocultamos el spinner después de 1 segundo
      },1000);
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="vh-100 d-flex align-items-center justify-content-center">
        <div className="spinner-border spinner-border-lg text-success" role="status">
          <span className="visually-hidden">Cargado...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Convertidor valor={dataApi} />
    </div>
  );
}


export default Api;
