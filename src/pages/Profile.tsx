import { useGetUserQuery } from "../features/profile/profileApi";

import styles from "../features/profile/Profile.module.css";

const Profile = () => {
  const { data: user, isLoading, error } = useGetUserQuery(1);

  if (isLoading) return <div>Loading...</div>;
  if (error || !user) return <div>Loading profile error</div>;

  return (
    <div className={styles.profileContainer}>
      <h2 className={styles.centeredTitle}>USER PROFILE</h2>

      <div className={styles.userInfo}>
        <span className={styles.label}>Name:</span> {user.name}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.label}>Username:</span> {user.username}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.label}>Email:</span> {user.email}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.label}>Phone:</span> {user.phone}
      </div>
      <div className={styles.userInfo}>
        <span className={styles.label}>Website:</span> {user.website}
      </div>
    </div>
  );
};

export default Profile;
