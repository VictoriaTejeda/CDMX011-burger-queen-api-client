export const Data ={
    products: [
      {
        id: 1,
        name: "Café americano",
        price: 5,
        type: "desayuno"
      },
      {
        id: 2,
        name: "Jugo de Naranja",
        price: 7,
        type: "desayuno"
      },
      {
        id: 3,
        name: "Café con leche",
        price: 10,
        type: "desayuno"
      },
      {
        id: 5,
        name: "Hamburguesa simple",
        price: 10,
        type: "comida"
      },
      {
        id: 6,
        name: "Hamburguesa doble",
        price: 15,
        type: "comida"
      },
      {
        id: 7,
        name: "Papas fritas",
        price: 5,
        type: "comida"
      },
    
    ],
    orders: [
      {
        waiter: "armando_cocina@burgerqueen.com",
        clientName: "Renato",
        status: "pending",
        orderProducts: [
          {
            id: 2,
            name: "Jugo de Naranja",
            price: 7,
            image: "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/jugo.png",
            type: "desayuno",
            quantity: 1
          },
          {
            id: 3,
            name: "Café con leche",
            price: 10,
            image: "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/leche.png",
            type: "desayuno",
            quantity: 1
          }
        ],
        date: "6/12/2021 13:19:42",
        total: 17,
        id: 10
      },
      {
        waiter: "armando_cocina@burgerqueen.com",
        clientName: "Pato",
        status: "pending",
        orderProducts: [
          {
            id: 2,
            name: "Hamburguesa doble",
            price: 15,
            image: "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/doble.png",
            type: "comida",
            quantity: 1
          },
          {
            id: 3,
            name: "Café con leche",
            price: 10,
            image: "https://raw.githubusercontent.com/Fanita90/CDMX011-burger-queen-api-client/hu3/src/assets/menu-items/leche.png",
            type: "desayuno",
            quantity: 1
          }
        ],
        date: "6/12/2021 13:19:42",
        total: 17,
        id: 11
      }
    ]
  };