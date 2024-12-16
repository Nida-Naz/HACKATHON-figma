import React from "react";

const ProductCard = () => {
  return (
    <div className="flex flex-col gap-10 p-6 items-center">
      {/* Featured Products */}
      <div>
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-4">Featured Products</h2>
        <div className="grid grid-cols-4 gap-6 justify-items-center">

          <div className="border rounded-md shadow-lg w-[270px] h-[361px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair.png"
              alt="Cantilever Chair"
              className="w-[178px] h-[178px] object-cover mb-2"
            />
            <h3 className="text-[#FB2E86] font-semibold">Cantilever Chair</h3>
            <p className="text-sm text-[#151875]">Code: Y523201</p>
            <p className="text-[#151875] font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg  w-[270px] h-[361px] p-4 flex flex-col justify-center items-center bg-[#2F1AC4] text-white">
            <img
              src="./chair2.png"
              alt="Cantilever Chair"
              className="w-[130px] h-[150px] bg-white object-cover mb-2"
            />
            <h3 className="font-semibold">Cantilever Chair</h3>
            <p className="text-sm">Code: Y523201</p>
            <p className="font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[270px] h-[361px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair3.png"
              alt="Cantilever Chair"
              className="w-[175px] h-[175px] object-cover mb-2"
            />
            <h3 className="text-[#FB2E86] font-semibold">Cantilever Chair</h3>
            <p className="text-sm text-[#151875]">Code: Y523201</p>
            <p className="text-[#151875]font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[270px] h-[361px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair4.png"
              alt="Cantilever Chair"
              className="w-full h-48 object-cover mb-2"
            />
            <h3 className="text-[#FB2E86] font-semibold">Cantilever Chair</h3>
            <p className="text-sm text-[#151875]">Code: Y523201</p>
            <p className="text-[#151875] font-bold">$42.00</p>
          </div>
        </div>
      </div>

      {/* Latest Products */}
      <div>
        <h2 className="text-3xl font-bold text-center text-[#151875] mb-4">Latest Products</h2>
        <div className="grid grid-cols-3 row-auto gap-6 justify-items-center">

          <div className="border rounded-md shadow-lg w-[360px] h-[306px] p-4 justify-center items-center">
            <img
              src="./chair5.png"
              alt="Comfort Handy Craft"
              className="w-[223px] h-[229px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[370px] h-[313.98px] p-4 flex flex-col justify-center items-center bg-white ">
            <img
              src="./chair6.png"
              alt="Comfort Handy Craft"
              className="w-[245px] h-[245px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[360px] h-[306px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair.png"
              alt="Comfort Handy Craft"
              className="w-[221.84px] h-[222.2px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[360px] h-[306px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair7.png"
              alt="Comfort Handy Craft"
              className="w-[267px] h-[277px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[360px] h-[306px] p-4 flex flex-col justify-center items-center">
            <img
              src="chair8.png"
              alt="Comfort Handy Craft"
              className="w-[303px] h-[264px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

          <div className="border rounded-md shadow-lg w-[360px] h-[306px] p-4 flex flex-col justify-center items-center">
            <img
              src="./chair4.png"
              alt="Comfort Handy Craft"
              className="w-[360px] h-[261px] object-cover mb-2"
            />
            <h3 className="font-semibold">Comfort Handy Craft</h3>
            <p className="text-red-400 line-through">$65.00</p>
            <p className="text-gray-800 font-bold">$42.00</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;
