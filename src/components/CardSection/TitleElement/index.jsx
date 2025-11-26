import styles from './TitleElement.module.css';

const TitleElement = ({ name }) => {
  return <h3 className={styles.title}>{name}</h3>;
};

export default TitleElement;
