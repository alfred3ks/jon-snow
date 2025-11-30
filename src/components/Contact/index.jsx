import { useState } from 'react';
import styles from './Contact.module.css';

const initialFormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Mensaje enviado 👍');
    setFormData(initialFormState);
  };

  const disabled = Object.values(formData).some((value) => value.trim() === '');

  return (
    <section className={styles.contact}>
      <h3 className={styles.title}>Contacto</h3>
      <form className={styles.form} onSubmit={handleSubmit} id="contacto">
        {/* Columna izquierda */}
        <div className={styles.colLeft}>
          <label className={styles.label}>Nombre:</label>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="tu@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className={styles.label}>Asunto:</label>
          <input
            type="text"
            name="subject"
            placeholder="Asunto del mensaje"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        {/* Columna derecha */}
        <div className={styles.colRight}>
          <label className={styles.label}>Mensaje:</label>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje..."
            value={formData.message}
            onChange={handleChange}
            rows="8"
            required
          />
          <button
            className={disabled ? styles.buttonDisabled : ''}
            type="submit"
            disabled={disabled}
          >
            Enviar
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
