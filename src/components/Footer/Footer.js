import { Container } from '../';

import styles from './styles.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container>
      <div className={styles.footer__inner}>
        <div className={styles.payments}>
          <img src="../assets/payments/mastercard.svg" alt="mastercard" />
          <img src="../assets/payments/visa.svg" alt="visa" />
          <img src="../assets/payments/discover.svg" alt="discover" />
          <img src="../assets/payments/ae.svg" alt="ae" />
        </div>

        <div className={styles.underline}>
          <span>Copyright © {new Date().getFullYear()} Appliance Repair. All rights reserved.</span>

          <a href="https://www.linkedin.com/in/daniil-alekseev/" target="_blank" rel="noReferrer">
            Designed by <strong>Dan Aleksieiev</strong> in California
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
