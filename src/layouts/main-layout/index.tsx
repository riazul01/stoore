import { PropsWithChildren } from "react";

const MainLayout = ({ children }: PropsWithChildren) => {
  return <div className="bg-green-800">{children}</div>;
};

export default MainLayout;
