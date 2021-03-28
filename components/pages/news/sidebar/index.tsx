import React from 'react';

import { useAppInfo } from '../../../../hooks/app/app';

import Link from 'next/link';

import Sidebar from './styled';

import Image from 'next/image';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

import Fade from 'react-reveal/Fade';

const sidebar: React.FC = () => {
  const { appInfo } = useAppInfo();

  if (!appInfo) return null;

  return (
    <Sidebar>
      {appInfo.store_link && (
        <Fade>
          <div className="store">
            <Link href={appInfo.store_link}>
              <a
                title="Conheça a Loja do Canal de Bike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={require('~/public/images/placeholders/store.png')}
                  alt="Conheça a Loja do Canal de Bike"
                  title="Conheça a Loja do Canal de Bike"
                  width="380"
                  height="311"
                />
              </a>
            </Link>
          </div>
        </Fade>
      )}

      <div className="social-networking">
        <Fade>
          <strong className="title">
            Siga as
            <br /> redes sociais
          </strong>
        </Fade>

        <div className="social-networking-icons">
          {appInfo.instagram && (
            <Fade left delay={200}>
              <a
                href={appInfo.instagram}
                title="Confira as fotos no nosso Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </Fade>
          )}

          {appInfo.youtube && (
            <Fade left delay={150}>
              <a
                href={appInfo.youtube}
                title="Inscreva-se no canal do YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube"
              >
                <FaYoutube />
              </a>
            </Fade>
          )}

          {appInfo.facebook && (
            <Fade left delay={100}>
              <a
                href={appInfo.facebook}
                title="Curta nossa página no Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook />
              </a>
            </Fade>
          )}

          {appInfo.twitter && (
            <Fade left>
              <a
                href={appInfo.twitter}
                title="Siga-nos no Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </Fade>
          )}
        </div>
      </div>
    </Sidebar>
  );
};

export default sidebar;
