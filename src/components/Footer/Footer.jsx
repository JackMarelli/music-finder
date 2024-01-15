import styles from "./Footer.module.scss";

function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.container__social_links}>
          <span className={styles.container__social_links__link}></span>
          <span className={styles.container__social_links__link}></span>
          <span className={styles.container__social_links__link}></span>
          <span className={styles.container__social_links__link}></span>
        </div>
        <div className={styles.container__footer_links}>
          <div className={styles.container__footer_links__link}>
            Audio Description
          </div>
          <div className={styles.container__footer_links__link}>
            Help Center
          </div>
          <div className={styles.container__footer_links__link}>Gift Cards</div>
          <div className={styles.container__footer_links__link}>
            Media Center
          </div>
          <div className={styles.container__footer_links__link}>
            Investor Relations
          </div>
          <div className={styles.container__footer_links__link}>Jobs</div>
          <div className={styles.container__footer_links__link}>
            Terms of Use
          </div>
          <div className={styles.container__footer_links__link}>Privacy</div>
          <div className={styles.container__footer_links__link}>
            Legal Notices
          </div>
          <div className={styles.container__footer_links__link}>
            Cookie Prefecences
          </div>
          <div className={styles.container__footer_links__link}>
            Corporate Informations
          </div>
          <div className={styles.container__footer_links__link}>Contact Us</div>
          <div className={styles.container__footer_links__link}>Ad Choices</div>
          <div className={styles.container__footer_links__link}></div>
        </div>
        <div className={styles.container__service}>Service Code</div>
        <div className={styles.container__copyright}>
          © 1997 - 2023 Netflix, Inc.
        </div>
      </div>
    </>
  );
}

export default Footer;
