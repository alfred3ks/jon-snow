import ImageElement from './ImageElement';
import TitleElement from './TitleElement';
import styles from './CardSection.module.css';

const CardSection = ({
  dataList,
  idSection,
  sectionTitle,
  cardContentOrder,
}) => {
  return (
    <section className={styles.container} id={idSection}>
      <h3 className={styles.title}>{sectionTitle}</h3>
      <div className={styles['container-grid']}>
        {dataList.map(({ title, id, description, images }) => {
          const isImageFirst = cardContentOrder === 'image-first';

          return (
            <article key={id} className={styles.card}>
              {isImageFirst ? (
                <>
                  <ImageElement images={images} parentStyles={styles} />
                  <TitleElement title={title} parentStyles={styles} />
                </>
              ) : (
                <>
                  <TitleElement title={title} parentStyles={styles} />
                  <ImageElement images={images} parentStyles={styles} />
                </>
              )}
              <p className={styles.description}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
