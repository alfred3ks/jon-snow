import { Snowfall } from '@namnguyenthanhwork/react-snowfall-effect';
import styles from './SnowEffect.module.css';

const SnowEffect = () => {
  return (
    <div className={styles['snow-effect']}>
      <Snowfall
        snowflakeCount={120} // Densidad del copo
        size={{ min: 5, max: 15 }} // tamaño del copo en px
        speed={{ min: 0.5, max: 1.5 }} // velocidad en px/frame
        wind={{ min: -0.5, max: 0.5 }} // viento horizontal
        colors={['#ffffff']} // color del copo
      />
    </div>
  );
};

export default SnowEffect;
