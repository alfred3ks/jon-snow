import data from '../../data/cv.json';
import CardSection from '../CardSection';

const Battles = () => {
  const { battles } = data;
  return (
    <CardSection
      dataList={battles}
      cardContentOrder={'title-first'}
      idSection={'batallas'}
      sectionTitle={'Algunas de mis batallas'}
    />
  );
};

export default Battles;
