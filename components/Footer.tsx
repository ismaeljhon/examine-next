import Link from 'next/link';
import Image from 'next/future/image';
import styles from '../styles/Footer.module.scss';
import Newsletter from './Newsletter';
import FooterLinks from './FooterLinks';
export default function Footer() {
  return (
    <footer className="bg-primary pt-[85px]">
      <article className="max-w-[1225px] mx-auto grid px-10 lg:px-0 lg:grid-cols-[45%_repeat(2,22%)_10%] lg:grid-flow-col border-b border-b-[rgba(0,0,0,0.11)] pb-8">
        <aside>
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/logo-white.png"
                alt="Examine Logo"
                width={148}
                height={33}
              />
            </a>
          </Link>
          <div className="mt-10">
            <Newsletter />
          </div>
        </aside>
        <aside className="mt-10 lg:mt-0">
          <FooterLinks
            title="About Us"
            links={[
              { label: 'Our Story', href: '#' },
              { label: 'Our Team', href: '#' },
              { label: 'Our Editorial Policy', href: '#' },
              { label: 'Our Mistakes', href: '#' },
            ]}
          />
        </aside>
        <aside className="mt-5 lg:mt-0">
          <FooterLinks
            title="Resources"
            links={[
              { label: 'Continuing Education', href: '#' },
              { label: 'For Journalists', href: '#' },
              { label: 'Student Discount', href: '#' },
              { label: 'Senior Discount', href: '#' },
            ]}
          />
        </aside>
        <aside className="mt-5 lg:mt-0">
          <FooterLinks
            title="Social"
            links={[
              { label: 'Facebook', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'Linkedin', href: '#' },
              { label: 'Email Us', href: '#' },
            ]}
          />
        </aside>
      </article>
      <article className="max-w-[1225px] mx-auto grid text-info text-sm lg:grid-flow-col py-8 px-10 lg:px-0 text-center">
        <p className="lg:text-left mb-2 lg:mb-0">
          Copyright 2010 - 2021 Examine Inc.
        </p>
        <p className="lg:text-right">
          <Link href="#">
            <a className="pr-3">Privacy Policy</a>
          </Link>
          I
          <Link href="#">
            <a className="pl-3">Website Terms</a>
          </Link>
        </p>
      </article>
    </footer>
  );
}
