export type ProductType = {
  name: string;
  img: string;
  bg: string;
  color: string;
  id: string;
  food_details: string;
};

type AllProductsType = {
  name: string;
  menu: ProductType[];
};

export const PRODUCTS: AllProductsType[] = [
  {
    name: "jar",
    menu: [
      {
        name: "salmon",
        img: "/products/Frasco-Salmon.png",
        bg: "#ffc0c5",
        color: "#cba058",
        id: "frasco-salmon",
        food_details:
          "Wild-caught salmon preserved in extra virgin olive oil. Packed with omega-3 fatty acids, vitamin D, and high-quality protein — ideal for heart health and brain function. The flavor is mild, slightly buttery, and gently savory with a soft, flaky texture that melts in your mouth.",
      },
      {
        name: "tuna",
        img: "/products/Frasco-Atun.png",
        bg: "#b5d9fb",
        color: "#d70321",
        id: "frasco-atun",
        food_details:
          "Skipjack tuna fillets packed in natural brine with a touch of sea salt. A staple high-protein, low-fat food beloved by athletes and anyone watching their calories. The flavor is clean, light, and slightly salty with a firm yet tender bite — versatile enough for salads, pasta, or eating straight from the jar.",
      },
      {
        name: "quinoa",
        img: "/products/Frasco-Quinoa.png",
        bg: "#6e5d5c",
        color: "#cba058",
        id: "frasco-quinoa",
        food_details:
          "Pre-cooked white quinoa seasoned with aromatic herbs and a hint of lemon. One of the few plant-based complete proteins, making it perfect for vegetarians, vegans, and anyone looking to reduce meat intake. The taste is nutty, earthy, and pleasantly mild — pairs beautifully with roasted vegetables or leafy greens.",
      },
      {
        name: "meat",
        img: "/products/Frasco-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "frasco-carne",
        food_details:
          "Slow-cooked premium beef simmered in its own natural juices with a blend of classic seasonings. Exceptionally high in iron, zinc, and protein — a powerhouse for those building muscle or recovering from physical activity. The flavor is deep, rich, and savory with a melt-in-your-mouth tenderness that tastes truly homemade.",
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
        food_details:
          "Tender shredded beef slow-cooked in a rich savory broth with aromatic spices. An excellent choice for athletes, active lifestyles, and high-protein diets. The flavor is bold, deeply umami, and satisfying — works great as a filling for tacos, rice bowls, or simply enjoyed on its own straight from the can.",
      },
      {
        name: "cod",
        img: "/products/Litolata-Bacalao.png",
        bg: "#bdc5e9",
        color: "#d70321",
        id: "litolata-bacalao",
        food_details:
          "Traditional salt-cured Atlantic cod — one of the oldest preserved foods in the world. An outstanding source of lean protein and B vitamins with very low fat content. The flavor is distinctly salty and savory with a firm, flaky texture. A staple in Mediterranean and Atlantic cuisine, excellent in stews, fritters, or croquettes.",
      },
      {
        name: "hake",
        img: "/products/Litolata-Merluza.png",
        bg: "#becaf3",
        color: "#d70321",
        id: "litolata-merluza",
        food_details:
          "Delicate hake fillets preserved in refined sunflower oil with a pinch of sea salt. One of the lightest and most digestible white fish available — highly recommended for children, the elderly, and anyone with a sensitive digestive system. The flavor is gentle, clean, and mildly salty with a soft, almost creamy texture.",
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
        food_details:
          "A hand-selected mix of dried wild mushrooms including porcini, shiitake, and chanterelle varieties. Naturally low in calories yet rich in B vitamins, potassium, and immune-supporting antioxidants. The flavor is intensely earthy, deeply smoky, and full of umami — just a small handful transforms any soup, risotto, or sauce into something extraordinary.",
      },
      {
        name: "cod",
        img: "/products/Bolsa-Bacalao.png",
        bg: "#bdc5e9",
        color: "#d70321",
        id: "bolsa-bacalao",
        food_details:
          "Traditional dried and salted cod pieces with a long heritage in Atlantic and Mediterranean cooking. An incredibly concentrated source of protein with a very long shelf life — perfect for stocking up. The flavor is intensely salty and savory in its preserved state. Always requires soaking in cold water for 24–48 hours before cooking to rehydrate and reduce saltiness.",
      },
      {
        name: "meat",
        img: "/products/Bolsa-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "bolsa-carne",
        food_details:
          "Freeze-dried premium beef strips seasoned with black pepper and natural spices. Lightweight and shelf-stable, making it ideal for camping trips, hiking, or quick high-protein snacking on the go. The flavor is concentrated, robustly savory, and slightly smoky with a satisfying chewy texture that softens as you eat.",
      },
      {
        name: "seafood",
        img: "/products/Bolsa-Marisco.png",
        bg: "#d9a3b2",
        color: "#cba058",
        id: "bolsa-marisco",
        food_details:
          "A generous mixed selection of shrimp, squid rings, and mussels — dried and lightly seasoned with sea salt. Rich in zinc, selenium, iodine, and lean protein, making it a nutritional powerhouse for thyroid and immune health. The flavor is briny, oceanic, and mildly sweet with a pleasant chewiness that brings the taste of the sea to any dish.",
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
        food_details:
          "Premium yellowfin tuna loins packed in high-quality extra virgin olive oil with a touch of sea salt. A nutritional all-star loaded with protein, omega-3s, and selenium — equally loved by fitness enthusiasts and home cooks. The flavor is smooth, rich, and lightly salty with a luxuriously tender texture that elevates any salad, sandwich, or pasta dish.",
      },
      {
        name: "meat",
        img: "/products/Pandereta-Carne.png",
        bg: "#ffb82e",
        color: "#d70321",
        id: "pandereta-carne",
        food_details:
          "Slow-braised pulled pork cooked in a carefully seasoned sauce with smoked paprika and natural spices. A hearty, comforting choice that's filling and deeply satisfying — great for families and big appetites. The flavor is savory, warming, and rich with a subtle smoky undertone and a soft, pull-apart texture that works perfectly in buns, wraps, or rice dishes.",
      },
    ],
  },
];

