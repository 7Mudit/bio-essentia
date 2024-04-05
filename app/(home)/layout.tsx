import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NewNavbar from "@/components/shared/NewNavbar";
import ConstructionBanner from "@/components/Banner";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <ConstructionBanner />
      <NewNavbar />
      {children}
      <Footer />
    </main>
  );
}
