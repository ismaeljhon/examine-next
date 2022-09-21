import Sso from '../Sso';
import layoutStyles from '../../styles/GuestLayout.module.scss';
import PasswordField from '../PasswordField';

export default function SignupForm() {
  return (
    <div className={layoutStyles.signupForm}>
      <h2 className="text-center">Create your account</h2>
      <p className={layoutStyles.subHeading}>
        It&lsquo;s Includes a free 2 week trial!
      </p>
      <Sso />
      <div className={layoutStyles.formBreakline}>
        <div className="flex-grow h-px bg-light"></div>
        <span className={layoutStyles.formBreaklineText}>Or</span>
        <div className="flex-grow h-px bg-light"></div>
      </div>
      <form className="">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Full Name"
          className={layoutStyles.input}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className={layoutStyles.input}
        />
        <PasswordField
          className={`${layoutStyles.input} ${layoutStyles.password}`}
        />
      </form>
      <button className="large block w-full">
        Start your 2-week free trial!
      </button>
    </div>
  );
}
