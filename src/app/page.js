import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1>Welcome to EasyLabour</h1>
        <p>Affordable help from your trusted neighbourhood workers — electricians, painters, cleaners & more.</p>
        <a className={styles.cta} href="#">Explore Services</a>
      </section>

      <section className={styles.services}>
        <h2>Our Services</h2>
        <div className={styles.grid}>
          <div className={styles.card}>Electrician</div>
          <div className={styles.card}>Painter</div>
          <div className={styles.card}>Plumber</div>
          <div className={styles.card}>Waste Collector</div>
          <div className={styles.card}>Carpenter</div>
          <div className={styles.card}>Cleaner</div>
        </div>
      </section>
    </main>
  );
}
