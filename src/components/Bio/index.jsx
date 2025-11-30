import styles from './Bio.module.css';

import data from '../../data/cv.json';

const Bio = () => {
  const { images, title, subtitle, description } = data.bio;
  const fallbackImage = images[images.length - 1];

  return (
    <section className={styles.bio}>
      <picture className={styles.image}>
        {images.map((img, id) =>
          img.media ? (
            <source key={id} srcSet={img.src} media={img.media} />
          ) : null
        )}
        <img src={fallbackImage.src} alt={fallbackImage.alt} />
      </picture>
      <div className={styles.content}>
        <h1>
          <span>{title.split('Aegon Targaryen')[0]} </span>
          <span className={styles.name}>{title.split('Hola, soy ')[1]}</span>
        </h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
      </div>
    </section>
  );
};

export default Bio;
