import Link from 'next/link';

interface Props {
  title: string;
  links: Link[];
}

interface Link {
  label: string;
  href: string;
}
export default function FooterLinks({ title, links }: Props) {
  return (
    <div className="mt-3">
      <h4 className="text-white mb-5">{title}</h4>
      <nav>
        {links.map((link, index) => {
          return (
            <Link href={link.href} key={index}>
              <a className="text-info block mb-3">{link.label}</a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
