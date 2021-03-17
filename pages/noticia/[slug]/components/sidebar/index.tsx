import React from 'react';

import Sidebar from './styled';

import Image from 'next/image';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const sidebar: React.FC = () => (
  <Sidebar>
    <div className="store">
      <Image
        src={require('~/public/images/placeholders/store.png')}
        alt="Conheça a Loja do Canal de Bike"
        title="Conheça a Loja do Canal de Bike"
        width="380"
        height="311"
      />
    </div>

    <div className="social-networking">
      <strong className="title">
        Siga as
        <br /> redes sociais
      </strong>

      <div className="social-networking-icons">
        <a
          href="#"
          title="Confira as fotos no nosso Instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="#"
          title="Inscreva-se no canal do YouTube"
          target="_blank"
          rel="noopener noreferrer"
          className="youtube"
        >
          <FaYoutube />
        </a>

        <a
          href="#"
          title="Curta nossa página no Facebook"
          target="_blank"
          rel="noopener noreferrer"
          className="facebook"
        >
          <FaFacebook />
        </a>

        <a
          href="#"
          title="Siga-nos no Twitter"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  </Sidebar>
);

export default sidebar;
