import ImageElement from './ImageElement';
import TitleElement from './TitleElement';

import styles from './CardSection.module.css';

const CardSection = ({
  dataList,
  idSection,
  sectionTitle,
  cardContentOrder, // Nuevo prop para manejar el orden
}) => {
  return (
    <section className={styles.title} id={idSection}>
      <h3 className={styles.title}>{sectionTitle}</h3>
      <div className={styles.container}>
        {dataList.map(({ name, id, description, images }) => {
          const isImageFirst = cardContentOrder === 'image-first';

          return (
            <article key={id} className={styles.card}>
              {isImageFirst ? (
                <>
                  <ImageElement images={images} />
                  <TitleElement name={name} />
                </>
              ) : (
                <>
                  <TitleElement name={name} />
                  <ImageElement images={images} />
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
