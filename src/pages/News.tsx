import { useGetPostsQuery } from "../features/news/newsApi";

import styles from "../features/news/NewsList.module.css";

const News = () => {
  const { data: posts, isLoading, error } = useGetPostsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Loading error</div>;

  return (
    <div className={styles.newsContainer}>
      <h2 className={styles.centeredTitle}>NEWS</h2>

      {posts?.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.title}>{post.title}</div>

          <div className={styles.body}>
            {post.body.length > 100
              ? post.body.slice(0, 100) + "..."
              : post.body}
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;
