import React from "react";
import { useQuery } from "react-query";

import { getStars } from "../../services/star";
import useQueryParams from "../../hooks/useQueryParams";

import header from "../../assets/images/header.png";
import Table from "../../components/table/Table";
import Button from "../../components/button/Button";
import Rating from "../../components/rating/Rating";

const Listing = () => {
  const { query } = useQueryParams();
  const { data: stars, isLoading } = useQuery(["stars", query], getStars, {
    refetchOnWindowFocus: false,
  });

  const headers = [
    { text: "Name", color: "secondary" },
    { text: "Email", color: "secondary" },
    { text: "Product", color: "secondary opacity-50" },
    { text: "Rating", color: "secondary opacity-50" },
    { text: "Action", color: "secondary opacity-50" },
  ];

  return (
    <div className="relative">
      {/* Header */}
      <div className="flex flex-col gap-5 top-36">
        <div className="relative">
          <img
            src={header}
            className="w-full h-full lg:h-[300px] object-cover  "
          />
          <div className="bg-secondary inset-0 absolute w-full h-full opacity-50  " />
        </div>
        <div className="text-white absolute text-center py-5 sm:py-10 md:py-14 xl:py-20 px-12 md:px-36 lg:px-52">
          <h1 className="text-md sm:text-2xl md:text-4xl font-bold uppercase mb-1 sm:mb-5">
            Listing
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

      {/* Data */}
      <div className="m-5 p-5  sm:m-10 sm:p-10 shadow-lg bg-white -mt-8 sm:-mt-14 z-10 relative">
        <div className="text-secondary text-lg sm:text-2xl font-semibold uppercase leading-[33.60px] tracking-tight mb-5">
          LIST OF PRODUCTS
        </div>
        <Table data={stars} headers={headers} isFetching={isLoading}>
          {stars?.items?.map((star) => {
            return (
              <tr>
                <td className="px-4 py-3">{star?.name}</td>
                <td className="px-4 py-3">{star?.email}</td>
                <td className="px-4 py-3">{star?.Product?.name}</td>
                <td className="px-4 py-3">
                  <Rating rating={star?.rating} />
                </td>
                <td className="px-4 py-3">
                  <Button className="rounded-lg px-1">View Details</Button>
                </td>
              </tr>
            );
          })}
        </Table>
      </div>
    </div>
  );
};

export default Listing;
