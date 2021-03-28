import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Loader from '~/components/global/loader';

const cpError = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/`).then(() => window.scrollTo(0, 0));
  }, []);

  return <Loader />;
};

export default cpError;
