import TextLink from '@/components/atoms/Navbar/TextLink/TextLink';
import { navList } from '@/components/constants/nav';
import { Icons } from '@/components/icons/icons';
import { Button } from '@/components/ui/button/button';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Drawer() {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size={'sm'} style={{ marginRight: -12 }}>
            <Icons.menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className={cn('w-48 bg-white')}>
          <SheetHeader>
            <p className="text-center font-integralbold text-2xl text-[#FF5124]">
              DIM
              <span className="text-[#212322]">YUM</span>
            </p>
          </SheetHeader>
          <SheetDescription asChild>
            <div className="flex flex-col items-center gap-4 pt-6">
              {navList.map((data, index) => {
                return <TextLink href={data.href} text={data.text} key={index + 22} />;
              })}
              <Link href="/order">
                <Button className="bg-[#FF5124] px-8 font-semibold hover:bg-[#FF5124]/70">ORDER</Button>
              </Link>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </>
  );
}
