import React from 'react';
import styles from './BreakDown.module.css';

const BreakDown = () => {
  return (
    <section className={styles.breakdownSection}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.leftCol}>
            <div className={styles.stickyHeading}>
              <h2 className={styles.heading}>This is Breakdown</h2>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.contentBlock}>
              <h2 className={styles.mainHeading}>
                The science is settled. We are in an emergency of climate and nature.
                The world is past breaking point. the breakdown has begun...
              </h2>

              <div className={styles.accordion}>
                <div className="accordion-item">
                  <button className={styles.accordionBtn}>
                    <h3 className={styles.accordionTitle}>The Role of Design</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>

                <div className="accordion-item">
                  <button className={styles.accordionBtn}>
                    <h3 className={styles.accordionTitle}>Time for Change</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>

                <div className="accordion-item">
                  <button className={styles.accordionBtn}>
                    <h3 className={styles.accordionTitle}>Act with Urgency</h3>
                    <span className={styles.icon}>▼</span>
                  </button>
                </div>
              </div>

              <div className={styles.videoButtonWrapper}>
                <a href="https://youtu.be/XpnOe94eXdM" target="_blank" className={styles.videoButton}>
                  View our D! Intro Video
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreakDown;
