import React from "react";
import NotificationCard from "./NotificationCard";
import img1 from "../../../assets/image/notificationPic1.svg";
import img2 from "../../../assets/image/notificationPic2.svg";
import img3 from "../../../assets/image/notificationPic3.svg";

const Notification: React.FC = () => {
  const notifications = [
    {
      title: "Jeremiah Obeh",
      message: "created a virtual class",
      timestamp: "15 mins ago",
      imageSrc: img1,
    },
    {
      title: "Sandra Bolus",
      message: "submitted lesson Plan",
      timestamp: "2 hours ago",
      imageSrc: img2,
    },
    {
      title: "Shedrack Okoro",
      message: "Changed password",
      timestamp: "1 day ago",
      imageSrc: img3,
    },
    {
      title: "Sandra Bolus",
      message: "submitted lesson Plan",
      timestamp: "1 day ago",
      imageSrc: img2,
    },
  ];

  return (
    <div className="max-w-md mx-auto space-y-4">
      {notifications.map((notif, index) => (
        <NotificationCard key={index} {...notif} />
      ))}
    </div>
  );
};

export default Notification;
