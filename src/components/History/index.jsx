import data from '../../data/cv.json';
import styles from './History.module.css';

const History = () => {
  const { description, images, skills } = data.history;
  const fallbackImage = images[images.length - 1];

  return (
    <section id="quien-soy" className={styles.history}>
      <h3 className={styles.title}> Mi historia</h3>
      <article className={styles.container}>
        <div className={styles.description}>
          {description.map((content, id) => (
            <p key={id} className={styles.paragraph}>
              {content}
            </p>
          ))}
        </div>
        <div className={styles.info}>
          <picture className={styles.picture}>
            {images.map(({ id, src, media }) =>
              media ? <source key={id} srcSet={src} media={media} /> : null
            )}
            <img
              className={styles.image}
              src={fallbackImage.src}
              alt={fallbackImage.alt}
            />
          </picture>
          <div className={styles.skillContainer}>
            {skills.map(({ name, id }) => (
              <div key={id} className={styles.skillItem}>
                <div className={styles.skillName}>{name}</div>
                <div className={`${styles.skillBar}`}>
                  <div className={`${styles[`skillBar-${id}`]}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default History;
