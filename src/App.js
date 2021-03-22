import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import data from "./data.json";
import moment from "moment";
import { getInitials } from "./utils";

export default function App() {
  const [tableData, setTableData] = useState(data);
  const [searchText, setSearchText] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");

  var total = 0;
  tableData?.data?.slice(0, 1000)?.map((grade) => {
    total += grade.iq;
  });
  const searchByName = () => {
    const listByName = data?.data
      ?.filter(
        (p) =>
          p.firstName.toLowerCase().match(searchText.toLowerCase()) ||
          p.lastName.toLowerCase().match(searchText.toLowerCase()) ||
          p.email.toLowerCase().match(searchText?.toLowerCase())
      )
      .filter((d) => d.gender.toLowerCase().match(gender.toLowerCase()))
      .filter((e) => e.city.toLowerCase().match(city.toLowerCase()));

    tableData.data = [...listByName];
    setTableData({ ...tableData });
  };

  useEffect(() => {
    searchByName();
  }, [searchText, gender, city]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto pt-6 ">
        <div className="grid grid-cols-6 gap-6 mt-20">
          <div className="col-span-6 sm:col-span-2">
            <input
              type="text"
              name="search"
              id="search"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              placeholder="Search by name and email..."
              className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-900 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-2">
            <input
              type="text"
              name="gender"
              id="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              placeholder="Search by gender..."
              className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="col-span-6 sm:col-span-2">
            <input
              type="text"
              name="city"
              id="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              placeholder="Search by city..."
              className="mt-1 p-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="w-full shadow-md justify-between rounded-md p-6 flex ">
          <div>
            <span>Average IQ</span>
          </div>
          <div>
            <span>
              {tableData?.data?.length > 0
                ? total / tableData?.data?.slice(0, 1000)?.length
                : 0}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y  divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Address
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        DOB
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Gender
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        City
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        IQ
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>

                  <tbody className="bg-white divide-y h-screen overflow-y-auto divide-gray-200">
                    {tableData?.data?.slice(0, 1000)?.map((record, index) => (
                      <tr key={`${index}_record`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <div className="bg-gray-200 text-gray-500 p-2 rounded-full">
                                {getInitials(
                                  `${record?.firstName} ${record?.lastName}`
                                )}
                              </div>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {record?.firstName} {record?.lastName}
                              </div>
                              <div className="text-sm text-gray-500">
                                {record?.email}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-500">
                            {record?.address}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {moment(record?.dob).format("LL")}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                            {record?.gender}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record?.city}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {record?.iq}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {tableData?.data?.length === 0 && (
                  <div className="w-full p-8 flex justify-center items-center">
                    <span>No records found!</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
