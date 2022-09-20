import Sso from '../Sso';
import styles from '../../styles/Login.module.scss';

export default function LoginForm() {
  return (
    <div className={styles.loginForm}>
      <h2 className="text-center">Welcome back! 👋</h2>
      <p className="small text-center">Let&lsquo;s build someting great</p>
      <Sso />
      <div className="flex items-center py-4">
        <div className="flex-grow h-px bg-light"></div>
        <span className="flex-shrink uppercase font-normal text-center w-16 text-secondary">
          Or
        </span>
        <div className="flex-grow h-px bg-light"></div>
      </div>
      <form className="">
        <input type="email" name="email" id="email" placeholder="Email" />
        <div className="relative">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <span className={styles.showPass}>show</span>
        </div>
      </form>
      <button className="large block w-full">Login</button>
    </div>
  );
}
