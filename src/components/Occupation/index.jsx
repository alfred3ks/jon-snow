import data from '../../data/cv.json';

const Occupation = () => {
  return (
    <section>
      <h3>A que me dedico</h3>
      {data.occupation.map(({ name, id, description, images }) => {
        return (
          <article key={id}>
            <picture>
              {images.map((img, id) => {
                return img.media ? (
                  <source key={id} srcSet={img.src} media={img.media} />
                ) : null;
              })}
              <img
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
            <h3>{name}</h3>
            <p>{description}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Occupation;
