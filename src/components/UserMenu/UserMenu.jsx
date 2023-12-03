import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.usermenu}>
      <p>Welcome, {user.email}</p>
      <button
        type="button"
        className={css.logoutbutton}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};
