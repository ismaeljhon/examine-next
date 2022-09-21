import { useState } from 'react';
import styles from '../styles/GuestLayout.module.scss';

interface Props {
  placeholder?: string;
  showActionText?: string;
  hideActionText?: string;
  className?: string;
}

export default function PasswordField({
  placeholder = 'Password',
  showActionText = 'show',
  hideActionText = 'hide',
  className = '',
}: Props) {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="relative">
      <input
        type={showPassword ? 'text' : 'password'}
        name="password"
        id="password"
        placeholder={placeholder}
        className={className}
      />
      <span className={styles.showPass} onClick={handleShowPassword}>
        {!showPassword ? showActionText : hideActionText}
      </span>
    </div>
  );
}
