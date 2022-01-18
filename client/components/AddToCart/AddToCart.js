import React from "react";

const AddToCart = ({
  clothingId,
  type,
  name,
  price,
  description,
  color,
  imageUrl,
}) => {
  let localCartArr = [];
  const localCart = window.localStorage.getItem("cart");
  if (localCart) localCartArr = JSON.parse(localCart);

  let newItem = true;

  localCartArr.forEach((cartItem) => {
    if (cartItem.clothingId === clothingId) {
      cartItem.quantity++;
      newItem = false;
    }
  });
  if (newItem)
    localCartArr.push({
      clothingId,
      type,
      name,
      price,
      description,
      color,
      imageUrl,
    });
  window.localStorage.setItem("cart", JSON.stringify(localCartArr));
  return (
    <div className="add-to-cart">
      <div>
        <button className="add-to-cart btn" onClick={onClick}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
