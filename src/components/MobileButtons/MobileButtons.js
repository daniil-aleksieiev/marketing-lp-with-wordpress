import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './styles.module.scss';

const MobileButtons = ({ phone, isVisible }) => (
  <div className={classNames(styles.buttons, isVisible ? styles.on : styles.off)}>
    <a href={`tel:${phone}`}>{phone}</a>

    <Link to="/book-now">Book Now</Link>
  </div>
);

export default MobileButtons;
