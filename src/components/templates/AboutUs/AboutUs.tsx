import Image from 'next/image';

const AboutUs = () => {
  return (
    <>
      <div
        className="flex h-[150px] items-center justify-center bg-red-500 md:h-[200px]"
        style={{ background: 'url(/hero-banner.png)' }}
      >
        <p className="font-integralbold text-4xl text-white md:text-6xl">ABOUT US</p>
      </div>

      <div className="container flex min-h-[300px] flex-col-reverse items-center justify-between gap-8 py-8 md:flex-row">
        <p className="w-[100%] text-justify md:w-[55%]">
          At "Dimyum," our culinary philosophy revolves around two key principles: Tradition and Innovation. We respect
          the time-honored techniques and flavors of Chinese cuisine, staying true to the essence of dimsum. However, we
          believe in evolving and pushing the boundaries, offering our customers a chance to personalize their dimsum
          creations like never before. We cherish the balance between authentic taste and modern creativity.
        </p>
        <Image
          src="/sticker/4.png"
          alt="Sticker 4"
          width={0}
          height={0}
          sizes="100%"
          className="h-auto w-[200px] md:w-[280px]"
        />
      </div>

      <div className="bg-[#E0EC89]">
        <div className="container flex min-h-[300px] flex-col items-center justify-between gap-8 py-8 md:flex-row">
          <Image
            src="/sticker/5.png"
            alt="Sticker 5"
            width={0}
            height={0}
            sizes="100%"
            className="h-auto w-[200px] md:w-[280px]"
          />
          <p className="w-[100%] text-justify md:w-[55%]">
            To be the heart and soul of every gathering, bringing people together through the joy of delightful dimsum
            experiences. DIMYUM envisions a world where every bite is a moment of connection and every meal is a
            celebration of shared happiness.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
