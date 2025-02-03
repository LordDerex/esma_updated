import React from "react";

interface NotificationCardProps {
  title: string;
  message: string;
  timestamp: string;
  imageSrc: string;
}
const NotificationCard: React.FC<NotificationCardProps> = ({
  title,
  message,
  timestamp,
  imageSrc,
}) => {
  return (
    <>
      {/* <div>
        <p>Notification</p>
      </div> */}
      <div className="flex items-start space-x-4 p-4 bg-[#F4F3FB] shadow-lg rounded-2xl border border-gray-200">
        <img
          src={imageSrc}
          alt="Notification"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-bold text-black text-[23px] font-sans">
            {title}
          </h4>
          <p className="text-[19px] text-[#AAAAAA] font-sans">{message}</p>
          <span className="text-[19px] text-[#AAAAAA] font-sans">
            {timestamp}
          </span>
        </div>
      </div>
    </>
  );
};

export default NotificationCard;
