import React from 'react';
import { FaDownload } from 'react-icons/fa';
import styles from './DowloandBadge.module.css';

export default function DownloadBadge() {

  return (
    <a
      href="/CV_FabrizioTorres.pdf"
      download="CV_Fabrizio_Torres_Daniele.pdf"
      className={styles.downloadButton}
      aria-label="Descargar CV"
    >
      <FaDownload className={styles.icon} />
      <span className={styles.label}>Descargar CV</span>
    </a>
  );
}
