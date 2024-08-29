import { Link } from 'react-router-dom';

import { Container, Logo } from '../../components';

import styles from './styles.module.scss';

const HomeScreen = ({ locations }) => (
  <section className={styles.home}>
    <Container>
      <div className={styles.home__inner}>
        <Logo service="Appliance Repair" />

        <p>We work in these locations:</p>

        <ul>
          {locations.map((el) => (
            <li key={el.id}>
              <Link to={el.slug}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

export default HomeScreen;
