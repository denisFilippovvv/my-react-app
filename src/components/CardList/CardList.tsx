import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './CardList.module.css';

import profilImg from '../../assets/images/professional-profil.png';
import portfolioImg from '../../assets/images/best-portfolio.jpg';
import resumeImg from '../../assets/images/powerful-resume.jpg';

interface CardData {
  id: number;
  title: string;
  body: string;
  image: string;
}

interface CardListProps {
  limit?: number;
  disableLinks?: boolean;
}

const DEFAULT_CARDS: CardData[] = [
  {
    id: 1,
    title: "Создай профиль участника",
    body: "Расскажи о себе: укажи навыки, опыт, проекты. Алгоритмы помогут подобрать тебе лучших тиммейтов и подходящие вызовы.",
    image: profilImg
  },
  {
    id: 2,
    title: "Становись частью команды",
    body: "Найди команду или собери свою. Работай с дизайнерами, девелоперами и аналитиками. Твой проект может изменить индустрию.",
    image: portfolioImg
  },
  {
    id: 3,
    title: "Выбирай хакатоны и ивенты",
    body: "Находи актуальные онлайн и офлайн-хакатоны. Подбирай по интересам: AI, финтех, экология, геймдев и др.",
    image: resumeImg
  }
];

const CardList: React.FC<CardListProps> = ({ limit = 3, disableLinks = false }) => {
  const [searchParams] = useSearchParams();
  const cardParam = searchParams.get('card');
  const initialIndex = cardParam ? Math.max(0, parseInt(cardParam, 10)) : 0;

  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json() as { id: number; title: string; body: string }[];

        const mergedCards = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          body: item.body,
          image: DEFAULT_CARDS[index]?.image || profilImg
        }));

        setCards(mergedCards.length ? mergedCards : DEFAULT_CARDS);
        setLoading(false);
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        console.error("Failed to fetch cards:", error.message);
        setError(error.message);
        setLoading(false);
        setCards(DEFAULT_CARDS);
      }
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const handleCardClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleSwiperInit = useCallback((swiper: SwiperType) => {
    swiperRef.current = swiper;
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.cardListContainer}>
      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={activeIndex}
          onSwiper={handleSwiperInit}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <img
                src={card.image}
                alt={card.title}
                className={styles.slideImage}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.columns}>
        {cards.map((card, index) => (
          disableLinks ? (
            <div
              key={card.id}
              onClick={() => handleCardClick(index)}
              className={styles.cardWrapper}
              role="button"
              tabIndex={0}
              aria-label={`Select ${card.title}`}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(index)}
            >
              <Card
                title={card.title}
                body={card.body}
                active={index === activeIndex}
              />
            </div>
          ) : (
            <Link
              to={`/cards?card=${index}`}
              key={card.id}
              className={styles.cardLink}
              onClick={() => handleCardClick(index)}
              aria-label={`View details of ${card.title}`}
            >
              <Card
                title={card.title}
                body={card.body}
                active={index === activeIndex}
              />
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default CardList;