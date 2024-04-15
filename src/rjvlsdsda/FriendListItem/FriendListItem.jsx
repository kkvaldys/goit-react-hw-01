import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div>
      <img className={css.friendImage} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(
          css.friendText,
          isOnline ? css.isOnline : css.isOffline
        )}
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
