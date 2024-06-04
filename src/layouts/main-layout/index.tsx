import { PropsWithChildren } from "react";
import Topbar from "./Topbar";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Topbar />
      {children}
    </>
  );
};

export default MainLayout;
