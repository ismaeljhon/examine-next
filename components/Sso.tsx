import Image from 'next/image';
import { SsoIcons } from '../interfaces/theme/sso.interface';
import styles from '../styles/Login.module.scss';

const ssoIcons: SsoIcons[] = [
  { src: '/gplus.png', width: 25, height: 24 },
  { src: '/apple.png', width: 20, height: 24 },
  { src: '/facebook.png', width: 15, height: 31 },
];

export default function Sso() {
  return (
    <nav className="flex flex-rows justify-items-center w-auto justify-center mt-12">
      {ssoIcons.map((icon, index) => {
        return (
          <a href="#" key={index} className={styles.ssoIcons}>
            <picture className="mx-auto">
              <img
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
                height={icon.height}
              />
            </picture>
          </a>
        );
      })}
    </nav>
  );
}
