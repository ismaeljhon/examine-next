import Header from '../Header';
import Footer from '../Footer';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
}

export default function ({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Examine</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
