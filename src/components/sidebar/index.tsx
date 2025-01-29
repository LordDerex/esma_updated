import images from "constants/images";
import Navlink from "../navLink";
import { sidebar } from "constants/sidebar";

const SideBar = () => {
  return (
    <div className="h-dvh py-8 bg-[#F4F3FB] text-black overflow-y-hidden flex flex-col justify-start gap-5">
      <div className="px-4 flex items-center">
        <img src={images.logo} alt="logo" />
      </div>

      <div className="px-[16px] h-fit mx-auto flex flex-col gap-3 my-2 w-full">
        {sidebar.map((link, i) => {
          return (
            <Navlink
              icon={link.icon}
              activeIcon={link.activeIcon}
              link={link.link}
              title={link.title}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
