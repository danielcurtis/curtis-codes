import { FaThumbsUp, FaClock } from 'react-icons/fa';
import styles from './styles/Article.module.css';

type Props = {
  title: string;
  url: string;
  date: string;
  likes: number;
  description: string;
};

function Article({ title, url, date, likes, description }: Props) {
  const formatDate = (d: string) => {
    const dt = new Date(d);
    const yr = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dt);
    const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(dt);
    const dd = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(dt);

    return `${mo} ${dd}, ${yr}`;
  };

  return (
    <>
      <h3 className={styles.h3}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
        <img
          src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg"
          alt="Dan Curtis's DEV Community Profile"
          className={styles.badge}
        />
      </h3>
      <strong>
        <FaThumbsUp /> {likes} <FaClock /> {formatDate(date)}
      </strong>
      <p>{description}</p>
      <hr />
    </>
  );
}

export default Article;
