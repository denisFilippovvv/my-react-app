import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  id: number;
  title: string;
  body: string;
  image: string;
  active?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({ id, title, body, image, active = false, onClick }) => {
  return (
    <div 
      className={`${styles.feature} ${active ? styles.active : ''}`}
      onClick={onClick}
      data-index={id}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Card;