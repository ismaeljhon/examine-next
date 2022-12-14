import Head from 'next/head';
import Image from 'next/image';
import { ReactElement } from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <Head>
      <title>Homepage</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default Home;
