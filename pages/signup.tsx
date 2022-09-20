import { ReactElement } from 'react';
import SignupForm from '../components/forms/SignupForm';
import GuestLayout from '../components/layouts/GuestLayout';
import { NextPageWithLayout } from './_app';

const Page: NextPageWithLayout = () => {
  return <SignupForm />;
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <GuestLayout className="signup">{page}</GuestLayout>;
};

export default Page;
