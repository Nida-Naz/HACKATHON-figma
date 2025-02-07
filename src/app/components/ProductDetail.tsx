import React from 'react'
import Image from 'next/image'
const ProductDetail = () => {
  return (
    <div>

<div className="container mx-auto px-4 pt-0 pb-4">
      {/* Header Section */}
      <div className="text-left mb-8 bg-[#F6F5FF] w-full h-[286px] ">
      <h1 className="text-4xl font-bold font-sans text-[#151875] pt-28 px-40">Product Detail</h1>
      <p className="text-[#8A8FB9]   mt-2 px-40">Home / Pages / Product Detail</p>
      </div>
     <div className='w-[1170px] h-[509px] items-center mx-52'>                         
      <div className="flex flex-wrap md:flex-nowrap p-2  space-x-2 ">
      {/* Left Side - Gallery */}
      <div className="flex flex-col space-y-2 w-full md:w-1/4 ">
    
        <img
          src="./bag3.png"
          alt="Product 1"
          className=" w-[151px] h-[155px] object-cover rounded-md cursor-pointer"
        />

        <img
          src="./bag4.png"
          alt="Product 2"
          className="  w-[151px] h-[155px] object-cover rounded-md cursor-pointer"
        />
        <img
          src="./bag5.png"
          alt="Product 3"
          className="  w-[151px] h-[155px] object-cover rounded-md cursor-pointer"
        />
      </div>

      {/* Main Image */}
      <div className="w-full md:w-2/4 flex justify-center">
        <img
          src="./Rectangle 138.png"
          alt="Main Product"
          className="  w-[375px] h-[487px] rounded-lg object-contain"
        />
      </div>

      {/* Right Side - Product Details */}
      <div className="w-full md:w-1/3 p-4 space-y-2 ">
        <h1 className="text-4xl font-bold font-sans text-[#0D134E]">Playwood Arm Chair</h1>
        <div className="flex items-center space-x-2">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-[#151875]">(2
            2)</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold text-[#151875] line-through">$32.00</span>
          <span className="text-xl font-bold text-[#FB2E86]">$20.00</span>
        </div>
        <p className="text-[#A9ACC6]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          tellus porttitor purus, et volutpat sit.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Add To Cart
        </button>

        <div className="space-y-2">
          <div>
            <span className="font-semibold">Categories:</span> Furniture, Chairs
          </div>
          <div>
            <span className="font-semibold">Tags:</span> Modern, Stylish
          </div>
          <div>
            <span className="font-semibold">Share:</span>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-blue-600 hover:underline">
                Facebook
              </a>
              <a href="#" className="text-blue-400 hover:underline">
                Twitter
              </a>
              <a href="#" className="text-pink-500 hover:underline">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
 {/* third componant of this Pages */}


    <div className="p-6 bg-gray-50 mt-20">
      {/* Navigation Tabs */}
      <div className="flex space-x-10 text-[#151875] text-2xl font-semibold border-b border-gray-300 pb-2">
        <button className=" underline  hover:underline">Description</button>
        <button className="hover:underline ">Additional Info</button>
        <button className="hover:underline">Reviews</button>
        <button className="hover:underline">Video</button>
      </div>

      {/* Description Section */}
      <div className="mt-4">
        <h2 className="text-x font-semibold font-sans text-[#151875] text-2xl">Varius tempor.</h2>
        <p className="text-[#A9ACC6] text-base mt-2">
          Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et
          eleifend habitasse amet. Montes, mauris varius ac est bibendum scelerisque a, risus ac ante.
          Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat lorem
          erat diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet
          consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc
          nec. Duis, massa viverra.
        </p>
      </div>

      {/* More Details Section */}
      <div className="mt-6">
        <h3 className=" font-semibold mb-2 font-sans text-[#151875] text-2xl">More details</h3>
        <ul className="space-y-2 text-[#A9ACC6] text-base">
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">➔</span>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">➔</span>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">➔</span>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">➔</span>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla lobortis justo netus dis.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-blue-500">➔</span>
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dis diam arcu, nulla lobortis justo netus dis.
          </li>
        </ul>
      </div>
    </div>
{/* Related product */}

<div className='mt-20'>
        <h2 className="text-4xl leading-10 font-sans font-bold text-center text-[#151875] mb-4">Top Categories</h2>
        <div className="grid grid-cols-4 gap-6 justify-items-center mt-6">

          <div className=" w-[270px] h-[380px] p-4 flex flex-col justify-center items-center">
            <div className='bg-[#F6F7FB] h-[340px] w-[270px] rounded-md flex items-center justify-center'>
            <img
              src="./image1.png"
              alt="Cantilever Chair"
              className="h-[340px] w-[270px]  object-cover mb-2"
            />
            </div>
            <h3 className="text-[#151875] text-sm font-normal ">Mens Fashion Wear<span className='text-yellow-500'>★★★★★</span></h3>
           
            <p className="text-[#151875] text-xs font-normal">$43.00</p>
            
          </div>

          
          <div className="  w-[270px] h-[380px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[340px] w-[270px] rounded-md flex items-center justify-center'>
            <img
              src="./image2.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] h-[340px] w-[270px]   object-cover mb-2"
            />
          </div>  
            <h3 className="text-[#151875] text-sm font-normal">Womens Fashion<span className='text-yellow-500'>★★★★★</span></h3>
            <p className="text-[#151875] text-xs font-normal">$67.00</p>
            
          </div>

          <div className="  w-[270px] h-[380px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[340px] w-[270px] rounded-md flex items-center justify-center'>
            <img
              src="./image3.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] h-[340px] w-[270px]  object-cover mb-2"
            />
          </div>  
            <h3 className="text-[#151875] text-sm font-normal">Wolx Dummy Fashion<span className='text-yellow-500'>★★★★★</span></h3>
            <p className="text-[#151875] text-xs font-normal">$67.00</p>
            
          </div>

          <div className="  w-[270px] h-[380px] p-4 flex flex-col justify-center items-center">
          <div className='bg-[#F6F7FB] h-[340px] w-[270px] rounded-md flex items-center justify-center'>
            <img
              src="./image4.png"
              alt="Cantilever Chair"
              className="bg-[#F6F7FB] h-[340px] w-[270px]  object-cover mb-2"
            />
            </div>
            <h3 className="text-[#151875] text-sm font-normal">Top Wall Digital Clock<span className='text-yellow-500'>★★★★★</span></h3>
            <p className="text-[#151875] text-xs font-normal">$51.00</p>
            </div>
        </div> 
        {/* signature */}

     <div className='items-center justify-center px-40 py-6'> 
      <img
      src="./signature.png"
      alt=""
      className='w-[904px] h-[93px] object-cover mb-2'
      />
     </div>
</div>   
</div>
</div>
  )
}

export default ProductDetail