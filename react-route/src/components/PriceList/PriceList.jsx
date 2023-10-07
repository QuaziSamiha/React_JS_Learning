// import React from "react";

import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

function PriceList() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch("prices.json")
      .then((res) => res.json())
      .then((data) => setPrices(data));
  }, []);

  return (
    <>
      <h1 className="text-5xl p-12 m-6 text-purple-900 bg-purple-400 font-bold">
        Awesome Affordable Price
      </h1>

      <div className="grid md:grid-cols-3 gap-3">
        {prices.map((price) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </>
  );
}

export default PriceList;
