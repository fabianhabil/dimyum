import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ornaments = [
  {
    path: '/home/ornamen1.png',
    style: '-left-1 top-4 w-[80px] sm:w-[120px]'
  },
  { path: '/home/ornamen2.png', style: 'left-8 bottom-0 w-[120px] sm:w-[230px]' },
  { path: '/home/ornamen3.png', style: 'left-[45%] top-[20%] sm:w-[200px] w-[120px] sm:flex hidden' },
  { path: '/home/ornamen4.png', style: '-right-0 top-4 w-[100px] sm:w-[150px]' },
  { path: '/home/ornamen5.png', style: 'right-8 bottom-0 w-[80px] sm:w-[150px]' }
];

const Section1 = () => {
  return (
    <>
      <div className="relative">
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

        <div className="container flex h-[91vh] items-center justify-between">
          <motion.div
            className="flex flex-col gap-4 sm:gap-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: [0, 0.71, 0.2, 1.01]
            }}
          >
            <p className={cn('font-integralbold text-5xl text-black sm:text-7xl')}>
              CREATE YOUR <br className="hidden sm:flex" /> OWN DIMSUM
            </p>
            <p className="text-base sm:w-[90%] sm:text-lg">
              Make your custom dimsum at Dimyum. Choose toppings, sauces, and enjoy!
            </p>
          </motion.div>

          <Image
            src={'/home/dimsum.png'}
            width="0"
            height="0"
            sizes="100%"
            className={'hidden h-auto w-[450px] sm:flex'}
            alt="Ornamen"
          />
        </div>
      </div>
    </>
  );
};

export default Section1;
