/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { helpHttp } from "../../helpers/helpHttp";
import { CommandOrder } from "./CommandOrder";

export const Command = (props) => {
  let { products } = props;
  const [db, setDb] = useState([]);
  //const [data, setData] = useState([]);

  let api = helpHttp();
  let url = "http://localhost:5000/orders";

  const updateOrder = (data) => {
    let endpoint = `${url}/${data.id}`;
    

    let options = {
      body: { status: "listo" },
      headers: { "content-type": "application/json" },
    };
    

    api.patch(endpoint, options).then((res) => {
      
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        console.log(res);
        //setError(res)
      }
    });
  };

 

  return (
    <>
      <section className="wrap-command">
        {products.map((op) => (
            <CommandOrder key={op.id} product={op} updateOrder={updateOrder}></CommandOrder>
        
        ))}
      </section>
    </>
  );
};
