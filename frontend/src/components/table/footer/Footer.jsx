"use client";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import useQueryParams from "../../../hooks/useQueryParams";

const Footer = ({ pages = 0, data }) => {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  const { queryToObject, objToQuery } = useQueryParams();

  const query = queryToObject(searchParams.toString());
  const page = query?.page;
  const limit = query?.limit;

  const isPrev = parseInt(page) - 1 >= 1;
  const isNext = parseInt(page) + 1 <= data?.pages;

  const setPage = (page) => {
    return `${pathname}?${objToQuery({
      ...query,
      page: page < 1 ? 1 : page > pages ? pages : page,
    })}`;
  };

  const showing = {
    start: parseInt(page) * parseInt(limit) - parseInt(limit) + 1,
    end: parseInt(page) * parseInt(limit),
    total: data?.total,
  };

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      {/* {data && data.total > 0 && (
        <span className="text-sm font-normal text-gray-500  ">
          Showing
          <span className="font-semibold text-gray-900  mx-1">
            {showing.start}-{showing.end}
          </span>
          of
          <span className="font-semibold text-gray-900  ml-1">
            {showing.total}
          </span>
        </span>
      )} */}
      <div />
      {pages > 1 && (
        <ul className="inline-flex gap-2 items-center">
          <li>
            <Link
              to={setPage(parseInt(page) - 1)}
              className={`flex text-sm p-1 items-center justify-center  ${isPrev ? "hover:text-gray-700" : "text-gray-300 cursor-default"}`}
            >
              <span >Prev</span>
            </Link>
          </li>
          {Array.from({ length: pages }).map(
            (item, index) =>
              index - 2 < parseInt(page) &&
              parseInt(page) < index + 4 && (
                <li key={index}>
                  <Link
                    to={setPage(index + 1)}
                    className={`flex items-center justify-center text-sm py-2 px-3 leading-tight ${parseInt(page) == index + 1
                      ? "text-white bg-primary-light"
                      : "text-gray-500 bg-white border border-line hover:bg-gray-100 hover:text-gray-700"
                      } rounded-lg`}
                  >
                    {index + 1}
                  </Link>
                </li>
              )
          )}
          <li>
            <Link
              to={setPage(parseInt(page) + 1)}
              className={`flex text-sm p-1 items-center justify-center ${isNext ? "hover:text-gray-700" : "text-gray-300 cursor-default"} `}
            >
              <span >Next</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Footer;
