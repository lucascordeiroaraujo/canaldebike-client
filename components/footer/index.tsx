import React from 'react';

import { useAppInfo } from '~/hooks/app';

import Footer, { CopyRight } from './style';

import { Container } from '~/styles/global';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

const footer: React.FC = () => {
  const { appInfo } = useAppInfo();

  const [currentYear, setCurrentYear] = React.useState();

  const getYear = () => setCurrentYear(new Date().getFullYear() as any);

  React.useEffect(() => {
    getYear();
  }, []);

  return (
    <Footer>
      <Container smallContainer className="footer-container">
        <div>
          <img
            src={require('~/public/images/canal-de-bike-footer.png')}
            alt="Canal de Bike"
            title="Canal de Bike"
            width="183"
            height="223"
          />
        </div>

        <div>
          <strong>Categorias</strong>

          <ul>
            <li>
              <a href="#" title="Confira as últimas notícias do Canal de Bike">
                Últimas notícias
              </a>
            </li>

            <li>
              <a href="#" title="Confira os vídoes do Canal de Bike">
                Vídeos
              </a>
            </li>

            <li>
              <a href="#" title="Confira os posts da categoria MTB">
                MTB
              </a>
            </li>

            <li>
              <a href="#" title="Confira os posts da categoria Speed">
                Speed
              </a>
            </li>

            <li>
              <a
                href="#"
                title="Acessar a loja do Canal de Bike"
                target="_blank"
                rel="noopener noreferrer"
              >
                Loja do Canal
              </a>
            </li>
          </ul>
        </div>

        <div>
          <strong>Contato</strong>

          {appInfo.email_address && (
            <a
              href={`mailto:${appInfo.email_address}`}
              title="Enviar e-mail"
              className="contact-email"
            >
              {appInfo.email_address}
            </a>
          )}

          <form action="#" method="post">
            <strong>Newsletter</strong>

            <p>Receba em primeira mão tudo sobre o mundo da bike</p>

            <div>
              <input type="text" placeholder="digite seu e-mail" />

              <input type="submit" value="Assinar" />
            </div>
          </form>
        </div>

        <div>
          <strong>
            Siga nas
            <br /> Redes Sociais
          </strong>

          <div className="social-networking">
            {appInfo.instagram && (
              <a
                href={appInfo.instagram}
                title="Confira as fotos no nosso Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}

            {appInfo.youtube && (
              <a
                href={appInfo.youtube}
                title="Inscreva-se no canal do YouTube"
                target="_blank"
                rel="noopener noreferrer"
                className="youtube"
              >
                <FaYoutube />
              </a>
            )}

            {appInfo.facebook && (
              <a
                href={appInfo.facebook}
                title="Curta nossa página no Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="facebook"
              >
                <FaFacebook />
              </a>
            )}

            {appInfo.twitter && (
              <a
                href={appInfo.twitter}
                title="Siga-nos no Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            )}
          </div>
        </div>
      </Container>

      <CopyRight>
        <p>Copyright &copy; {currentYear} - Canal de Bike</p>
      </CopyRight>
    </Footer>
  );
};

export default footer;
