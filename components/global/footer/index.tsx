import React, { useState, useEffect, useCallback } from 'react';

import { useAppInfo } from '../../../hooks/app/app';

import { useMenu } from '../../../hooks/app/menu';

import Footer, { Newsletter, SocialNetworking, CopyRight } from './style';

import { Container } from '~/styles/global';

import { FaInstagram, FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa';

import Link from 'next/link';

import { BiLoaderCircle } from 'react-icons/bi';

import { FaCheckCircle, FaRegWindowClose } from 'react-icons/fa';

const footer = () => {
  const { appInfo } = useAppInfo();

  const { menuData } = useMenu();

  const [currentYear, setCurrentYear] = useState();

  const getYear = () => setCurrentYear(new Date().getFullYear() as any);

  useEffect(() => {
    getYear();
  }, []);

  const NEWSLETTER_INITIAL_STATE = {
    email: '',
  };

  const [newsletter, setNewsletter] = React.useState(NEWSLETTER_INITIAL_STATE);

  const [feedbackForm, setFeedbackForm] = React.useState({
    loader: false,
    show: false,
    success: true,
  });

  const sendNewsletter = async (event: any) => {
    event.preventDefault();

    setFeedbackForm({
      loader: true,
      show: true,
      success: false,
    });

    try {
      await fetch(
        `https://adm.canaldebike.com.br/?rest_route=/cdb/registerNewsletter`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
          body: JSON.stringify({
            body: Object.values(newsletter),
          }),
        },
      );

      setNewsletter(NEWSLETTER_INITIAL_STATE);

      setFeedbackForm({
        loader: false,
        show: true,
        success: true,
      });
    } catch (e) {
      setFeedbackForm({
        loader: false,
        show: true,
        success: false,
      });
    }

    setTimeout(() => {
      setFeedbackForm({
        ...feedbackForm,
        show: false,
      });
    }, 10000);
  };

  const resolveFeedback = useCallback(() => {
    if (feedbackForm.loader) {
      return (
        <>
          <BiLoaderCircle className="loader" />

          <span>Enviando informações...</span>
        </>
      );
    } else if (!feedbackForm.success) {
      return (
        <>
          <FaRegWindowClose className="error" />

          <span>Erro ao salvar informações, tente novamente.</span>
        </>
      );
    } else {
      return (
        <>
          <FaCheckCircle className="success" />

          <span>Cadastro realizado com sucesso.</span>
        </>
      );
    }
  }, [feedbackForm]);

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
            {menuData.map(menuItem => (
              <li key={menuItem.id}>
                {menuItem.target === '_self' ? (
                  <Link href={`/categoria/${menuItem.slug}`}>
                    <a title={menuItem.attr_title}>
                      <span>{menuItem.title}</span>
                    </a>
                  </Link>
                ) : (
                  <a
                    href={menuItem.slug}
                    title={menuItem.attr_title}
                    target={menuItem.target}
                  >
                    {menuItem.title}
                  </a>
                )}
              </li>
            ))}
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

          <Newsletter method="post" onSubmit={sendNewsletter}>
            <strong>Newsletter</strong>

            <p>Receba em primeira mão tudo sobre o mundo da bike</p>

            <div className="fields-container">
              <input
                type="text"
                placeholder="digite seu e-mail"
                value={newsletter.email}
                disabled={feedbackForm.loader}
                onChange={e =>
                  setNewsletter({
                    ...newsletter,
                    email: e.target.value,
                  })
                }
              />

              <input type="submit" value="Assinar" />
            </div>

            {feedbackForm.show && (
              <div className="feedback-form">{resolveFeedback()}</div>
            )}
          </Newsletter>
        </div>

        <div>
          <strong>
            Siga nas
            <br /> Redes Sociais
          </strong>

          <SocialNetworking>
            {appInfo.instagram && (
              <a
                href={`https://www.instagram.com/${appInfo.instagram}`}
                title="Confira as fotos no nosso Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            )}

            {appInfo.youtube && (
              <a
                href={`https://www.youtube.com/channel/${appInfo.youtube}`}
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
                href={`https://www.facebook.com/${appInfo.facebook}`}
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
                href={`https://www.twitter.com/${appInfo.twitter}`}
                title="Siga-nos no Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            )}
          </SocialNetworking>
        </div>
      </Container>

      <CopyRight>
        <p>Copyright &copy; {currentYear} - Canal de Bike</p>
      </CopyRight>
    </Footer>
  );
};

export default footer;
