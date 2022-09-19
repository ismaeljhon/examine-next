import { ReactElement } from 'react';
import GuestLayout from '../components/layouts/GuestLayout';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <h1 className="text-3xl font-bold underline">Login Area</h1>;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GuestLayout>{page}</GuestLayout>;
};

export default Page;
