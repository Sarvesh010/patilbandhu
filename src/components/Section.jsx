import React from "react";

const Section = () => {
  return (
    <div className="flex justify-between px-20">
      <div>
        <h2 className="text-5xl pt-10 italic">Why Us</h2>
      </div>
      <div>
        <ul className="text-3xl py-10 ">
          <li className="py-5 group">
            Uncompromising Quality
            <p className="text-xl hidden group-hover:block">
              We have a relentless dedication to sourcing only the highest
              quality spices and packed foods.
            </p>
          </li>
          <li className="py-5 group">
            Extensive Selection
            <p className="text-xl hidden group-hover:block">
              Our curated range boasts an impressive variety of spices and
              packed foods. From exotic blends to pantry staples.
            </p>
          </li>
          <li className="py-5 group">
            Trusted Partnerships
            <p className="text-xl hidden group-hover:block">
              We have forged strong partnerships with renowned spice brands and
              packed food manufacturers.
            </p>
          </li>
          <li className="py-5 group">
            Exceptional Customer Service
            <p className="text-xl hidden group-hover:block">
              Our friendly and dedicated customer service team is ready to
              assist you, ensuring a seamless ordering experience and prompt
              resolution of any concerns.
            </p>
          </li>
          <li className="py-5 group">
            Reliable Distribution Network
            <p className="text-xl hidden group-hover:block">
              We strive to ensure your orders reach you promptly and in perfect
              condition, wherever you are.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Section;
