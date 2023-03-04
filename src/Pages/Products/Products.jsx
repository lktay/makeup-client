import React, { useState, useEffect } from "react";
import axios from "axios";
import MakeupCard from "../../Components/Makeup Card/MakeupCard";
import { Button } from "@mui/material";
import "./Products.css";

const Database = "http://localhost:3001";

const Products = () => {
  const [makeup, setMakeup] = useState([]);

  useEffect(() => {
    getMakeup();
  }, []);

  const getMakeup = async () => {
    try {
      const response = await axios.get(`${Database}/productsapi`);
      setMakeup(response.data);
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const addFavourites = async (item) => {
    const data = await fetch(`${Database}/product/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: item.name,
        brand: item.brand,
        price: item.price,
        imageUrl: item.image_link,
        description: item.description,
      }),
    }).then((res) => res.json());
    console.log(`added ${item.name}`);
    setMakeup([...makeup, data]);
  };

  return (
    <div>
      <h2>Products list</h2>
      <div className="flex">
        {makeup.map(({ name, brand, price, image_link, description, id }) => (
          <div key={id}>
            <MakeupCard
              name={name}
              brand={brand}
              price={price}
              image_link={image_link}
              description={description}
              id={id}
            />
            <Button
              size="small"
              onClick={() =>
                addFavourites({
                  name,
                  brand,
                  price,
                  image_link,
                  description,
                  id,
                })
              }
            >
              Add
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
