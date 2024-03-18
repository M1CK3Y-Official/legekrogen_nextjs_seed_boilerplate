'use client';
import styles from './reviews.module.css'
import { useState, useEffect } from 'react';
import { squarepegFont } from '@/utils/fonts';

const Reviews = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const getReviews = async () => {
            
            const response = await fetch('/api/reviews');
            const data = await response.json();
            setReviews(data);
        }
        getReviews();

    }, []);

    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h1 className={`${styles.heading1} ${squarepegFont.className}`}>Vores kunder</h1>
                <h1 className={styles.heading2}>udtaler</h1>
            </div>


            <div className={styles.list}>
                {reviews.map((review) => (
                    <div className={styles.review} key={review._id}>

                        <p className={styles.reviewText}>&ldquo;{review.description}&rdquo;</p>
                        <p className={`${styles.reviewAuthor} ${squarepegFont.className}`}>{review.name}</p>

                    </div>
                ))}
            </div>

        </div>


    )

}

export default Reviews;