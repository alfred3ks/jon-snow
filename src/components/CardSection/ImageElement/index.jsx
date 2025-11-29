const ImageElement = ({ images, parentStyles }) => {
  const fallbackImage = images[images.length - 1];
  return (
    <picture className={parentStyles.picture}>
      {images.map((img) =>
        img.media ? (
          <source key={img.id} srcSet={img.src} media={img.media} />
        ) : null
      )}
      <img
        className={parentStyles.images}
        src={fallbackImage.src}
        alt={fallbackImage.alt}
      />
    </picture>
  );
};

export default ImageElement;
