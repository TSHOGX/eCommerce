"use client";

import { Product } from "@/lib/types";
import { Button } from "@nextui-org/react";
import React, { MouseEvent, useState } from "react";
import AddToCartButton from "./add-to-cart-button";

export default function ProductSingle({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  function handleSizeClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    const target = e.target as Element;
    setSelectedSize(target.id);
  }

  function handleImageClick(
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) {
    const target = e.target as Element;
    setSelectedImage(target.id);
  }

  return (
    <div className=" container mx-auto">
      <div className=" mx-auto w-fit my-20">
        <div className=" flex flex-col gap-12 lg:gap-20 lg:flex-row">
          <div className=" flex flex-col sm:flex-row gap-3 mx-auto w-fit lg:min-w-[556px]">
            <img
              className=" w-80 h-fit block sm:hidden"
              key={product.id}
              src={selectedImage}
              alt={product.name}
            />
            <div className=" no-scrollbar flex flex-row sm:flex-col gap-4 max-w-xs sm:max-w-none max-h-none sm:max-h-[450px] overflow-auto">
              {product.images.map((imageURL, imageURLInedx) => (
                <button
                  key={imageURLInedx}
                  onClick={(e) => handleImageClick(e)}
                >
                  <img
                    key={imageURLInedx}
                    id={imageURL}
                    className=" w-20 h-20 max-w-none"
                    src={imageURL}
                    alt={imageURLInedx.toString()}
                  />
                </button>
              ))}
            </div>
            <img
              className=" w-96 h-fit hidden sm:block"
              key={product.id}
              src={selectedImage}
              alt={product.name}
            />
          </div>

          <div className=" flex flex-col mx-auto gap-14 lg:min-w-[350px] max-w-xs lg:max-w-lg mb-20">
            <div className=" flex flex-col gap-3">
              <div className=" text-2xl font-bold">{product.name}</div>
              <div className=" text-xl ">{product.subtitle}</div>
              <div className=" text-base font-semibold text-gray-700">
                ${product.price}
              </div>
            </div>

            <div className=" flex flex-col gap-3">
              <div>Select Size</div>
              <div className=" flex flex-wrap gap-3">
                {product.size.map((size) => (
                  <Button
                    className={
                      size == selectedSize ? "bg-gray-200 w-36" : "w-36"
                    }
                    variant="bordered"
                    key={size}
                    id={size}
                    onClick={(e) => handleSizeClick(e)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            <div className=" ">
              <AddToCartButton
                productID={product.id}
                selectedSize={selectedSize}
              />
            </div>

            <div className=" text-lg pr-8">{product.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
