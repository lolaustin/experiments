'use client'

import { motion } from "framer-motion";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <motion.div
        onClick={() => setOpen((o) => !o)}
        className="element"
        style={
          open
            ? { position: "fixed", inset: 0, width: "100vw", height: "100vh", backgroundColor: "red" }
            : { height: 48, width: 48, backgroundColor: "red", margin: "auto" }
        }
        layout
      />
    </div>
  );
}