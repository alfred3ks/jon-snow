import Navbar from './Navbar';
import Title from './Title';

import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Title />
      <Navbar />
    </header>
  );
};

export default Header;
