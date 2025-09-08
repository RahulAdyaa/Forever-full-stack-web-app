import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title.jsx";
import ProductItem from "./ProductItem.jsx";

const BestSeller = () => {
  const { products } = useContext(ShopContext) ?? {};
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    const list = Array.isArray(products) ? products : [];
    console.log("BestSeller: products length:", list.length);

    if (list.length === 0) {
      setBestSeller([]);
      return;
    }

    // Defensive check: accept boolean true or string "true" or numeric 1
    const isBS = (v) => v === true || v === "true" || v === 1 || v === "1";

    const filtered = list.filter((item) => {
      if (!item || typeof item !== "object") return false;
      // prefer camelCase, but accept lowercase too
      if (isBS(item.bestSeller)) return true;
      if (isBS(item.bestseller)) return true;
      // optional: if no flag exists, you could check sales/rating fields here
      return false;
    });

    console.log("BestSeller: filtered count:", filtered.length, filtered.slice(0, 3));
    setBestSeller(filtered.slice(0, 5));
  }, [products]);


  // in the page console (while the app is loaded)
    useEffect(()=>{
        console.log('products length:', products?.length);
        console.log('first product:', products && products[0]);
        console.log('first product keys:', products && Object.keys(products[0] || {}));
        console.log('any product with bestSeller:', products && products.find(p => p.bestSeller || p.bestseller));

    },[])

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.length === 0 ? (
          <p className="col-span-full text-center text-sm text-gray-500">No bestsellers to show.</p>
        ) : (
          bestSeller.map((item) => (
            <ProductItem
              key={item._id ?? item.id}
              id={item._id ?? item.id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default BestSeller;
