import data from '../../data/cv.json';
import CardSection from '../CardSection';

const Occupation = () => {
  const { occupation } = data;
  return (
    <CardSection
      dataList={occupation}
      cardContentOrder={'image-first'}
      idSection={'que-hago'}
      sectionTitle={'A que me dedico'}
    />
  );
};

export default Occupation;
