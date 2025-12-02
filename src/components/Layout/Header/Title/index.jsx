import data from '../../../../data/cv.json';
import styles from './Title.module.css';

/*
Obtiene la ruta base configurada en vite.config.js ('/' o '/nombre-del-repo/')
Esto permite que los enlaces funcionen correctamente tanto en desarrollo local como cuando la aplicación se despliega en un subdirectorio como GitHub Pages.
*/
const BASE_URL = import.meta.env.BASE_URL;

const Title = () => {
  return (
    <div className={styles.title}>
      <a href={BASE_URL}>{data.name}</a>
    </div>
  );
};

export default Title;