export const PRODUCTS_SECTIONS = [
  {
    bg: "/products/SECTION_1.jpg",
    left: "the new",
    centerText: "jar",
    right: "ready to eat",
    yapping_with_crown:
      "we preserve tradition in a revolutionary and innovative container. your stuffed piquillo peppers are ready to eat and share. treat yourself to the pleasure of an unparalleled experience.",
  },
  {
    bg: "/products/SECTION_2.jpg",
    left: "the tradition",
    centerText: "can",
    right: "a real flavor",
    yapping_with_crown:
      "from navarra, stuffed piquillo peppers in their original container. a tribute to our origins and traditions, an ode to our history, a tribute to who we were and who we are. appreciation and respect for the heritage we have received.",
  },
  {
    bg: "/products/SECTION_3.jpg",
    left: "creativity",
    centerText: "bag",
    right: "versatile",
    yapping_with_crown:
      "we know how to make your life easier, which is why we offer a solution that is as simple as it is delicious. with all the nutritional value, you can enjoy the finest stuffed piquillo peppers anytime and anywhere. you couldn't ask for more.",
  },
  {
    bg: "/products/SECTION_4.jpg",
    left: "greatness",
    centerText: "tins",
    right: "sharing",
    yapping_with_crown:
      "doing things on a grand scale is a great pleasure. being able to share it with more and more people, reaching the whole world. no one should be able to say they haven't tasted the finest stuffed piquillo peppers on the planet.",
  },
];

export const ALL_PRODUCTS: ProductType[] = PRODUCTS.flatMap(
  (cat) => cat.menu,
);
