export const PRODUCTS_3_CARDS = [
  {
    img: "/home-card-lata.jpg",
    initial: { rotate: 25, left: "50%" },
    whileInView: {
      rotate: -20,
      left: "20%",
      y: 50,
    },
    whileHover: {
      scale: 1.1,
      y: 80,
      x: -40,
      transition: { duration: 0.3 },
    },
  },
  {
    img: "/home-card-vetro.jpg",
    initial: { right: "50%" },
    whileInView: { right: "50%" },
    whileHover: { scale: 1.1, y: -50, transition: { duration: 0.3 } },
  },
  {
    img: "/home-card-pimiento.jpg",
    initial: { rotate: -25, right: "50%" },
    whileInView: {
      rotate: 20,
      right: "20%",
      y: 50,
    },
    whileHover: {
      scale: 1.1,
      y: 80,
      x: 40,
      transition: { duration: 0.3 },
    },
  },
];
