import images from "constants/images";
import CustomIcon from "../customIcon";
import icons from "constants/icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="py-[11px] border-b border-[#DFDFDF] headerShadow flex justify-end items-center gap-6 px-8">
      <div
        onClick={() => navigate("/notifications")}
        className="cursor-pointer"
      >
        <CustomIcon SvgIcon={icons.notification} size={38} />
      </div>
      <div className="flex justify-start items-center gap-3">
        <img src={images.profileImg} alt="profile" />
        <div>
          <h1 className="text-base">Godwin</h1>
          <h1 className="text-[#A7A7A7] text-sm">Super admin</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
