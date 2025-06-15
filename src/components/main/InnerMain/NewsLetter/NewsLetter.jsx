import React from "react";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <h2 className={styles.heading}>The Design Declares Newsletter and Toolkit</h2>
          </div>
          <div className={styles.content}>
            <img
              src="https://designdeclares.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fzqatagq1%2Fproduction%2F88fd99f7f3ecf6762e7dbe50ca090a59277eff87-3840x2160.png%3Fmax-w%3D1440&w=1920&q=75"
              alt="Toolkit"
              className={styles.image}
            />
            <p className={styles.paragraph}>
              Subscribe to the Design Declares UK newsletter to receive the latest news and updates...
            </p>
            <p className={styles.paragraph}>
              Every signatory to Design Declares will receive an access link to the Toolkit...
            </p>
            <form className={styles.form}>
              <div className={styles.inputGroup}>
                <label>Email:</label>
                <input type="email" required placeholder="you@example.com" className={styles.emailbox}/>
              </div>
              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <input type="checkbox" required />
                  <span>I would like to be added to the newsletter...</span>
                </label>
              </div>
              <a href="/privacy-policy" className={styles.privacyLink}>
                View our Privacy Policy
              </a>
              <div className={styles.buttonWrapper}>
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
