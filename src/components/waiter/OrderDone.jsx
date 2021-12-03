import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";

export const OrderDone = () => {
  const [data, setData] = useState([]);
  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  useEffect(() => {
    api.get(url).then((res) => {
      console.log(res);
      if (!res.err) {
        setData(res);
      } else {
        setData(null);
      }
    });
  }, []);

  const filterStatus = () => {
    console.log(data.filter((p) => p.status == "listo"));
    return data.filter((p) => p.status == "listo");
  };

  return (
    <div>
      <button
        className="btn-menu"
        onClick={() => {
          filterStatus();
        }}
      >
        Ordenes Listas
      </button>
    </div>
  );
};
