import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react';

export const TOAST_CONFIG = {
  success: { 
    icon: CheckCircle, 
    bg: 'bg-green-50', 
    border: 'border-green-500', 
    text: 'text-green-800', 
    iconColor: 'text-green-500' 
  },
  error: { 
    icon: XCircle, 
    bg: 'bg-red-50', 
    border: 'border-red-500', 
    text: 'text-red-800', 
    iconColor: 'text-red-500' 
  },
  warning: { 
    icon: AlertCircle, 
    bg: 'bg-yellow-50', 
    border: 'border-yellow-500', 
    text: 'text-yellow-800', 
    iconColor: 'text-yellow-500' 
  },
  info: { 
    icon: Info, 
    bg: 'bg-blue-50', 
    border: 'border-blue-500', 
    text: 'text-blue-800', 
    iconColor: 'text-blue-500' 
  }
} as const;