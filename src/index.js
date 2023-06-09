import React from "react";
import { createRoot } from "react-dom/client";

//css
import "./index.css";

function FlowerList() {
  return (
    <section className="flower-list">
      <Flower
        img={midAtlanticFlowers[0].imgSrc}
        name={midAtlanticFlowers[0].name}
      />
      <Flower
        img={midAtlanticFlowers[1].imgSrc}
        name={midAtlanticFlowers[1].name}
      />
    </section>
  );
}

const Flower = ({ img, name: { common, binomial } }) => {
  return (
    <article className="flower">
      <img src={img} alt="" />
      <h1>{common}</h1>
      <h4>{binomial.toUpperCase()}</h4>
    </article>
  );
};

const midAtlanticFlowers = [
  {
    name: {
      common: "Bleeding Heart",
      binomial: "Dicentra Spectabilis",
    },
    imgSrc:
      "https://www.gardenia.net/storage/app/public/uploads/images/200/DSC_0575.webp",
  },
  {
    name: { common: "Bleeding Heart", binomial: "Dicentra Spectabilis" },
    imgSrc:
      "https://www.gardenia.net/storage/app/public/uploads/images/200/05b1e713f535fb2fbb106b9c036307bc.webp",
  },
];

createRoot(document.getElementById("root")).render(<FlowerList />);

// ReactDom render no longer supported after React 18
// ReactDom.render(<FlowerList />, document.getElementById("root"));
