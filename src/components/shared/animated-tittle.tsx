import { motion, Variants } from "framer-motion";
const easeOut = [0.22, 1, 0.36, 1] as const;

const letterContainerVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.045,
      delayChildren: 0.2,
    },
  },
};

const letterVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};
type AnimatedTittleProps = {
  title: string;
  number: string;
};

const AnimatedTittle = ({ title, number }: AnimatedTittleProps) => {
  return (
    <h1 className="font-barlow-condensed text-lg lg:text-3xl text-center lg:text-left text-preset-5 uppercase tracking-[2.7px]">
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: easeOut }}
        className="mr-3 text-white/30"
      >
        {number}
      </motion.span>
      <motion.span
        className="inline-flex flex-wrap"
        variants={letterContainerVariants}
        initial="initial"
        animate="animate"
        aria-label={title}
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={`${char}-${index}`}
            variants={letterVariants}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.span>
    </h1>
  );
};

export default AnimatedTittle;
