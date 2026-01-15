import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, Info, XCircle, X } from 'lucide-react';
import { TOAST_CONFIG } from '@/src/constants/Toast.constants';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 3000,
  onClose,
  showCloseButton = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setIsVisible(false);
      onClose?.();
    }, 300);
  };

  const { icon: Icon, bg, border, text, iconColor } = TOAST_CONFIG[type];

  if (!isVisible) return null;

  return (
    <div
      className={`relative transition-all duration-300 ${
        isExiting ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      }`}
      role="alert"
    >
      <div
        className={`flex items-start gap-3 p-4 rounded-lg border-l-4 shadow-lg ${bg} ${border} min-w-80 max-w-md`}
      >
        <Icon className={iconColor} size={20} aria-hidden="true" />
        <p className={`flex-1 text-sm font-medium ${text}`}>{message}</p>
        {showCloseButton && (
          <button
            onClick={handleClose}
            className={`${text} hover:opacity-70 transition-opacity`}
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
};