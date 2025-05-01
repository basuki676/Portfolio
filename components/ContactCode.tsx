import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'raharjobasuki471@gmail.com',
    href: 'mailto:raharjobasuki471@gmail.com',
  },
  {
    social: 'linkedin',
    link: 'Basuki Raharjo',
    href: 'https://www.linkedin.com/in/basuki-raharjo-9084392a0/',
  },
  {
    social: 'Instagram',
    link: 'm_basuki_r',
    href: 'https://www.instagram.com/m_basuki_r/',
  },
  {
    social: 'TikTok',
    link: 'bssuki16',
    href: 'https://www.tiktok.com/@bassuki16?is_from_webapp=1&sender_device=pc',
  },
  {
    social: 'Youtube',
    link: 'BASS',
    href: 'https://www.youtube.com/@BASS-v8u',
  },
  {
    social: 'Saweria',
    link: 'Basuki',
    href: 'https://saweria.co/Basssuki',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
