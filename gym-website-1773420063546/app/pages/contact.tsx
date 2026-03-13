import Head from 'next/head';
import styles from '../styles/Contact.module.css';

function ContactPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Us</title>
      </Head>
      <h1>Contact Us</h1>
      <p>
        Get in touch with us to learn more about our gym and our services.
      </p>
    </div>
  );
}

export default ContactPage;