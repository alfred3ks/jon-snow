import styles from './Title.module.css';
import data from '../../../data/cv.json';

const Title = () => {
  return (
    <div className={styles.title}>
      <a href="/">{data.name}</a>
    </div>
  );
};

export default Title;
