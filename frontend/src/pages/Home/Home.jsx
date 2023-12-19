import React from "react";
import { useQuery } from "react-query";

import { getProducts } from "../../services/product";

import waves from "../../assets/images/waves.png";
import header from "../../assets/images/header.png";

import Product from "../../components/home/product/Product";

const Home = () => {
  const { data: products, isLoading } = useQuery(
    ["products", {}],
    getProducts,
    {
      refetchOnWindowFocus: false,
    }
  );

  const data = isLoading ? [1, 2, 3] : products;

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col gap-5 top-36">
        <div className="relative">
          <img
            src={header}
            className="header w-full h-full lg:h-[300px] object-cover "
          />
          <div className="header bg-secondary inset-0  absolute w-full h-full opacity-50 " />
        </div>
        <div className="text-white absolute text-center py-5 sm:py-10 md:py-14 xl:py-20 px-12 md:px-36 lg:px-52">
          <h1 className="text-md sm:text-2xl md:text-4xl font-bold uppercase mb-1 sm:mb-5">
            Solutions that Inspire, Products that Deliver
          </h1>
          <p className="text-[8px] sm:text-[10px] md:text-sm opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tellus neque, malesuada sit amet auctor ac, euismod sed enim. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Donec sed ultricies libero. Morbi porttitor
            semper nibh, bibendum ultricies elit mollis id.
          </p>
        </div>
      </div>

      {/* Products */}
      <div className="p-20 flex flex-col gap-5 relative">
        <img src={waves} className="absolute opacity-5 object-cover w-[90%]" />
        <div className="flex flex-col gap-5">
          <div className="text-center text-secondary text-[28px] font-semibold font-['Montserrat'] uppercase leading-[33.60px] tracking-tight">
            VIEW OUR PRODUCTS
          </div>
          <div className="text-center text-secondary ">
            Lorem Ipsum has been the industry's standard the dummy text ever
            Lorem Ipsum has been the industry's standard. dummy text ever{" "}
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between md:  gap-10">
          {data?.map((item, index) => (
            <Product
              item={item}
              key={index}
              border={index % 2 != 0}
              isLoading={isLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
