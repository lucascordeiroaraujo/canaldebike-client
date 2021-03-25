import React, { MouseEvent } from 'react';

import Header, { Logo, Menu, MenuItem, SearchForm, MenuMobile } from './style';

import { Container } from '~/styles/global';

import OutsideClickHandler from 'react-outside-click-handler';

import { FaSearch } from 'react-icons/fa';

import Link from 'next/link';

import { useRouter } from 'next/router';

import { useMenu } from '~/hooks/app/menu';

import Fade from 'react-reveal/Fade';

const header: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');

  const [searchFormOpened, setSearchFormOpen] = React.useState(false);

  const [menuMobileOpend, setMenuMobileOpen] = React.useState(false);

  const router = useRouter();

  const { menuData } = useMenu();

  const handleClickSubmitFormButton = (e: MouseEvent) => {
    e.preventDefault();

    if (window.innerWidth <= 1500 && !searchFormOpened) {
      setSearchFormOpen(true);

      return;
    }

    router.push(`/pesquisa/${searchText}`);

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
    return router.query.categorySlug === slug;
  };

  const handleSetSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
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
          {menuData && (
            <Menu
              searchFormOpened={searchFormOpened}
              menuMobileOpend={menuMobileOpend}
            >
              {menuData.map(menuItem => (
                <MenuItem
                  key={menuItem.id}
                  className={menuItem.classes.join(' ')}
                  currentCategory={isCurrentCategory(menuItem.slug)}
                >
                  <Fade bottom>
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
                        <span>{menuItem.title}</span>
                      </a>
                    )}
                  </Fade>
                </MenuItem>
              ))}
            </Menu>
          )}

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
                  onChange={handleSetSearch}
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
