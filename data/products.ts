export const PRODUCTS = [
  {
    name: "jar",
    menu: [
      {
        name: "salmon",
        img: "/products/Frasco-Salmon.png",
        bg: "#ffc0c5",
        color: "#cba058",
        id: "frasco-salmon",
      },
      {
        name: "tuna",
        img: "/products/Frasco-Atun.png",
        bg: "#b5d9fb",
        color: "#d70321",
        id: "frasco-atun",
      },
      {
        name: "quinoa",
        img: "/products/Frasco-Quinoa.png",
        bg: "#6e5d5c",
        color: "#cba058",
        id: "frasco-quinoa",
      },
      {
        name: "meat",
        img: "/products/Frasco-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "frasco-carne",
      },
    ],
  },

  {
    name: "can",
    menu: [
      {
        name: "meat",
        img: "/products/Litolata-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "litolata-carne",
      },
      {
        name: "cod",
        img: "/products/Litolata-Bacalao.png",
        bg: "#bdc5e9",
        color: "#d70321",
        id: "litolata-bacalao",
      },
      {
        name: "hake",
        img: "/products/Litolata-Merluza.png",
        bg: "#becaf3",
        color: "#d70321",
        id: "litolata-merluza",
      },
    ],
  },
  {
    name: "bag",
    menu: [
      {
        name: "mushrooms",
        img: "/products/Bolsa-Hongos.png",
        bg: "#665936",
        color: "#cba058",
        id: "bolsa-hongos",
      },
      {
        name: "cod",
        img: "/products/Bolsa-Bacalao.png",
        bg: "#bdc5e9",
        color: "#d70321",
        id: "bolsa-bacalao",
      },
      {
        name: "meat",
        img: "/products/Bolsa-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "bolsa-carne",
      },
      {
        name: "seafood",
        img: "/products/Bolsa-Marisco.png",
        bg: "#d9a3b2",
        color: "#cba058",
        id: "bolsa-marisco",
      },
    ],
  },
  {
    name: "tins",
    menu: [
      {
        name: "tuna",
        img: "/products/Pandereta-Atun.png",
        bg: "#b5d9fb",
        color: "#d70321",
        id: "pandereta-atun",
      },
      {
        name: "meat",
        img: "/products/Pandereta-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "pandereta-carne",
      },
    ],
  },
];

export const ALL_PRODUCTS = PRODUCTS.flatMap((cat) => cat.menu);
