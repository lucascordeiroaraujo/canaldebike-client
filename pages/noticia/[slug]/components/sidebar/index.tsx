import React from 'react';

import Sidebar from './styled';

import Image from 'next/image';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const sidebar: React.FC = () => (
  <Sidebar>
    <Fade>
      <div className="store">
        <Image
          src={require('~/public/images/placeholders/store.png')}
          alt="Conheça a Loja do Canal de Bike"
          title="Conheça a Loja do Canal de Bike"
          width="380"
          height="311"
        />
      </div>
    </Fade>

    <div className="social-networking">
      <Fade>
        <strong className="title">
          Siga as
          <br /> redes sociais
        </strong>
      </Fade>

      <div className="social-networking-icons">
        <Fade left delay={200}>
          <a
            href="#"
            title="Confira as fotos no nosso Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </Fade>

        <Fade left delay={150}>
          <a
            href="#"
            title="Inscreva-se no canal do YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube"
          >
            <FaYoutube />
          </a>
        </Fade>

        <Fade left delay={100}>
          <a
            href="#"
            title="Curta nossa página no Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="facebook"
          >
            <FaFacebook />
          </a>
        </Fade>

        <Fade left>
          <a
            href="#"
            title="Siga-nos no Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </Fade>
      </div>
    </div>
  </Sidebar>
);

export default sidebar;
