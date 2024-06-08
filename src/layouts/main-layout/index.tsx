import { PropsWithChildren } from "react";
import Topbar from "./Topbar";
import Header from "./Header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
