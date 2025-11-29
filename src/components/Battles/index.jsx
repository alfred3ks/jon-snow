import data from '../../data/cv.json';
import CardSection from '../CardSection';
import styles from './Battles.module.css';

const Battles = () => {
  const { battles } = data;
  return (
    <CardSection
      dataList={battles}
      cardContentOrder={''}
      idSection={'batallas'}
      sectionTitle={'Algunas de mis batallas'}
      parentStyles={styles}
    />
  );
};

export default Battles;
