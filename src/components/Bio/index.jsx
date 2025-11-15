import styles from './Bio.module.css';

import data from '../../data/cv.json';

const Bio = () => {
  return (
    <section className={styles.bio}>
      <picture className={styles.image}>
        {data.bio.images.map((img, id) =>
          img.media ? (
            <source key={id} srcSet={img.src} media={img.media} />
          ) : null
        )}
        <img
          src={
            data.bio.images.find((img) => !img.media)?.src ||
            data.bio.images[data.bio.images.length - 1].src
          }
          alt={data.name}
        />
      </picture>
      <div className={styles.content}>
        <h1>
          <span>{data.bio.title.split('AEGON TARGARYEN')[0]} </span>
          <span className={styles.name}>
            {data.bio.title.split('Hola, soy ')[1]}
          </span>
        </h1>
        <h2>{data.bio.subtitle}</h2>
        <p>{data.bio.description}</p>
      </div>
    </section>
  );
};

export default Bio;
