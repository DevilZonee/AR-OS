"use client";

import { useEffect, useState } from "react";
import LoadingBar from "./LoadingBar";
import BootText from "./BootText";
import { motion, AnimatePresence } from "framer-motion";
import Desktop from "../desktop/Desktop";

const messages = [
  "Initializing Kernel",
  "Loading Components",
  "Scanning Portfolio",
  "Loading Skills",
  "Preparing Desktop",
  "Launching AR OS",
];

export default function BootScreen() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(messages[0]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += 2;
      setProgress(current);

      const index = Math.min(
        Math.floor(current / 18),
        messages.length - 1
      );

      setMessage(messages[index]);

      if (current >= 100) {
        clearInterval(interval);

        setTimeout(() => {
          setDone(true);
        }, 600);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

 return (
  <>
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-[#020617]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ scale: .8, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            className="text-7xl font-bold tracking-[10px]"
          >
            AR OS
          </motion.h1>

          <BootText text={message} />
          <LoadingBar progress={progress} />

          <span className="mt-5 text-gray-400">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>

    {done && <Desktop />}
  </>
);
}