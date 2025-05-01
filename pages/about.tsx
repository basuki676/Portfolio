import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Muhamad Basuki Raharjo</h1>
        <div className={styles.subtitle}>Frontend Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a frontend developer from Jawa Barat, Indonesia. I specialize
              in building responsive and interactive user interfaces using React and modern frontend tools.
            </p>
            <p className={styles.paragraph}>
              My daily stack includes React, Next.js, and Tailwind CSS. I focus on
              delivering clean, maintainable code and smooth user experiences.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Tessact</span> as
              a Frontend Developer, collaborating with a small but mighty team to build
              a modern, web app.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
            I usually create content about games on social media or just relaxing by playing my favorite games.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
