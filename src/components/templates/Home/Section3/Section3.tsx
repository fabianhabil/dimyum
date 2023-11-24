import { motion } from 'framer-motion';
import Image from 'next/image';

const Section3 = () => {
  return (
    <>
      <motion.div
        className="relative flex min-h-[80vh] flex-row flex-wrap items-center justify-center gap-4 py-8 sm:min-h-[70vh] md:gap-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.4,
          delay: 0.3,
          ease: [0, 0.71, 0.2, 1.01]
        }}
      >
        <div className="flex w-[80%] flex-col items-center gap-4 px-4 md:w-[30%]">
          <Image
            src="/sticker/1.png"
            alt="Sticker 1"
            width={0}
            height={0}
            sizes="100%"
            className="h-auto w-auto min-w-[150px]"
          />
          <p className="text-center md:text-lg">
            We use high-quality ingredients to ensure every dimsum dish meets our quality standards.
          </p>
        </div>
        <div className="flex w-[80%] flex-col items-center gap-4 px-4 md:w-[30%]">
          <Image
            src="/sticker/2.png"
            alt="Sticker 2"
            width={0}
            height={0}
            sizes="100%"
            className="h-auto w-auto min-w-[150px]"
          />
          <p className="text-center md:text-lg">
            Our user-friendly ordering process ensures a smooth and quick experience.
          </p>
        </div>
        <div className="flex w-[80%] flex-col items-center gap-4 px-4 md:w-[30%]">
          <Image
            src="/sticker/3.png"
            alt="Sticker 3"
            width={0}
            height={0}
            sizes="100%"
            className="h-auto w-auto min-w-[150px]"
          />
          <p className="text-center md:text-lg">
            Enjoy the authentic flavors of dimsum with a modern twist for a delightful culinary experience.
          </p>
        </div>
      </motion.div>
    </>
  );
};

export default Section3;
