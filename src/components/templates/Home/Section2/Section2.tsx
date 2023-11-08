import React from 'react';
import Marquee from 'react-fast-marquee';

const Section2 = () => {
  return (
    <>
      <div className="flex h-[50px] items-center bg-[#212322]">
        <Marquee autoFill={true}>
          {[...Array(10)].map((_, index) => {
            return (
              <p className="px-4 font-expandedregular text-lg text-white" key={index}>
                LOREM IPSUM
              </p>
            );
          })}
        </Marquee>
      </div>
    </>
  );
};

export default Section2;
