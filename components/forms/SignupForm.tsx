import Sso from '../Sso';
import styles from '../../styles/Signup.module.scss';

export default function SignupForm() {
  return (
    <div className={styles.signupForm}>
      <h2 className="text-center">Create your account</h2>
      <p className="small text-center">
        It&lsquo;s Includes a free 2 week trial!
      </p>
      <Sso />
      <div className="flex items-center py-4">
        <div className="flex-grow h-px bg-light"></div>
        <span className="flex-shrink uppercase font-normal text-center w-16 text-secondary">
          Or
        </span>
        <div className="flex-grow h-px bg-light"></div>
      </div>
      <form className="">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
        />
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
      <button className="large block w-full">
        Start your 2-week free trial!
      </button>
    </div>
  );
}
