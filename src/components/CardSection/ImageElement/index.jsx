import styles from './ImageElement.module.css';

const ImageElement = ({ images }) => {
  const fallbackImage = images[images.length - 1];
  return (
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
  );
};

export default ImageElement;
