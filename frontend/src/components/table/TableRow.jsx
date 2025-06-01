import React from "react";
import UserData from "../../context/userData/userData";
import { useContext } from "react";

function TableRow() {
  const { userData } = useContext(UserData);

  const user = userData?.users;

  return (
    <>
      {user?.map((data, id) => {
        return (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={id}
          >
            <td className="px-6 py-4">{data?.id}</td>
            <td className="px-6 py-4">{data?.firstName}</td>
            <td className="px-6 py-4">{data?.role}</td>
            <td className="px-6 py-4">{data?.gender}</td>
            <td className="px-6 py-4">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit user
              </a>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableRow;
