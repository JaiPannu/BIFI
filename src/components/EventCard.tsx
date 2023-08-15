"use client";
import { AnimatePresence, Variants, motion } from "framer-motion";
const boxVarients: Variants = {
  open: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
      delay: 0.1 * index,
    },
  }),
  closed: {
    x: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
function EventCard({ index }: { index: number }) {
  return (
    <motion.div
      className="bg-emerald-green rounded-xl w-[400px]  hover:shadow-[0_20px_50px_rgba(0,_50,_31,_0.8)] "
      variants={boxVarients}
      initial="closed"
      animate="open"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="p-5 flex flex-col items-start gap-3 ">
        <div className="text-2xl font-extrabold">Name</div>
        <div>
          <span className="font-semibold text-lg">Date :</span>{" "}
          <span>12/10/2023</span>
        </div>
        <div className="text-base font-light text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio at
          illum hic molestiae? Tenetur, itaque consequatur! Facere doloribus
          molestiae ipsam!
        </div>
        <div className="text-lg font-bold text-navy-blue flex gap-2 items-center justify-center  rounded-full px-2">
          Going on
          <div>
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-sky-500"></span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default EventCard;
