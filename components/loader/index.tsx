import React from 'react';

import Loader from './style';

const cpLoader: React.FC = () => (
  <Loader>
    <img
      src={require('~/public/images/canal-de-bike.png')}
      alt="Canal de Bike"
      title="Canal de Bike"
      width="200"
      height="19"
    />

    <p>Aguarde, carregando...</p>
  </Loader>
);

export default cpLoader;
