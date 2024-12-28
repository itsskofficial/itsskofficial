import styles from "@styles/Blog.module.css";

const BlogModal = ({ blog, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>{blog.title}</h2>
        <div className={styles.modalText}>{blog.content}</div>
        <button className={styles.closeButton} onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BlogModal;