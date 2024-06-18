import { PropsWithChildren } from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import Navbar from "./navbar";
import Footer from "./footer";
import Sidebar from "./Sidebar";
import Copyright from "./footer/Copyright";

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
      <Sidebar />
      <div className="mx-auto max-w-[1420px] px-2">
        <Navbar />
        {children}
      </div>
      <div className="w-full bg-[#122829]">
        <div className="mx-auto max-w-[1420px] px-2">
          <Footer />
          <Copyright />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
