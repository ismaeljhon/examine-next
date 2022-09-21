import Image from 'next/future/image';
import { SsoIcons } from '../interfaces/theme/sso.interface';
import styles from '../styles/GuestLayout.module.scss';

const ssoIcons: SsoIcons[] = [
  { src: '/gplus.png', width: 25, height: 24 },
  { src: '/apple.png', width: 20, height: 24 },
  { src: '/facebook.png', width: 15, height: 31 },
];

const ssoIconsMobile: SsoIcons[] = [
  { src: '/gplus-mobile.png', width: 11, height: 11 },
  { src: '/apple-mobile.png', width: 11, height: 13 },
  { src: '/facebook-mobile.png', width: 8, height: 18 },
];

export default function Sso() {
  return (
    <>
      <nav className="hidden lg:flex flex-rows justify-items-center w-auto justify-center mt-12">
        {ssoIcons.map((icon, index) => {
          return (
            <a href="#" key={index} className={`${styles.ssoIcons}`}>
              {/* Show image for large screens */}
              <Image
                src={icon.src}
                alt={icon.alt || ''}
                width={icon.width}
                height={icon.height}
                className="mx-auto"
              />
            </a>
          );
        })}
      </nav>

      {/* Show image for smaller screens */}
      <nav className="flex flex-rows justify-items-center w-auto justify-center mt-5 lg:hidden">
        {ssoIconsMobile.map((icon, index) => {
          return (
            <a href="#" key={index} className={`${styles.ssoIcons}`}>
              {/* Show image for large screens */}
              <Image
                src={icon.src}
                alt={icon.alt || ''}
                width={icon.width}
                height={icon.height}
                className="mx-auto"
              />
            </a>
          );
        })}
      </nav>
    </>
  );
}
