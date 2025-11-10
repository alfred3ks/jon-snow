import Title from '../Title';

import styles from './Header.module.css';
const { header } = styles;

const Header = () => {
  return (
    <header className={header}>
      <Title />
    </header>
  );
};

export default Header;
