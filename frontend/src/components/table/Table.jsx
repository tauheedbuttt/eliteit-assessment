import Columns from "./columns/Columns";
import Footer from "./footer/Footer";
import Loader from "../loader/Loader";

import Empty from '../../assets/images/empty.png';

const Table = ({
  headers,
  children,
  data,
  isFetching = false,
  body,
}) => {
  return (
    <div className="bg-white relative sm:rounded-lg overflow-hidden">
      {/* Data */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          {/* Head */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            {headers && headers?.length > 0 && <Columns headers={headers} />}
          </thead>
          {/* Rows */}

          <tbody className={body}>
            {isFetching ? (
              <tr>
                <td colSpan={headers?.length} className="text-center py-10">
                  <Loader isLoading={isFetching} size={50} />
                </td>
              </tr>
            ) :
              data?.total == 0 || !data?.total
                ? (
                  <tr >
                    <td colSpan={headers?.length}>
                      <div className="flex flex-col gap-4 items-center justify-center py-20 ">
                        <img src={Empty} alt="empty" className="w-28" />
                        <span className="text-primary">No Items Found</span>
                      </div>
                    </td>
                  </tr>
                )
                : (
                  children
                )}
          </tbody>
        </table>
      </div>

      <Footer data={data} pages={data?.pages} />
    </div>
  );
};

export default Table;