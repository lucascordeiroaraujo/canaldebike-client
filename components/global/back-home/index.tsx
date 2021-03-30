import React from 'react';

import BackHome from './style';

import { FaLongArrowAltLeft } from 'react-icons/fa';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const backHome = () => (
  <BackHome>
    <Fade>
      <Link href="/">
        <a title="Voltar para a página inicial">
          <FaLongArrowAltLeft />

          <span>Voltar para o ínicio</span>
        </a>
      </Link>
    </Fade>
  </BackHome>
);

export default backHome;
