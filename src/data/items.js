import img1 from "./assets/herman-armchair.png";
import img2 from "./assets/vica-armchair.png";
import img3 from "./assets/vern-dinno-table-chair.png";
import img4 from "./assets/crain-armchair.png";
import img5 from "./assets/puf.png";
import img6 from "./assets/rendant-lamp.png";
import img7 from "./assets/herman-sofa.png";
import img8 from "./assets/reece-cofee-table.png";
import img9 from "./assets/vern-lamp.png";
import img10 from "./assets/herman-lamp.png";

export const getItemById = (id) =>
  items.find(({ id: itemId }) => itemId === Number(id));

export const getItems = (amount = items.length) => items.slice(0, amount);

export const items = [
  {
    id: 0,
    name: "herman armchair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["solid-wood", "pine"],
    series: ["herman"],
    image: img1
  },
  {
    id: 1,
    name: "vica armchair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["oak", "pine"],
    series: ["vica"],
    image: img2
  },
  {
    id: 2,
    name: "vern dinno table chair",
    price: 100,
    category: ["sofas", "armchair"],
    material: ["oak"],
    series: ["vern"],
    image: img3
  },
  {
    id: 3,
    name: "crain armchair",
    price: 150,
    category: ["sofas", "armchair"],
    material: ["pine"],
    series: ["crain"],
    image: img4
  },
  {
    id: 4,
    name: "puf",
    price: 80,
    category: ["sofas", "armchair"],
    material: ["solid-wood"],
    series: ["loft"],
    image: img5
  },
  {
    id: 5,
    name: "rendant lamp",
    price: 50,
    category: ["lamps"],
    material: ["solid-wood", "oak"],
    series: ["rendant"],
    image: img6
  },
  {
    id: 6,
    name: "herman sofa",
    price: 450,
    category: ["sofas", "armchair"],
    material: ["solid-wood", "pine"],
    series: ["herman"],
    image: img7
  },
  {
    id: 7,
    name: "reece-cofee table",
    price: 580,
    category: ["tables"],
    material: ["oak", "pine"],
    series: ["reece"],
    image: img8
  },
  {
    id: 8,
    name: "vern lamp",
    price: 100,
    category: ["lamps"],
    material: ["pine"],
    series: ["vern"],
    image: img9
  },
  {
    id: 9,
    name: "herman lamp",
    price: 80,
    category: ["lamps"],
    material: ["solid-wood", "oak"],
    series: ["herman"],
    image: img10
  }
];
