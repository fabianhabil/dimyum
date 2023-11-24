import Link from 'next/link';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <header
          className="top-0 z-40 flex h-20 w-full items-center justify-center bg-[#F8F7F0]"
          style={{ boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.07), 0px 5px 10px 0px rgba(0, 0, 0, 0.01)' }}
        >
          <div className="container flex flex-row items-center justify-center gap-6 md:gap-10">
            <Link href="/">
              <p className="font-integralbold text-4xl text-[#FF5124]">
                DIM
                <span className="text-[#212322]">YUM</span>
              </p>
            </Link>
          </div>
        </header>
        <div className="bg-[#F8F7F0]">{children}</div>
      </div>
    </>
  );
}
