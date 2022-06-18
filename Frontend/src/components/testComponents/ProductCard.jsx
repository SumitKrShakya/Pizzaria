import React from "react";

const ProductCard = (props) => {
  //   const {
  //     _id,
  //     type,
  //     name,
  //     image,
  //     description,
  //     discount,
  //     time,
  //     vegetarian,
  //     size,
  //   } = props;

  const _id = 24;
  const type = "pizza";
  const name = "Veggie Feast Veggie Feast Veggie Feast Veggie Feast";
  const image =
    "https://api.pizzahut.io/v1/content/en-in/in-1/images/pizza/veggie-feast.c83561d7dd57a45adea3db7e8ee6914e.1.jpg?width=800";
  const description = "Herbed Onion & Green Capsicum, Sweet Corn.";
  const discount = 25;
  const time = 40;
  const vegetarian = true;
  const size = [
    {
      name: "Small",
      price: 99,
      quantity: 11,
    },
    {
      name: "Medium",
      price: 149,
      quantity: 0,
    },
    {
      name: "Large",
      price: 199,
      quantity: 2,
    },
  ];
  const vegOrNonVeg = vegetarian === true ? "vegUrl" : "Non-vegUrl";

  return (
    <div className="shadow-lg m-8  w-96 rounded-lg hover:shadow-xl">
      <div className="overflow-hidden rounded-t-lg relative">
        <img className="hover:scale-105 h-full" src={image} alt={name} />
        <div className="absolute bg-gradient-to-r from-blue-500 to-cyan-500 rounded-r-lg text-white p-1 bottom-2 left-0">
          {discount}% OFF
        </div>
        <div className="absolute bottom-2 right-2 rounded bg-gradient-to-r from-green-600 to-emerald-600 p-1 text-white">
          {time} min
        </div>
      </div>
      <div className="p-4">
        <div className="text-xl leading-8">
        <img
              className="w-6 h-6 float-right"
              src={vegetarian ? "/svg/veg.svg" : "/svg/non-veg.svg"}
              alt={vegetarian ? "Vegetarian" : "Non-Vegetarian"}
            />
          {name}

        </div>
        <div className="text-gray-600">{description}</div>
        <hr />
      </div>
    </div>
  );
};

export default ProductCard;
