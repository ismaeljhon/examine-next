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
      <h4 className="text-white mb-7">{title}</h4>
      <nav>
        {links.map((link, index) => {
          return (
            <p key={index}>
              <Link href={link.href}>
                <a className="text-info inline-block mb-6">{link.label}</a>
              </Link>
            </p>
          );
        })}
      </nav>
    </div>
  );
}
