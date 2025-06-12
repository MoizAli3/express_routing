import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Modal, Button, BackgroundImage } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

function TableRow({ data }) {
  const [userDetail, setUserDetail] = useState("");
  const [opened, { open, close }] = useDisclosure(false);

  const product = data?.products;

  console.log(product);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto">
        <section className="bg-white antialiased dark:bg-gray-900 md:px-4 ">
          <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
            <div className="flex justify-between">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl md:mb-6">
                Product Overview
              </h2>
              <button
                type="button"
                className="text-white bg-blue-700 m-auto hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-0 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Edit Product
              </button>
            </div>
            <div className="py-4 md:py-8">
              <div className="mb-4 grid gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-16">
                <div className="space-y-4">
                  <div className="flex space-x-4">
                    <img
                      className="w-32 rounded-lg"
                      src={userDetail.images}
                      alt="Helene avatar"
                    />
                  </div>
                  <dl className="">
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Title
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      {userDetail.title}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Description
                    </dt>
                    <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      {userDetail.description}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Price
                    </dt>
                    <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      ${userDetail.price}
                    </dd>
                  </dl>
                </div>
                <div className="space-y-4">
                  <dl>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Brand
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      {userDetail.brand}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Category
                    </dt>
                    <dd className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                      {userDetail.category}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="font-semibold text-gray-900 dark:text-white">
                      Stock
                    </dt>
                    <dd className="text-gray-500 dark:text-gray-400">
                      {userDetail.availabilityStatus}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Warranty Information
                    </dt>
                    <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      {userDetail.warrantyInformation}
                    </dd>
                  </dl>
                  <dl>
                    <dt className="mb-1 font-semibold text-gray-900 dark:text-white">
                      Rating
                    </dt>
                    <dd className="flex items-center space-x-4 text-gray-500 dark:text-gray-400">
                      {userDetail.rating}
                    </dd>
                  </dl>
                </div>
              </div>
              <button
                type="button"
                data-modal-target="accountInformationModal2"
                data-modal-toggle="accountInformationModal2"
                className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-auto"
              >
                <svg
                  className="-ms-0.5 me-1.5 h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
                Edit your data
              </button>
            </div>
          </div>
        </section>
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
