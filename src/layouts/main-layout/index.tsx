import { PropsWithChildren } from "react";
import Topbar from "./Topbar";
import Header from "./Header";
import Navbar from "./Navbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Topbar />
      <Header />
      <Navbar/>
      {children}
    </>
  );
};

export default MainLayout;
