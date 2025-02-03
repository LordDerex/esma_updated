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
    <div className="flex items-start space-x-4 p-4 bg-[#F4F3FB] shadow-lg rounded-2xl border border-gray-200">
      <img
        src={imageSrc}
        alt="Notification"
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="flex-1">
        <h4 className="font-semibold text-black text-base">{title}</h4>
        <p className="text-sm text-[#AAAAAA] font-sans">
          {message} {timestamp}
        </p>
      </div>
    </div>
  );
};

export default NotificationCard;
