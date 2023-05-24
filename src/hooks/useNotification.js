import { useState } from "react";

export function useNotification(message) {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(message);

  const setMessage = (newMessage) => setNotificationMessage(newMessage);

  const toggleNotification = () => setShowNotification(!showNotification);

  return [
    showNotification,
    toggleNotification,
    notificationMessage,
    setMessage,
  ];
}
