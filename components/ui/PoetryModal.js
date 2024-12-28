import styles from "@styles/Poetry.module.css";
import { useState } from "react";

const PoetryModal = ({ poetry, onClose }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const nextImage = () =>
		setCurrentIndex((prevIndex) =>
			prevIndex === poetry.images.length - 1 ? 0 : prevIndex + 1
		);
	const prevImage = () =>
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? poetry.images.length - 1 : prevIndex - 1
		);

	return (
		<div className={styles.modal}>
			<div className={styles.overlay} onClick={onClose}></div>
			<div className={styles.modalContent}>
				<button className={styles.closeButton} onClick={onClose}>
					&times;
				</button>
				<img
					src={poetry.images[currentIndex]}
					alt={poetry.title}
					className={styles.modalImage}
				/>
				{poetry.images.length > 1 && (
					<div className={styles.modalControls}>
						<button onClick={prevImage}>⟨</button>
						<button onClick={nextImage}>⟩</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default PoetryModal;