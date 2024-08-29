import { Link } from 'react-router-dom';
import { Container } from '../../components';

import styles from './styles.module.scss';

const CallToAction = ({ service, phone }) => (
  <section className={styles.cta}>
    <Container>
      <div className={styles.cta__inner}>
        <h2>Need Your {service.split(' Repair').join('')} fixed?</h2>

        <div className={styles.links}>
          <Link to="/book-now">Book A Service</Link>

          <span>
            or call us <a href={`tel:${phone}`}>{phone}</a>
          </span>
        </div>
      </div>
    </Container>
  </section>
);

export default CallToAction;
