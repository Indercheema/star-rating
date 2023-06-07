
import Star from "./Star";
import { useState } from "react";

function StarRating() {
    const [rating, setRating] = useState(0);
    const words = ['Terrible', 'Bad', 'Regular', 'Good', 'Excellent'];
    const handleRating = (star) => {
        setRating(star);
    }

    const displayWord = rating > 0 ? words[rating - 1] : 'Your Rating';

    const stars = [...Array(5)].map((_, index) => (
        <Star
            key={index}
            isSelected={index < rating}
            onClick={() => handleRating(index + 1)}
        />
    ))

    return (
        <section className="star-section">
            <div className="box">
                <div className="star-box">{stars}</div>
                <h2>{displayWord}</h2>
            </div>
        </section>
    )
}

export default StarRating;