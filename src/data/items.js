import img from "./assets/herman-armchair.png";

export const getItemById = (id) =>
  items.find(({ id: itemId }) => itemId === Number(id));

export const getItems = (amount) => items.slice(0, amount);

export const items = [
  {
    id: 0,
    name: "herman armchair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["solid-wood", "pine"],
    series: ["herman"],
    image: img
  },
  {
    id: 1,
    name: "vica armchair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["oak", "pine"],
    series: ["vica"],
    image: img
  },
  {
    id: 2,
    name: "vern dinno table chair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["oak"],
    series: ["vern"],
    image: img
  },
  {
    id: 3,
    name: "crain armchair",
    price: 150,
    category: ["sofas", "armchair"],
    material: ["pine"],
    series: ["crain"],
    image: img
  },
  {
    id: 4,
    name: "puf",
    price: 80,
    category: ["sofas", "armchair"],
    material: ["solid-wood"],
    series: ["herman"],
    image: img
  },
  {
    id: 5,
    name: "rendant lamp",
    price: 50,
    category: ["lamps"],
    material: ["solid-wood", "oak"],
    series: ["rendant"],
    image: img
  },
  {
    id: 6,
    name: "herman sofa",
    price: 450,
    category: ["sofas", "armchair"],
    material: ["solid-wood", "pine"],
    series: ["herman"],
    image: img
  },
  {
    id: 7,
    name: "reece-cofee table",
    price: 130,
    category: ["tables"],
    material: ["oak", "pine"],
    series: ["reece"],
    image: img
  }
];
