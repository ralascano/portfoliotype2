// components/TimelineCard.tsx

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

type TimelineCardProps = {
  title: string;
  subtitle: string;
  date: string;
  details: string;
};

const TimelineCard = ({
  title,
  subtitle,
  date,
  details,
}: TimelineCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Detectar clic fuera del componente
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ borderRadius: 16 }}
      className="bg-white shadow-lg rounded-2xl p-4 cursor-pointer"
      style={{ display: "flex", flexDirection: "column" }}
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.div layout="position">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{subtitle}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.p
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-sm text-gray-700 mt-3"
          >
            {details}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TimelineCard;
