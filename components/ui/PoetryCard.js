import styles from "@styles/Poetry.module.css";

const PoetryCard = ({ poetry, onClick }) => {
	return (
		<div className={styles.card} onClick={() => onClick(poetry)}>
			<img
				src={poetry.images[0]}
				alt={poetry.title}
				className={styles.cardImage}
			/>
			<div className={styles.cardTitle}>{poetry.title}</div>
		</div>
	);
};

export default PoetryCard;