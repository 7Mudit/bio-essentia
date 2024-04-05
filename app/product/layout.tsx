import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import NewNavbar from "@/components/shared/NewNavbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NewNavbar />
      {children}
      <Footer />
    </main>
  );
}
