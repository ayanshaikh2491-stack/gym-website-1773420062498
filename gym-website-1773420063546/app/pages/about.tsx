import Head from 'next/head';
import styles from '../styles/About.module.css';

function AboutPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Us</title>
      </Head>
      <h1>About Us</h1>
      <p>
        Our gym is dedicated to providing a safe and supportive environment
        for all our members to achieve their fitness goals.
      </p>
    </div>
  );
}

export default AboutPage;