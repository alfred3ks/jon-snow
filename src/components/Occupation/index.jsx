import data from '../../data/cv.json';
import styles from './Occupation.module.css';

const Occupation = () => {
  const { occupation } = data;
  return (
    <section className={styles.occupation} id="que-hago">
      <h3 className={styles.title}>A que me dedico</h3>
      <div className={styles.container}>
        {occupation.map(({ name, id, description, images }) => {
          const fallbackImage = images[images.length - 1];
          return (
            <article key={id} className={styles.card}>
              <picture className={styles.picture}>
                {images.map((img, id) =>
                  img.media ? (
                    <source key={id} srcSet={img.src} media={img.media} />
                  ) : null
                )}
                <img
                  className={styles.images}
                  src={fallbackImage.src}
                  alt={fallbackImage.alt}
                />
              </picture>
              <h3 className={styles.subTitle}>{name}</h3>
              <p className={styles.description}>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Occupation;
