import React from "react";
import { useLoaderData } from "react-router-dom";

const ToyInfo = () => {
    const toys = useLoaderData();

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            <img
              alt="Les Paul"
              src={toys.pictureURL}
              className="aspect-square w-full rounded-xl object-cover"
            />

            
          </div>

          <div className="sticky top-0">
            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">
                  {toys.name}
                </h1>

                <p className="text-sm">Seller: {toys.sellerName}</p>
                <p className="text-sm"><small>Seller Email: ${toys.sellerEmail}</small></p>

                <div className="-ms-0.5 flex">
                  <svg
                    className="h-5 w-5 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.707 2.293a1 1 0 011.414 0l3.586 3.586a1 1 0 010 1.414l-7.586 7.586a1 1 0 01-1.414 0L2.293 7.707a1 1 0 010-1.414l3.586-3.586a1 1 0 011.414 0zM9 4.414L5.414 8 9 11.586 12.586 8 9 4.414z"
                      clipRule="evenodd"
                    />
                  </svg>

                  {/* Repeat the SVG elements to match the example */}
                </div>
              </div>

              <p className="text-lg font-bold">${toys.price}</p>
              
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>
                  {toys.description}
                </p>
              </div>

              
            </div>

            <form className="mt-8">
             

              <fieldset className="mt-4">
                <legend className="mb-1 text-sm font-medium">Quantity</legend>

                <div className="flex flex-wrap gap-1">
                  <label htmlFor="size_xs" className="cursor-pointer">
                    <input
                      type="radio"
                      name="size"
                      id="size_xs"
                      className="peer sr-only"
                    />

                    <span className="group inline-flex h-10 w-10 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                     {toys.quantity}
                    </span>
                  </label>

                  {/* Repeat the size radio buttons to match the example */}
                </div>
              </fieldset>

              <div className="mt-8 flex gap-4">
                <div>
                  <label htmlFor="quantity" className="sr-only">
                    Qty
                  </label>

                  <input
                    type="number"
                    id="quantity"
                    min="1"
                    value="1"
                    className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                  />
                </div>

                <button
                  type="submit"
                  className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyInfo;
