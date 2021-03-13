import React from 'react';

import Footer, { CopyRight } from './style';

import { Container } from '~/styles/global';

const footer: React.FC = () => {
  const [currentYear, setCurrentYear] = React.useState();

  const getYear = () => setCurrentYear(new Date().getFullYear() as any);

  React.useEffect(() => {
    getYear();
  }, []);

  return (
    <Footer>
      <Container className="footer-container">
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

          <a
            href="mailto:revistaridebike@gmail.com"
            title="Enviar e-mail"
            className="contact-email"
          >
            revistaridebike@gmail.com
          </a>
        </div>

        <div>
          <strong>
            Siga nas
            <br /> Redes Sociais
          </strong>
        </div>
      </Container>

      <CopyRight>
        <p>Copyright &copy; {currentYear} - Canal de Bike</p>
      </CopyRight>
    </Footer>
  );
};

export default footer;
