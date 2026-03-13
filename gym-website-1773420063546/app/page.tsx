import Head from 'next/head';
import Link from 'next/link';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gym Website</title>
        <meta name="description" content="Gym Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <h1>Welcome to our Gym Website</h1>
        <p>
          Get fit and healthy with our state-of-the-art equipment and expert trainers.
        </p>
        <Link href="/classes">
          <a>
            <button>Explore Our Classes</button>
          </a>
        </Link>
      </main>
    </div>
  );
}

export default HomePage;