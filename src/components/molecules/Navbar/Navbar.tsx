import Drawer from '../Drawer/Drawer';
import TextLink from '@/components/atoms/Navbar/TextLink/TextLink';
import { navList } from '@/components/constants/nav';
import { Button } from '@/components/ui/button/button';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <header
        className="top-0 z-40 flex h-20 w-full items-center justify-between bg-[#F8F7F0]"
        style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.07), 0px 5px 10px 0px rgba(0, 0, 0, 0.01)' }}
      >
        <div className="container flex flex-row items-center justify-between gap-6 md:gap-10">
          <Link href="/">
            <p className="font-integralbold text-4xl text-[#FF5124]">
              DIM
              <span className="text-[#212322]">YUM</span>
            </p>
          </Link>
          <div className="hidden flex-row items-center gap-8 md:flex">
            {navList.map((data, index) => {
              return <TextLink href={data.href} text={data.text} key={index + 22} />;
            })}
          </div>
          <div className="hidden md:flex">
            <Link href="/order">
              <Button className="bg-[#FF5124] px-12 font-semibold hover:bg-[#FF5124]/70">ORDER</Button>
            </Link>
          </div>

          <div className="flex md:hidden">
            <Drawer />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
