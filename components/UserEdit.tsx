"use client";

import React, { useEffect, useState } from "react";

import TableComponent from "@/components/UI Components/TableComponent";
import { useUsersActions, useUsersState } from "@/contexts/UsersContext";
import FilterComponent from "@/components/UI Components/FilterComponent";
import { useRouter } from "next/navigation";

const options = [
   {
      value: "firstName",
      label: "First Name",
   },
   {
      value: "lastName",
      label: "Last Name",
   },
   {
      value: "email",
      label: "Email",
   },
];
export default function UserEdit() {
   const { getUsers } = useUsersActions();
   const router = useRouter();
   const { data } = useUsersState();
   const [filteredData, setFilteredData] = useState<any>(data);

   const allowedProperties = ["firstName", "lastName", "email"];
   useEffect(() => {
      async function fetchData() {
         await getUsers();
      }

      fetchData();
   }, []);
   useEffect(() => {
      setFilteredData(data);
   }, [data]);

   const handleClick = (item: any) => {
      router.push(`users-edit/${item._id}`);
   };

   const handleFilterChange = ({ selectedOption, searchValue }: any) => {
      const updatedFilteredData = data?.filter((item: any) => {
         return item[selectedOption]
            .toLowerCase()
            .includes(searchValue.toLowerCase());
      });
      setFilteredData(updatedFilteredData);
   };
   return (
      <>
         <div className={""}>
            <div className=" flex justify-center sm:mr-72">
               <h1 className="text-3xl font-bold text-gray-700">Users List</h1>
            </div>
            <div className="flex flex-col">
               <FilterComponent
                  options={options}
                  handleChange={handleFilterChange}
               />
               <TableComponent
                  allowedProperties={allowedProperties}
                  data={filteredData}
                  handleClick={handleClick}
               />
            </div>
         </div>
      </>
   );
}
