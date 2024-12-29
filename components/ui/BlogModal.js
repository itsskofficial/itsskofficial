import styles from "@styles/Blog.module.css";

const BlogModal = ({ blog, mode, onClose }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.overlay} onClick={onClose}></div>
			<div
				className={
					mode === "dark"
						? styles.modalContent
						: styles.modalContentLight
				}
			>
				<h2 className={styles.modalTitle}>{blog.title}</h2>
				<div
					className={styles.modalText}
					dangerouslySetInnerHTML={{
						__html: blog.content.replace(/\n/g, "<br />"),
					}}
				></div>
				<button onClick={onClose}>Close</button>
			</div>
		</div>
	);
};

export default BlogModal;