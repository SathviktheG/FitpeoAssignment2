import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
            
          <div className={styles.logo}>
            <span className={styles.logoText}>Design Declares</span>
          </div>

          <div className={styles.nav}>
            <nav aria-label="Menu">
              <a href="/contact" target="_self">Contact</a>
              <a href="https://www.instagram.com/design_declares/" target="_blank">Instagram</a>
              <a href="https://www.linkedin.com/groups/12699995/" target="_blank">LinkedIn</a>
              <a href="/privacy-policy" target="_self">Privacy Policy</a>
            </nav>
          </div>

          <div className={styles.formSection}>
            <p><strong>Sign up to the D! Newsletter</strong></p>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className={styles.inputBox}>
                <label htmlFor="email">Email:*</label>
                <input type="email" id="email" name="email" required />
                </div>
                <label className={styles.checkbox}>
                <input type="checkbox" required />
                I would like to be added to the Design Declares! newsletter.
              </label>
              <a href="/privacy-policy">View our Privacy Policy</a>
              <button type="submit" className={styles.subcribe}>Subscribe</button>
            </form>
          </div>

          <div className={styles.info}>
            <p>
              This website is built using low-carbon principles.{' '}
              <a href="https://digitalbeacon.co/report/designdeclares-com" target="_blank">
                Learn more about our carbon footprint
              </a>
            </p>
            <p>
              Empowered by{' '}
              <a href="https://driftime.media" target="_blank">Driftime®</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
