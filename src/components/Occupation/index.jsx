import data from '../../data/cv.json';
import styles from './Occupation.module.css';

const Occupation = () => {
  return (
    <section className={styles.occupation} id="que-hago">
      <h3 className={styles.title}>A que me dedico</h3>
      <div className={styles.container}>
        {data.occupation.map(({ name, id, description, images }) => {
          return (
            <article key={id} className={styles.card}>
              <picture className={styles.picture}>
                {images.map((img, id) => {
                  return img.media ? (
                    <source key={id} srcSet={img.src} media={img.media} />
                  ) : null;
                })}
                <img
                  className={styles.images}
                  src={
                    images.find((img) => !img.media)?.src ||
                    images[images.length - 1].src
                  }
                  alt={
                    images.find((img) => !img.media)?.alt ||
                    images[images.length - 1].alt
                  }
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
