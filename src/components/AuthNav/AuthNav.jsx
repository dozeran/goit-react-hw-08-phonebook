import { Link } from 'react-router-dom';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.navlink}>
      <Link to="/register">Register</Link>
      <Link to="/login">Log In</Link>
    </div>
  );
};
