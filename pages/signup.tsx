import { ReactElement } from 'react';
import SignupForm from '../components/forms/SignupForm';
import MainLayout from '../components/layouts/MainLayout';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <SignupForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout className="signup">{page}</MainLayout>;
};

export default Page;
