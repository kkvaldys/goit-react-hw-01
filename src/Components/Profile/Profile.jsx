import css from './Profile.module.css';

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
       {' '}
      <div className={css.userInfo}>
            <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={css.userEmail}>@{tag}</p>
        <p className={css.userLocation}>{location}</p> {' '}
      </div>
       {' '}
      <ul className={css.list}>
           {' '}
        <li className={css.listItem}>
                <span className={css.userInfoTitle}>Followers</span>
          <span className={css.userInfoNumber}>{followers}</span>   {' '}
        </li>
           {' '}
        <li className={css.listItem}>
                <span className={css.userInfoTitle}>Views</span>
          <span className={css.userInfoNumber}>{views}</span>   {' '}
        </li>
           {' '}
        <li className={css.listItem}>
                <span className={css.userInfoTitle}>Likes</span>
          <span className={css.userInfoNumber}>{likes}</span>   {' '}
        </li>
         {' '}
      </ul>
    </div>
  );
}
