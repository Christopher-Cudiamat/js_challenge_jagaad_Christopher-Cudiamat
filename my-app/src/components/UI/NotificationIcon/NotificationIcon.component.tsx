import React, { Fragment } from "react";
import { INotificationIconProps } from "./notificationIcon.type";
import "./notificationIcon.style.scss";

const NotificationIcon: React.FC<INotificationIconProps> = ({
  count,
  showNotification,
}) => {
  return (
    <Fragment>
      {showNotification && <span className="bag__item-counter">{count}</span>}
    </Fragment>
  );
};

export default NotificationIcon;
