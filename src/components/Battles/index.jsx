import data from '../../data/cv.json';

const Battles = () => {
  const { battles } = data;
  return (
    <section>
      <h3>Algunas de mis batallas</h3>
      <div>
        {battles.map(({ name, id, description, images }) => {
          const fallbackImage = images[images.length - 1];
          return (
            <article key={id}>
              <h3>{name}</h3>
              <picture>
                {images.map((img, id) =>
                  img.media ? (
                    <source key={id} srcSet={img.src} media={img.media} />
                  ) : null
                )}
                <img src={fallbackImage.src} alt={fallbackImage.alt} />
              </picture>
              <p>{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Battles;
