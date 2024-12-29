import styles from "@styles/Blog.module.css";

const BlogCard = ({ blog, onClick }) => {
  return (
    <div className={styles.card} onClick={() => onClick(blog)}>
      <img src={blog.image} alt={blog.title} className={styles.cardImage} />
      <h3 className={styles.cardTitle}>{blog.title}</h3>
    </div>
  );
};

export default BlogCard;