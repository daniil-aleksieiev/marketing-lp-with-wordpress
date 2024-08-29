import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUmbrella, faThumbsUp, faPersonRunning } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components';

import styles from './styles.module.scss';

const Hero = ({ title, image, location }) => (
  <section className={styles.hero}>
    <Container>
      <div className={styles.hero__inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>#1 Rated {title}</h1>
          <p className={styles.subtitle}>Your Professionals in {location}</p>

          <div className={styles.reasons}>
            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faUmbrella} />
              </div>

              <p>
                Fully
                <br />
                Insured
              </p>
            </div>

            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </div>

              <p>Professional Team</p>
            </div>

            <div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faPersonRunning} />
              </div>

              <p>
                Same Day
                <br />
                Repair
              </p>
            </div>
          </div>
        </div>

        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
      </div>

      <div className={styles.badges}>
        <img src="../assets/badges/1.svg" alt="Award #1" />
        <img src="../assets/badges/2.svg" alt="Award #2" />
        <img src="../assets/badges/3.svg" alt="Award #3" />
        <img src="../assets/badges/4.svg" alt="Award #4" />
        <img src="../assets/badges/5.svg" alt="Award #5" />
      </div>
    </Container>
  </section>
);

export default Hero;
