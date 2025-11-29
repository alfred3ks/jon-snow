import ImageElement from './ImageElement';
import TitleElement from './TitleElement';

const CardSection = ({
  dataList,
  idSection,
  sectionTitle,
  parentStyles,
  cardContentOrder,
}) => {
  return (
    <section className={parentStyles.container} id={idSection}>
      <h3 className={parentStyles.title}>{sectionTitle}</h3>
      <div className={parentStyles['container-grid']}>
        {dataList.map(({ title, id, description, images }) => {
          const isImageFirst = cardContentOrder === 'image-first';

          return (
            <article key={id} className={parentStyles.card}>
              {isImageFirst ? (
                <>
                  <ImageElement images={images} parentStyles={parentStyles} />
                  <TitleElement title={title} parentStyles={parentStyles} />
                </>
              ) : (
                <>
                  <TitleElement title={title} parentStyles={parentStyles} />
                  <ImageElement images={images} parentStyles={parentStyles} />
                </>
              )}
              <p className={parentStyles.description}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
