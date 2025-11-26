import data from '../../../../data/cv.json';
import styles from './Title.module.css';

const Title = () => {
  return (
    <div className={styles.title}>
      <a href="/">{data.name}</a>
    </div>
  );
};

export default Title;
