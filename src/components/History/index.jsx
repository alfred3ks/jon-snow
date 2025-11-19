import data from '../../data/cv.json';

const History = () => {
  const { description, images, skills } = data.history;
  const fallbackImage = images[images.length - 1];

  return (
    <section id="quien-soy">
      <h3>Mi historia</h3>
      <article>
        <div>
          {description.map((content, id) => (
            <p key={id}>{content}</p>
          ))}
        </div>
        <div>
          <picture>
            {images.map(({ id, src, media }) =>
              media ? <source key={id} srcSet={src} media={media} /> : null
            )}
            <img src={fallbackImage.src} alt={fallbackImage.alt} />
          </picture>
          {skills.map(({ name, id }) => (
            <div key={id}>
              <div>{name}</div>
              <div>Barra</div>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default History;
