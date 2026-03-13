import Link from 'next/link';
import styles from '../styles/Classes.module.css';

function ClassesPage() {
  return (
    <div className={styles.container}>
      <h1>Our Classes</h1>
      <ul>
        <li>
          <Link href="/classes/cardio">
            <a>Cardio</a>
          </Link>
        </li>
        <li>
          <Link href="/classes/weightlifting">
            <a>Weightlifting</a>
          </Link>
        </li>
        <li>
          <Link href="/classes/yoga">
            <a>Yoga</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default ClassesPage;