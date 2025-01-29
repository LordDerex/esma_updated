import { Link, useLocation } from "react-router-dom";
import CustomIcon from "../customIcon";

export interface SidebarProps {
  title: string;
  link: string;
  icon: string;
  activeIcon: string;
}

export default function Navlink({
  icon,
  link,
  title,
  activeIcon,
}: SidebarProps) {
  const { pathname } = useLocation();

  return (
    <Link
      to={link}
      className={`w-full h-[36px] flex items-center gap-[10px] ${
        pathname === link ? "sidebarBg text-white" : "!text-black"
      } px-2  rounded-md`}
    >
      {pathname === link ? (
        <CustomIcon SvgIcon={activeIcon} size={18} />
      ) : (
        <CustomIcon SvgIcon={icon} size={18} />
      )}

      <span className="text-base leading-[24px]">{title}</span>
    </Link>
  );
}
