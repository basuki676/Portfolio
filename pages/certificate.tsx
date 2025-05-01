import CertificateCard from '@/components/CertificateCard';
import { certificate } from '@/data/certificate';
import styles from '@/styles/CertificatePage.module.css';

const CertificatePage = () => {
  return (
    <div className={styles.layout}>
    <h1 className={styles.pageTitle}>My Projects</h1>
    <p className={styles.pageSubtitle}>
    The following are some of the certificates that I have obtained, showcasing my commitment to continuous learning and professional development
    </p>

    <div className={styles.container}>
        {certificate.map((item) => (
          <CertificateCard key={item.slug} certificate={item} />
        ))}
      </div>
  </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Certificate' },
  };
}

export default CertificatePage;
