import styles from './Title.module.css';

const { title } = styles;

const Title = () => {
  const name = 'Jon Snow';
  return (
    <div className={title}>
      <a href="/">{name}</a>
    </div>
  );
};

export default Title;
