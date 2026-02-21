"use client";

import { useToast } from "@/context/ToastContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, AlertCircle, Info, X } from "lucide-react";

export default function Toast() {
  const { toasts, removeToast } = useToast();

  const iconMap = {
    success: <CheckCircle className="text-green-400 w-5 h-5" />,
    error: <AlertCircle className="text-red-400 w-5 h-5" />,
    info: <Info className="text-blue-400 w-5 h-5" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className="glass px-4 py-4 rounded-lg flex items-center gap-4 min-w-[300px] shadow-2xl pointer-events-auto border-l-4 border-l-luxury-gold"
          >
            {iconMap[toast.type]}
            <p className="text-sm font-medium flex-grow text-luxury-white tracking-wide">
              {toast.message}
            </p>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-luxury-gray hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
