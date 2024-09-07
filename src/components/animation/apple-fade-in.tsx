import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
}

function AppleFadeIn(props: IProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Custom ease curve for a more Apple-like feel
        delay: 0.2, // Short delay before animation starts
      }}
    >
      {props.children}
    </motion.div>
  );
}

export default AppleFadeIn;
