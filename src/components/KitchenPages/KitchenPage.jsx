import React, { useState, useEffect } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { Command } from "./Command";

export const KitchenPage = () => {
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
  }, [url]);
  console.log(data);
  return (
    <div>
      <h1> Cocina </h1>
      <section className="items">
        <div className="render-menu">{data && <Command products={data} />}</div>
      </section>
    </div>
  );
};
