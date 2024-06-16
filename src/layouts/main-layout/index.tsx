import { PropsWithChildren } from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import Navbar from "./navbar";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="w-full bg-[#153535]">
        <div className="mx-auto max-w-[1420px] px-2">
          <Topbar />
        </div>
      </div>
      <div className="sticky top-0 z-50 w-full bg-[#153535]">
        <div className="mx-auto max-w-[1420px] px-2">
          <Header />
        </div>
      </div>
      <Sidebar/>
      <div className="mx-auto max-w-[1420px] px-2">
        <Navbar />
        {children}
      </div>
      <Footer/>
    </>
  );
};

export default MainLayout;
