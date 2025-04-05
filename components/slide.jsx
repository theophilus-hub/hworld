import { motion } from "motion/react";

function Slide({ children }) {
  return (
    (<motion.div
      
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
        duration: 1,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>)
    
  );
}

export default Slide; // Default export
