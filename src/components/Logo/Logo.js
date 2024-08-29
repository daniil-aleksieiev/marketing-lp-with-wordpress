import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

import styles from './styles.module.scss';

const Logo = ({ service }) => (
  <Link to="/" className={styles.logo}>
    <div className={styles.logo__icon}>
      <FontAwesomeIcon icon={faScrewdriverWrench} />
    </div>

    <div className={styles.logo__text}>
      <span>{service.split(' Repair').join('')}</span>
      <span>Repair</span>
    </div>
  </Link>
);

export default Logo;
