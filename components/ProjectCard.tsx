import Image from 'next/image';
import { Project } from '@/types';
import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      
      target="_blank"
      rel="noopener noreferrer"
      className={styles.card}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.image}
          alt={`${project.title} image`}
          width={325}
          height={200}
          className={styles.image}
          priority={false}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;