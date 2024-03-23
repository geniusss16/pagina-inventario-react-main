import { useState, useEffect } from "react";
import React from "react";
import Convertidor from "./Convertidor";

function Api() {
  const [dataApi, setDataApi] = useState(null);
  const [loading, setLoading] = useState(true); // agregamos un estado para controlar el spinner

  const [dataApi2, setDataApi2] = useState(null);
  //const [loading2, setLoading2] = useState(true); // agregamos un estado para controlar el spinner

  useEffect(() => {
    async function fetchData() {

      const response = await fetch("https://pydolarvenezuela-api.vercel.app/api/v1/dollar");
      const data = await response.json();

      const response2 = await fetch("https://pydolarvenezuela-api.vercel.app/api/v1/dollar/page?page=bcv");
      const data2 = await response2.json();

      
      console.log(data2);
  
      if (data !== undefined && data !== null && data2 !== undefined && data2 !== null) {
        setDataApi(data); // actualizamos dataApi con la respuesta de la API
        setDataApi2(data2); // actualizamos dataApi con la respuesta de la API



      setTimeout(() => {
        setLoading(false); // ocultamos el spinner después de 1 segundo
      },1000);
    }
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
      <Convertidor valor={dataApi} valor2= {dataApi2} />
    </div>
  );
}


export default Api;
