import Link from 'next/link';

const footerData = [
  {
    title: 'Explore',
    link: [
      {
        text: 'Menu',
        src: '/order'
      },
      {
        text: 'Order',
        src: '/order'
      },
      {
        text: 'FAQ',
        src: '/about'
      }
    ]
  },
  {
    title: 'About',
    link: [
      { text: 'Our Story', src: '/about' },
      { text: 'Vision & Mission', src: '/about' }
    ]
  },
  {
    title: 'Contact',
    link: [
      { text: 'Email', src: '/about' },
      { text: 'Phone', src: '/about' },
      { text: 'Location', src: '/about' }
    ]
  }
];

const Footer = () => {
  return (
    <>
      <div className="bg-[#212322] text-white">
        <div className="container flex min-h-[35vh] items-center justify-between">
          <div className="flex flex-col gap-4">
            <Link href="/">
              <p className="font-integralbold text-4xl text-[#FF5124]">
                DIM
                <span className="text-[white]">YUM</span>
              </p>
            </Link>
            <p>© 2023 DIMYUM</p>
            <p className="font-bold">All Rights Reserved</p>
          </div>
          <div className="hidden flex-row gap-16 sm:flex">
            {footerData.map((data, index) => {
              return (
                <div className="flex flex-col gap-4" key={index}>
                  <p className="pb-4 font-bold">{data.title}</p>
                  {data.link.map((d, i) => {
                    return (
                      <Link href={d.src} key={i}>
                        <p key={i + 10}>{d.text}</p>
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
