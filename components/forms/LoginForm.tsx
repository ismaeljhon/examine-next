import Sso from '../Sso';
import layoutStyles from '../../styles/GuestLayout.module.scss';
import pageStyles from '../../styles/Login.module.scss';
import { useRouter } from 'next/router';
import PasswordField from '../PasswordField';

export default function LoginForm() {
  let router = useRouter();
  const goToSignup = () => {
    router.push('/signup');
  };
  return (
    <div className={layoutStyles.loginForm}>
      <h2 className="text-center">Welcome back! 👋</h2>
      <p className={layoutStyles.subHeading}>
        Let&lsquo;s build someting great
      </p>
      <Sso />
      <div className={layoutStyles.formBreakline}>
        <div className="flex-grow h-px bg-light"></div>
        <span className={layoutStyles.formBreaklineText}>Or</span>
        <div className="flex-grow h-px bg-light"></div>
      </div>
      <form className="">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={layoutStyles.input}
        />
        <PasswordField className={layoutStyles.input} />
      </form>
      <button className="large block w-full mt-3">Login</button>
      <div className={pageStyles.cta} onClick={goToSignup}>
        <h6 className="font-lora text-[22px]">Click here</h6>
        <p className="leading-[22px] lg:leading-[150%]">
          to sign up for the complete Examine Membership. Includes a free 2 week
          trial!
        </p>
      </div>
    </div>
  );
}
