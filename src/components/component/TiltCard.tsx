import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import profile from "../../assets/profile.png";

const TiltCard = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [15, -15]);
  const rotateY = useTransform(mouseX, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "#fff",
        borderRadius: "50%",
        rotateX: rotateX,
        rotateY: rotateY,
        transformPerspective: 1000,
      }}
    >
      <img className="w-md max-w-md" src={profile} alt="" />
    </motion.div>
  );
};

export default TiltCard;
