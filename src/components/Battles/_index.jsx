import data from '../../data/cv.json';
import styles from './Battles.module.css';

const Battles = () => {
  const { battles } = data;
  return (
    <section className={styles.battles} id="batallas">
      <h3 className={styles.title}>Algunas de mis batallas</h3>
      <div className={styles.container}>
        {battles.map(({ title, id, description, images }) => {
          const fallbackImage = images[images.length - 1];
          return (
            <article key={id} className={styles.card}>
              <h3 className={styles.subTitle}>{title}</h3>
              <picture className={styles.picture}>
                {images.map((img) =>
                  img.media ? (
                    <source key={img.id} srcSet={img.src} media={img.media} />
                  ) : null
                )}
                <img
                  className={styles.images}
                  src={fallbackImage.src}
                  alt={fallbackImage.alt}
                />
              </picture>
              <p className={styles.description}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Battles;
