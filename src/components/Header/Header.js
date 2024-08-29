import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCalendar } from '@fortawesome/free-solid-svg-icons';

import { Container, Logo } from '../';

import styles from './styles.module.scss';

const Header = ({ phone, service }) => {
  const [shadow, setShadow] = useState(false);

  const handleScroll = () => {
    setShadow(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={classNames(styles.header, shadow && styles.shadow)}>
      <Container>
        <div className={styles.header__inner}>
          <Logo service={service} />

          <div className={styles.links}>
            <a href={`tel:${phone}`} className={styles.phone}>
              <div className={styles.phone__icon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <span>{phone}</span>
            </a>

            <Link to="/book-now" className={styles.cta}>
              Book Now
            </Link>
          </div>

          <div className={styles.links__mobile}>
            <a href={`tel:${phone}`} className={styles['phone-icon']}>
              <FontAwesomeIcon icon={faPhone} />
            </a>

            <Link to="/book-now" className={styles['booking-icon']}>
              <FontAwesomeIcon icon={faCalendar} />
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
