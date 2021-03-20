import React, { MouseEvent } from 'react';

import Header, { Logo, Menu, MenuItem, SearchForm, MenuMobile } from './style';

import { Container } from '~/styles/global';

import OutsideClickHandler from 'react-outside-click-handler';

import { FaSearch } from 'react-icons/fa';

import Link from 'next/link';

import { useRouter } from 'next/router';

import Fade from 'react-reveal/Fade';

const header: React.FC = () => {
  const [searchFormOpened, setSearchFormOpen] = React.useState(false);

  const [menuMobileOpend, setMenuMobileOpen] = React.useState(false);

  const router = useRouter();

  const handleClickSubmitFormButton = (e: MouseEvent) => {
    e.preventDefault();

    if (window.innerWidth <= 1500 && !searchFormOpened) {
      setSearchFormOpen(true);

      return;
    }

    // TODO: api search

    handleCloseSearchForm();
  };

  const handleCloseSearchForm = () => {
    setSearchFormOpen(false);
  };

  const handleCloseMenuMobile = () => {
    setMenuMobileOpen(false);
  };

  const handleToggleMenuMobile = () => {
    setMenuMobileOpen(!menuMobileOpend);
  };

  const isCurrentCategory = (slug: string) => {
    return router.query.slug === slug;
  };

  return (
    <Header>
      <Container className="header-container">
        <Logo searchFormOpened={searchFormOpened} className="logo-container">
          <Fade>
            <Link href="/">
              <a title="Canal de Bike - Página Inicial">
                <img
                  src={require('~/public/images/canal-de-bike.png')}
                  alt="Canal de Bike"
                  title="Canal de Bike"
                  width="307"
                  height="29"
                />
              </a>
            </Link>
          </Fade>
        </Logo>

        <div className="menu-container">
          <Menu
            searchFormOpened={searchFormOpened}
            menuMobileOpend={menuMobileOpend}
          >
            <MenuItem currentCategory={isCurrentCategory('ultimas-noticias')}>
              <Fade bottom>
                <Link href="/categoria/ultimas-noticias">
                  <a title="Confira as últimas notícias do Canal de Bike">
                    <span>Últimas Notícias</span>
                  </a>
                </Link>
              </Fade>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('mtb')}>
              <Fade bottom delay={50}>
                <Link href="/categoria/mtb">
                  <a title="Confira os posts da categoria MTB">
                    <span>MTB</span>
                  </a>
                </Link>
              </Fade>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('road-bike')}>
              <Fade bottom delay={100}>
                <Link href="/categoria/road-bike">
                  <a title="Confira os posts da categoria Road Bike">
                    <span>Road Bike</span>
                  </a>
                </Link>
              </Fade>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('gravel')}>
              <Fade bottom delay={150}>
                <Link href="/categoria/gravel">
                  <a title="Confira os posts da categoria Gravel">
                    <span>Gravel</span>
                  </a>
                </Link>
              </Fade>
            </MenuItem>

            <MenuItem className="store">
              <Fade bottom delay={200}>
                <a
                  href="#"
                  title="Acessar a loja do Canal de Bike"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Loja do Canal</span>
                </a>
              </Fade>
            </MenuItem>
          </Menu>

          <OutsideClickHandler onOutsideClick={handleCloseSearchForm}>
            <Fade delay={250}>
              <SearchForm
                searchFormOpened={searchFormOpened}
                action="#"
                method="post"
              >
                <input
                  type="text"
                  placeholder="buscar notícia"
                  className="form-search-text-field"
                />

                <button
                  className="form-search-submit-button"
                  onClick={handleClickSubmitFormButton}
                >
                  <FaSearch />
                </button>
              </SearchForm>
            </Fade>
          </OutsideClickHandler>

          <OutsideClickHandler onOutsideClick={handleCloseMenuMobile}>
            <MenuMobile
              menuMobileOpend={menuMobileOpend}
              onClick={handleToggleMenuMobile}
            >
              <span />
            </MenuMobile>
          </OutsideClickHandler>
        </div>
      </Container>
    </Header>
  );
};

export default header;
