import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import styles from './CardList.module.css';

import profilImg from '../../assets/images/professional-profil.png';
import portfolioImg from '../../assets/images/best-portfolio.jpg';
import resumeImg from '../../assets/images/powerful-resume.jpg';

interface CardData {
    id: number;
    title: string;
    body: string;
    image: any;
}

interface CardListProps {
    limit?: number;
    disableLinks?: boolean;
}

const DEFAULT_CARDS: CardData[] = [
    {
        id: 1,
        title: "Professional Profile",
        body: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
        image: profilImg
    },
    {
        id: 2,
        title: "Best Portfolio",
        body: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
        image: portfolioImg
    },
    {
        id: 3,
        title: "Powerful Resume",
        body: "We know finding the right job is stressful, so we've made it simple. It only takes a few minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter",
        image: resumeImg
    }
];

const CardList: React.FC<CardListProps> = ({ limit = 3, disableLinks = false }) => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`);
                const data = await response.json();
                
                const mergedCards = data.map((item: any, index: number) => ({
                    id: item.id,
                    title: item.title,
                    body: item.body,
                    image: DEFAULT_CARDS[index]?.image || profilImg 
                }));
                
                setCards(mergedCards.length ? mergedCards : DEFAULT_CARDS);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Unknown error');
                setLoading(false);
                setCards(DEFAULT_CARDS);
            }
        };

        fetchData();
    }, [limit]);

    const handleCardClick = (index: number) => {
        setActiveIndex(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (error) return <div className={styles.error}>Error: {error}</div>;

    return (
        <div className={styles.cardListContainer}>
            <div className={styles.swiperContainer}>
                <Swiper
                    ref={swiperRef}
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                    initialSlide={activeIndex}
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <img
                                src={typeof card.image === 'string' ? card.image : card.image}
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
                        >
                            <Card
                                id={card.id}
                                title={card.title}
                                body={card.body}
                                image={card.image}
                                active={index === activeIndex}
                            />
                        </div>
                    ) : (
                        <Link 
                            to="/cards" 
                            key={card.id} 
                            className={styles.cardLink}
                        >
                            <Card
                                id={card.id}
                                title={card.title}
                                body={card.body}
                                image={card.image}
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