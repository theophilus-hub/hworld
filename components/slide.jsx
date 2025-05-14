"use client";
import { motion } from "motion/react";

function Slide({ 
  children, 
  direction = "up", 
  delay = 0.2, 
  duration = 1, 
  distance = 100,
  once = true,
  className = ""
}) {
  // Define different animation variants based on direction
  const getAnimationProps = () => {
    switch(direction) {
      case "down":
        return {
          initial: { opacity: 0, y: -distance },
          whileInView: { opacity: 1, y: 0 }
        };
      case "left":
        return {
          initial: { opacity: 0, x: distance },
          whileInView: { opacity: 1, x: 0 }
        };
      case "right":
        return {
          initial: { opacity: 0, x: -distance },
          whileInView: { opacity: 1, x: 0 }
        };
      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 }
        };
      case "fade":
        return {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 }
        };
      case "up":
      default:
        return {
          initial: { opacity: 0, y: distance },
          whileInView: { opacity: 1, y: 0 }
        };
    }
  };

  const animationProps = getAnimationProps();

  return (
    <motion.div
      className={className}
      initial={animationProps.initial}
      whileInView={animationProps.whileInView}
      transition={{
        delay,
        duration,
        ease: "easeOut",
      }}
      viewport={{ once }}
    >
      {children}
    </motion.div>
  );
}

export default Slide;
