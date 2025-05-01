import Image from 'next/image';
import { Certificate } from '@/data/certificate';
import styles from '@/styles/CertificateCard.module.css';
import { useState, useEffect } from 'react';

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={styles.card}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View ${certificate.title} certificate`}
      >
        <div className={styles.imageWrapper}>
          <Image
            src={certificate.image}
            alt={`${certificate.title} thumbnail`}
            width={325}
            height={200}
            className={styles.image}
            onLoadingComplete={() => setImageLoaded(true)}
            priority={false}
          />
          {!imageLoaded && <div className={styles.imagePlaceholder} />}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{certificate.title}</h3>
          <p className={styles.description}>{certificate.description}</p>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button 
              className={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
              aria-label="Close certificate view"
            >
              &times;
            </button>
            <div className={styles.modalImageContainer}>
              <Image
                src={certificate.image}
                alt={`${certificate.title} certificate`}
                width={800}
                height={600}
                className={styles.modalImage}
                quality={100}
                priority
              />
            </div>
            <div className={styles.modalText}>
              <h3>{certificate.title}</h3>
              <p>{certificate.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CertificateCard;