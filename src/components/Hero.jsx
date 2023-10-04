// import React from "react";
// import hero1 from "./images/hero1.jpg";

// const Hero = () => {
//   return (
//     <div className="absolute h-full w-full">
//       <div
//         className="bg-cover h-screen w-full bg-center flex items-center px-4 opacity-75"
//         style={{ backgroundImage: `url(${hero1})` }}
//       ></div>
//       <div className="relative center bottom-3/4">
//         <h1 className=" text-center md:text-9xl text-6xl text-orange-600 font-bold">
//           पाटील बंधू
//         </h1>
//         <h2 className="text-center md:text-6xl text-4xl text-orange-600 font-bold">
//           नाशिक
//         </h2>
//         <h3 className="text-center md:text-4xl text:4xl py-10 ">
//           Discover the Flavors of Excellence: <br />
//           Your Trusted Distributor of Premium Spices and Delicious Packed Foods.
//         </h3>
//         <div className="flex item-center justify-center gap-5 md:text-2xl ">
//           <button className="bg-orange-200 hover:bg-orange-700 font-bold py-2 px-4 rounded-full shadow-2xl">
//             PRODUCTS
//           </button>
//           <button className="bg-orange-200 hover:bg-orange-700 font-bold py-2 px-4 rounded-full shadow-2xl">
//             CONTACT US
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import React from "react";

const Hero = () => {
  return (
    <div className="bg-hero-image1 w-full h-screen bg-cover bg-center flex items-center px-4">
      <div className="uppercase text-center font-extrabold mt-20 ">
        <h1 className=" text-center md:text-9xl text-6xl text-orange-600 font-bold">
          पाटील बंधू
        </h1>

        <h2 className="text-center md:text-6xl text-4xl text-orange-600 font-bold">
          नाशिक
        </h2>

        <h3 className="text-center md:text-4xl text:4xl py-10 text-white">
          Discover the Flavors of Excellence: <br />
          Your Trusted Distributor of Premium Spices and Delicious Packed Foods.
        </h3>

        <div className="flex item-center justify-center gap-5 md:text-2xl">
          <button className="bg-orange-200 hover:bg-orange-700 font-bold py-2 px-4 rounded-full">
            PRODUCTS
          </button>

          <button className="bg-orange-200 hover:bg-orange-700 font-bold py-2 px-4 rounded-full">
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
