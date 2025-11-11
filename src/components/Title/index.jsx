import styles from './Title.module.css';
import data from '../../data/cv.json';

const { title } = styles;

const Title = () => {
  return (
    <div className={title}>
      <a href="/">{data.name}</a>
    </div>
  );
};

export default Title;
