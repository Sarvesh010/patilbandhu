// import React, { useState } from "react";
// import talati from "./images/talati-logo.png";
// import rajyog from "./images/rajyog-logo.png";

// const About = () => {
//   const [active, setActive] = useState(false);

//   const showFlex = () => {
//     setActive(!active);
//   };

//   return (
//     <div>
//       <div className="text-center py-20">
//         <h2 className="text-5xl font-bold">Welcome To Patil Bandhu</h2>
//         <h4 className="text-xl py-3">
//           Where exceptional flavors meet trusted brands
//         </h4>
//         <p className="text-xl">
//           Get ready to explore our collection of premium spices and packed
//           foods, featuring renowned brands that guarantee quality and
//           satisfaction.
//         </p>
//       </div>
//       <div className={showFlex ? "flex justify-between mx-40" : "hidden"}>
//         <img src={talati} alt="talati logo" />
//         <img src={rajyog} alt="talati logo" />
//         <img src={talati} alt="talati logo" />
//         <img src={rajyog} alt="talati logo" />
//       </div>

//       <div className={active ? "flex-col flex items-center " : "hidden"}>
//         <img src={talati} alt="talati logo" />
//         <img src={rajyog} alt="talati logo" />
//         <img src={talati} alt="talati logo" />
//         <img src={rajyog} alt="talati logo" />
//       </div>
//     </div>
//   );
// };

// export default About;

import React, { useState, useEffect } from "react";
import talati from "./images/talati-logo.png";
import rajyog from "./images/rajyog-logo.png";

const About = () => {
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth <= 768); // Adjust the breakpoint according to your needs
    };

    handleResize(); // Set the initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="text-center py-20">
        <h2 className="text-5xl font-bold italic">
          Welcome To Patil Bandhu
          <br /> Nashik
        </h2>
        <h4 className="text-xl py-3">
          Where exceptional flavors meet trusted brands
        </h4>
        <p className="text-xl">
          Get ready to explore our collection of premium spices and packed foods{" "}
          <br /> Featuring renowned brands that guarantee quality and
          satisfaction.
        </p>
      </div>

      <div
        className={`flex ${
          isMediumScreen
            ? "flex-col items-center gap-10"
            : "justify-between mx-40"
        }`}
      >
        <img
          src={talati}
          alt="talati logo"
          className={`max-w-full ${isMediumScreen ? "w-1/4" : "w-auto"}`}
        />
        <img
          src={rajyog}
          alt="rajyog logo"
          className={`max-w-full ${isMediumScreen ? "w-1/4" : "w-auto"}`}
        />
        <img
          src={talati}
          alt="talati logo"
          className={`max-w-full ${isMediumScreen ? "w-1/4" : "w-auto"}`}
        />
        <img
          src={rajyog}
          alt="rajyog logo"
          className={`max-w-full ${isMediumScreen ? "w-1/4" : "w-auto"}`}
        />
      </div>
    </div>
  );
};

export default About;
