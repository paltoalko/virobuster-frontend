import { ReactComponent as Bayerland } from '../assets/svg/bayerland.svg';
import { ReactComponent as Bwze } from '../assets/svg/bwze.svg';
import { ReactComponent as Klinikum } from '../assets/svg/klinikum.svg';
import { ReactComponent as Unilever } from '../assets/svg/unilever.svg';
import { ReactComponent as Utrecht } from '../assets/svg/utrecht.svg';
import React, { useRef } from 'react';
import styles from '../assets/styles/LogoBanner.module.css';
import { useInView, motion } from 'framer-motion';

const LogoBanner: React.FC<{}> = () => {
  const refBox = useRef(null);
  const isInView = useInView(refBox, { once: true });
  return (
    <motion.div
      className={styles.container}
      ref={refBox}
      style={{
        opacity: isInView ? 1 : 0,
        transition: 'all 2s ',
      }}
    >
      <Unilever class={styles.svg} />
      <Klinikum class={styles.svg} />
      <Bwze class={styles.svg} />
      <Utrecht class={styles.svg} />
      <Bayerland class={styles.svg} />
    </motion.div>
  );
};

export default LogoBanner;
