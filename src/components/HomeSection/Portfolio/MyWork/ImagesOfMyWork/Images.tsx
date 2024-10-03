import { useState } from 'react';
import styles from './images.module.scss';

interface SliderProps {
	images: string[];
	name: string;
}

const Slider: React.FC<SliderProps> = ({ images, name }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		setCurrentIndex((currentIndex - 1 + images.length) % images.length);
	};

	const nextSlide = () => {
		setCurrentIndex((currentIndex + 1) % images.length);
	};

	return (
		<>
			<div className={styles.imageContainer}>
				{images.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={`Zdjęcie przedstawia stronę internetową ${name} wykonaną przez SmallPixel zdjęcie numer: ${
							index + 1
						}`}
						className={index === currentIndex ? styles.active : styles.inactive}
					/>
				))}
			</div>
			<button onClick={prevSlide} className={styles.prevButton}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/></svg>
			</button>
			<button onClick={nextSlide} className={styles.nextButton}>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/></svg>
			</button>
		</>
	);
};

export default Slider;
