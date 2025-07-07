// src/components/Contact/ContactCard.jsx
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';
import styles from './contact.module.css';

export default function ContactCard() {
  const socialLinks = [
    {
      name: 'Email',
      icon: FaEnvelope,
      href: 'mailto:fabrotorres3@gmail.com',
      label: 'fabrotorres3@gmail.com',
      hoverClass: styles.emailHover
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      href: 'https://github.com/FabroTorresD',
      label: '@FabroTorresD',
      hoverClass: styles.githubHover
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      href: 'https://linkedin.com/in/Fabrizio-Torres-Daniele',
      label: '/in/Fabrizio-Torres-Daniele',
      hoverClass: styles.linkedinHover
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.bgShapes}>
        <div className={styles.shapeCircle} />
        <div className={styles.shapeSquare} />
      </div>

      <div className={`container ${styles.content}`}>

        <div className={styles.socialGrid}>
          {socialLinks.map((link, i) => {
            const Icon = link.icon;
            return (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.socialLink} ${link.hoverClass}`}
              >
                <div className={styles.iconWrapper}>
                  <Icon className={styles.socialIcon} />
                </div>
                <div className={styles.linkInfo}>
                  <h4 className={styles.linkName}>{link.name}</h4>
                  <p className={styles.linkLabel}>{link.label}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
);
}
