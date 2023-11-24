import { Button } from '@/components/ui/button/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ornaments = [
  { path: '/home/ornamen6.png', style: 'left-0 top-0 w-[100px] md:w-[220px] sm:w-[150px]' },
  { path: '/home/ornamen7.png', style: 'left-0 bottom-0 w-[130px] md:w-[220px] sm:w-[150px]' },
  { path: '/home/ornamen8.png', style: 'sm:right-[5%] top-0 w-[150px] md:w-[270px] sm:w-[200px] right-0' },
  { path: '/home/ornamen9.png', style: 'bottom-0 w-[130px] md:w-[220px] sm:w-[180px] right-0' }
];

const Section4 = () => {
  return (
    <>
      <motion.div
        className="relative flex min-h-[80vh] flex-col items-center justify-center gap-8 sm:min-h-[70vh]"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        {ornaments.map((data, index) => {
          return (
            <Image
              src={data.path}
              width="0"
              height="0"
              sizes="100%"
              className={cn('absolute h-auto', data.style)}
              key={index}
              alt="Ornamen"
            />
          );
        })}
        <p className="text-center font-integralbold text-5xl">LETS COOK</p>
        <p className="w-[80%] text-center text-base sm:w-[60%] sm:text-lg md:w-[40%]">
          Feeling inspired? Dive into our fascinating world of dimsum customization and let your imagination run wild in
          our kitchen! Click the button to unleash your dimsum potential.
        </p>
        <div className="z-10 flex flex-row gap-4">
          <Link href="/order">
            <Button className="h-[50px] w-[150px] rounded-[16px] bg-[#FF5124] font-bold uppercase hover:bg-[#FF5124]/80 sm:w-[180px]">
              Start Creating
            </Button>
          </Link>
        </div>
      </motion.div>
    </>
  );
};

export default Section4;
