import React from 'react';
import styles from './Header.module.css';

type ModalProps = {
  onClose: () => void;
};

const Modal = ({ onClose }: ModalProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Обработка логина
    onClose();
  };

  return (
    <div className={styles.modal_overlay} id="modalOverlay">
      <div className={styles.modal}>
        <form className={styles.modal_form} onSubmit={handleSubmit}>
          <h2>Log In</h2>
          <div className={styles.form_group}>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.form_buttons}>
            <button 
              type="button" 
              className={styles.cancel_button}
              onClick={onClose}
            >
              Отмена
            </button>
            <button type="submit" className={styles.submit_button}>ОК</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;