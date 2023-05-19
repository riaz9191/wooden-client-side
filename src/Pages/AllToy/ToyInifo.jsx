import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import useTitle from "../../hook/useTitle";

const ToyInfo = () => {
  const toys = useLoaderData();
  useTitle('ToyInfo')

  const renderRating = () => {
    const rating = Math.floor(toys.rating);
    const starIcons = [];

    for (let i = 0; i < rating; i++) {
      starIcons.push(
        <FaStar key={i} className="h-5 w-5 text-yellow-400" />
      );
    }

    return starIcons;
  };

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
            <div className="p-6 bg-white rounded-xl shadow-lg  border-teal-500 animate-border-glow border-glow-animation">
              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">{toys.name}</h1>
                  <div className="-ms-0.5 flex items-center">
                    {renderRating()}
                  </div>
                  <p className="text-xl">Seller: {toys.sellerName}</p>
                  <p className="text-lg">
                    <small>Seller Email: {toys.sellerEmail}</small>
                  </p>
                  
                </div>

                <p className="text-lg font-bold rounded-3xl">${toys.price}</p>
              </div>

              <div className="mt-4">
                <div className="prose max-w-none">
                  <p className="text-[#8183A1]">{toys.description}</p>
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
                  
                  <button
                    type="submit"
                    className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500 transition-colors duration-300 ease-in-out"
                  >
                    Add to Cart
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToyInfo;
