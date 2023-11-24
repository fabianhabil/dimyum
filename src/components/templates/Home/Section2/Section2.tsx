import React from 'react';
import Marquee from 'react-fast-marquee';

const marqueeText = ['Best Quality Guarantee', 'Effortless Ordering', 'Tasty Dimsum', 'Authentic Flavors', 'Dimyum'];

const Section2 = () => {
  return (
    <>
      <div className="flex h-[75px] items-center bg-[#212322]">
        <Marquee autoFill={true}>
          {marqueeText.map((data, index) => {
            return (
              <p className="px-4 font-expandedregular text-lg uppercase text-white" key={index}>
                {data}
              </p>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default Section2;
