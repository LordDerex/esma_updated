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
      showBadge: true,
    },
    {
      title: "Sandra Bolus",
      message: "submitted lesson Plan",
      timestamp: "2 hours ago",
      imageSrc: img2,
      showBadge: true,
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
<<<<<<< HEAD
    <>
      <div>
        <p className="font-sans font-bold text-[23px] pb-[20px]">
          Notification
        </p>
      </div>
      <div className="max-w-4xl space-y-4">
=======
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-bold">Notification</h1>
      <div className="max-w-xl  space-y-4">
>>>>>>> 5e8705610bdc7664919c494dc6fff02f8f907023
        {notifications.map((notif, index) => (
          <NotificationCard key={index} {...notif} />
        ))}
      </div>
    </div>
  );
};

export default Notification;
