import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  body: string;
  active?: boolean;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = React.memo(({ 
  title, 
  body, 
  active = false, 
  onClick 
}) => {
  return (
    <div 
      className={`${styles.feature} ${active ? styles.active : ''}`}
      onClick={onClick}
      role="article"
      aria-current={active ? 'true' : 'false'}
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
});

Card.displayName = 'Card';

export default Card;