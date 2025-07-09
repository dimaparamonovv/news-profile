import type { NewsListProps } from "./types";

import styles from "./NewsList.module.css";

const NewsList = ({ posts }: NewsListProps) => (
  <>
    {posts.map((post) => (
      <div className={styles.post} key={post.id}>
        <div className={styles.title}>{post.title}</div>

        <div className={styles.body}>
          {post.body.length > 100 ? post.body.slice(0, 100) + "..." : post.body}
        </div>
      </div>
    ))}
  </>
);

export default NewsList;
