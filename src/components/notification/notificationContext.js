import { createContext, useContext, useState } from 'react';
import { useNotification } from '../../hooks/useNotification';
import Notification from './index';

export const NotificationContext = createContext();
export const useNotificationContext = () => {
  return useContext(NotificationContext);
};

const NotificationProvider = ({ children }) => {
  const [notificationMessage, setNotificationMessage] = useState({ success: '', error: '' });
  const [showNotification, toggleNotification] = useNotification();

  return (
    <NotificationContext.Provider value={{ setNotificationMessage, toggleNotification }}>
      {children}
      <Notification
        success={notificationMessage.success}
        error={notificationMessage.error}
        isOpen={showNotification}
        onClose={toggleNotification}
      />
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
