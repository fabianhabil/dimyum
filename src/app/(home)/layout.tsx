import Navbar from '@/components/molecules/Navbar/Navbar';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <div className="bg-[#F8F7F0]">{children}</div>
      </div>
    </>
  );
}
