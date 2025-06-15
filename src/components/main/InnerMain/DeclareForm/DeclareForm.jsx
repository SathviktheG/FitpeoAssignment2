import React from 'react'
import styles from "./DeclareForm.module.css"

const DeclareForm = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.sidebar}>
            <h2 className={styles.heading}>Declare Emergency Now</h2>
          </div>
          <div className={styles.formWrapper}>
            <p className={styles.description}>
              Design Declares is open to individuals and institutions working in industrial,
              digital, graphic, communication and service design...
            </p>

            <form className={styles.form}>
              <h2 className={styles.title}>I am Declaring Emergency</h2>

              <div className={styles.radioGroup}>
                {["As a business", "As an individual", "As a public institution", "As a team or department"].map((label, idx) => (
                  <label key={idx} className={styles.radioLabel}>
                    <span className={styles.fakeRadio}></span>
                    <span>{label}</span>
                  </label>
                ))}
              </div>

              <div className={styles.inputGroup}>
                <label>Website:*</label>
                <input type="url" required placeholder="https://example.com" />
              </div>

              <div className={styles.inputGroup}>
                <label>Discipline:*</label>
                <select required>
                  <option value="">Select...</option>
                  <option>Communication Design</option>
                  <option>Digital Design</option>
                  <option>Service Design</option>
                  <option>Product Design</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label>Email:*</label>
                <input type="email" required placeholder="you@example.com" />
              </div>

              <div className={styles.inputGroup}>
                <textarea placeholder="Why are you declaring?" rows="5" required></textarea>
              </div>

              <div className={styles.checkboxGroup}>
                <label className={styles.checkboxLabel}>
                  <span className={styles.fakeCheckbox}></span>
                  I consent for my data to be used...
                </label>
                <label className={styles.checkboxLabel}>
                  <span className={styles.fakeCheckbox}></span>
                  I would like to be added to the newsletter...
                </label>
              </div>

              <a href="/privacy-policy" className={styles.privacyLink}>View our Privacy Policy</a>

              <div className={styles.submitWrapper}>
                <button type="submit">Declare Emergency Now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeclareForm
