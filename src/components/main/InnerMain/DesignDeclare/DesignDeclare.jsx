import styles from "./DesignDeclare.module.css";
import '@fontsource/anton';
import { motion,AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const DesignDeclare = () => {
  const [showText, setShowText] = useState(false);
  const [isDExclam, setIsDExclam] = useState(false);
  const [isDesign, setIsDesign] = useState(false);
  const [isDExited, setIsDExited] = useState(false);


  useEffect(() => {
    const timers = [
      setTimeout(() => setIsDExclam(true), 1000),
      setTimeout(() => setIsDesign(true), 2000),
      setTimeout(() => setShowText(true), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.heroGrid}>
          <div className={styles.heroHeading}>
            <h1 className={styles.title}>
              <div className={styles.logoWrapper}></div>
              <span className={styles.titleText}>
                <AnimatePresence mode="wait" onExitComplete={()=>setIsDExited(true)}>
                  {!isDesign && (
                    <motion.div
                      className={styles.clipWrapper}
                      initial={isDExclam ? { clipPath: "inset(100% 0 0 0)" } : false}
                      animate={isDExclam ? { clipPath: "inset(0% 0 0 0)" } : false}
                      exit={{ clipPath: "inset(0 0 100% 0)" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>
                        {isDExclam ? "D!" : "D"}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {isDesign && isDExited && (
                  <>
                    <motion.div
                      className={styles.clipWrapper}
                      initial={{ clipPath: "inset(100% 0 0 0)" }}
                      animate={{ clipPath: "inset(0% 0 0 0)" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>DESIGN</span>
                    </motion.div>

                    <motion.div
                      className={styles.clipWrapper}
                      initial={{ clipPath: "inset(100% 0 0 0)" }}
                      animate={{ clipPath: "inset(0% 0 0 0)" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={styles.titleLine}>DECLARES</span>
                    </motion.div>

                    <motion.div
                      className={styles.clipWrapper}
                      initial={{ clipPath: "inset(100% 0 0 0)" }}
                      animate={{ clipPath: "inset(0% 0 0 0)" }}
                      transition={{ duration: 0.6 }}
                    >
                      <span className={`${styles.titleLine} ${styles.red}`}>UK</span>
                    </motion.div>
                  </>
                )}
              </span>
            </h1>
          </div>

          {showText && (
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{opacity:1,y:0}}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p>
                Design Declares is a growing group of designers, design studios, agencies and institutions here to declare a climate and ecological emergency. As part of the global declaration movement, we commit to harnessing the tools of our industry to reimagine, rebuild and heal our world.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DesignDeclare;
