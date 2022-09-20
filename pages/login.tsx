import { ReactElement } from 'react';
import LoginForm from '../components/forms/LoginForm';
import GuestLayout from '../components/layouts/GuestLayout';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <LoginForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GuestLayout className="login">{page}</GuestLayout>;
};

export default Page;
