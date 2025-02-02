import Header from "components/header";
import SideBar from "components/sidebar";
import { Outlet } from "react-router";

const AuthenticatedLayout = () => {
  return (
    <div className="flex h-screen">
      <div className="h-full">
        <SideBar />
      </div>

      <div className="flex flex-col w-full">
        <div className="z-10">
          <Header />
        </div>

        <div className="p-5 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AuthenticatedLayout;
