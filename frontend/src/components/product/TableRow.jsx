import React, { useState } from "react"; 
import { FaEye } from "react-icons/fa";
import { Modal, Button, BackgroundImage } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function TableRow({data}) {
  const [setUserDetail] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const product = data?.products;

  // console.log(product);
  

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto">
        <div className="flex justify-center space-x-4 w-5xl mb-3">
          <div className="bg-white overflow-hidden shadow rounded-lg border mx-4 w-4xl box">
            <div className="px-4 py-5 sm:px-6">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-4xl leading-6 text-gray-900">
                  {/* {userDetail.firstName} */}
                </h3>
                <button className="text-sm font-medium text-gray-500">
                  Update
                </button>
              </div>
              <p className="mt-4 max-w-2xl text-2xl font-bold text-sm text-gray-500">
                {/* {userDetail.role} */}
              </p>
            </div>
            <div className=" flex justify-around border-t border-gray-200 px-4 py-5 sm:p-0">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.firstName} {userDetail.lastName} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Email address
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.email} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Phone number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.phone} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Gender</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.gender} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Age</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.age} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Username</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.username} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Weight</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.weight} Kg */}
                  </dd>
                </div>
              </dl>
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    Blood Group
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.bloodGroup} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    University
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.university} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">Eye Color</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.eyeColor} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">
                    EIN Number
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.ein} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-bold text-gray-500">DOB</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.birthDate} */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Height</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.height} cm */}
                  </dd>
                </div>
                <div className="py-3 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    IP Adress
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {/* {userDetail.ip} */}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Modal>

      {product?.map((data, id) => {
        return (
          <tr
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
            key={id}
          >
            <td className="px-6 py-4">{data?.id}</td>
            <td className="px-6 py-4">{data?.title}</td>
            <td className="px-6 py-4">{data?.category}</td>
            <td className="px-6 py-4">${data?.price} </td>
            <td className="px-6 py-4">
              <button
                className="text-gray-600 w-12 flex justify-center"
                onClick={() => {
                  open();
                  setUserDetail(data);
                }}
              >
                <FaEye />
              </button>
            </td>
          </tr>
        );
      })}
    </>
  );
}

export default TableRow;
