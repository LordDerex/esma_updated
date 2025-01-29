import { Outlet, useLocation } from "react-router";
import images from "../../constants/images";

export default function Unauthenticated() {
  const location = useLocation();
  const noImagePaths = ["/auth/email-confirmation"];

  const shouldShowImage = !noImagePaths.includes(location.pathname);

  return (
    <div className="h-full w-full flex">
      {shouldShowImage && (
        <div className="w-1/2 h-full bg-[#F4F3FB] flex justify-center items-center">
          <img
            src={images.authBg}
            alt=""
            className="h-[70%] w-full object-contain"
          />
        </div>
      )}
      <div className={`h-full ${shouldShowImage ? "w-1/2" : "w-full"}`}>
        <Outlet />
      </div>
    </div>
  );
}
