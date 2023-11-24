import Navbar from '@/components/molecules/Navbar/Navbar';
import Footer from '@/components/templates/Home/Footer/Footer';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <div className="relative flex min-h-screen flex-col">
        <Navbar />
        <div className="bg-[#F8F7F0]">{children}</div>
        <Footer />
      </div>
    </>
  );
}
