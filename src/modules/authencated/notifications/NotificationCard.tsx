import React from "react";

interface NotificationCardProps {
  title: string;
  message: string;
  timestamp: string;
  imageSrc: string;
  showBadge?: boolean;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  timestamp,
  imageSrc,
  showBadge,
}) => {
  return (
    <>
      <div className="flex items-center space-x-4 p-4 bg-[#F4F3FB] shadow-lg rounded-lg border border-gray-200 ">
        <div className="relative">
          <img
            src={imageSrc}
            alt="Notification"
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* New condition to show the red dot */}
          {showBadge && (
            <span className="absolute top-8 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-row items-center gap-3">
            <h4 className="font-bold text-black text-[22px] font-sans">
              {title}
            </h4>
            <p className="text-[20px] text-[#AAAAAA] font-sans">{message}</p>
          </div>
          <span className="text-[20px] text-[#AAAAAA] font-sans">
            {timestamp}
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
