import React from 'react';

import { useRouter } from 'next/router';

import Loader from '~/components/loader';

const cpError: React.FC = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push(`/`).then(() => window.scrollTo(0, 0));
  }, []);

  return <Loader />

};

export default cpError;
