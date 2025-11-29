import data from '../../data/cv.json';
import CardSection from '../CardSection';
import styles from './Occupation.module.css';

const Occupation = () => {
  const { occupation } = data;
  return (
    <CardSection
      dataList={occupation}
      cardContentOrder={'image-first'}
      idSection={'que-hago'}
      sectionTitle={'A que me dedico'}
      parentStyles={styles}
    />
  );
};

export default Occupation;
