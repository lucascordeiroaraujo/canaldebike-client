import React, { MouseEvent } from 'react';

import Header, { Logo, Menu, MenuItem, SearchForm, MenuMobile } from './style';

import { Container } from '~/styles/global';

import OutsideClickHandler from 'react-outside-click-handler';

import { FaSearch } from 'react-icons/fa';

import Link from 'next/link';

import { useRouter } from 'next/router';

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
        </Logo>

        <div className="menu-container">
          <Menu
            searchFormOpened={searchFormOpened}
            menuMobileOpend={menuMobileOpend}
          >
            <MenuItem currentCategory={isCurrentCategory('ultimas-noticias')}>
              <Link href="/categoria/ultimas-noticias">
                <a title="Confira as últimas notícias do Canal de Bike">
                  <span>Últimas Notícias</span>
                </a>
              </Link>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('mtb')}>
              <Link href="/categoria/mtb">
                <a title="Confira os posts da categoria MTB">
                  <span>MTB</span>
                </a>
              </Link>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('road-bike')}>
              <Link href="/categoria/road-bike">
                <a title="Confira os posts da categoria Road Bike">
                  <span>Road Bike</span>
                </a>
              </Link>
            </MenuItem>

            <MenuItem currentCategory={isCurrentCategory('gravel')}>
              <Link href="/categoria/gravel">
                <a title="Confira os posts da categoria Gravel">
                  <span>Gravel</span>
                </a>
              </Link>
            </MenuItem>

            <MenuItem className="store">
              <a
                href="#"
                title="Acessar a loja do Canal de Bike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Loja do Canal</span>
              </a>
            </MenuItem>
          </Menu>

          <OutsideClickHandler onOutsideClick={handleCloseSearchForm}>
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
