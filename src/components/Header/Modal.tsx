import React from 'react';
import styles from './form.module.css';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <form className={styles.modalForm}>
          <h2>Log In</h2>
          <div className={styles.formGroup}>
            <label htmlFor="name">Имя:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formButtons}>
            <button 
              type="button" 
              className={styles.cancelButton}
              onClick={onClose}
            >
              Отмена
            </button>
            <button type="submit" className={styles.submitButton}>ОК</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;