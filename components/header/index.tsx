import React, { MouseEvent } from 'react';

import Header from './style';

import { Container } from '~/styles/global';

import OutsideClickHandler from 'react-outside-click-handler';

import { FaSearch } from 'react-icons/fa';

const header: React.FC = () => {
  const [searchFormOpened, setSearchFormOpen] = React.useState(false);

  const [menuMobileOpend, setMenuMobileOpen] = React.useState(false);

  const handleClickSubmitFormButton = (e: MouseEvent) => {
    e.preventDefault();

    if (window.innerWidth <= 1500 && !searchFormOpened) {
      setSearchFormOpen(true);

      return;
    }

    console.log('api search');

    handleCloseSearchForm();
  };

  const isSearchFormOpened = () => {
    return searchFormOpened ? 'search-form-opened' : '';
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

  const isMenuMobileOpened = () => {
    return menuMobileOpend ? 'menu-opened' : '';
  };

  return (
    <Header>
      <Container className="header-container">
        <div className={isSearchFormOpened()}>
          <img
            src={require('~/public/images/canal-de-bike.png')}
            alt="Canal de Bike"
            title="Canal de Bike"
            width="307"
            height="29"
          />
        </div>

        <div>
          <ul className={`${isSearchFormOpened()} ${isMenuMobileOpened()}`}>
            <li className="active">
              <a href="#" title="Confira as últimas notícias do Canal de Bike">
                <span>Últimas Notícias</span>
              </a>
            </li>

            <li>
              <a href="#" title="Confira os posts da categoria MTB">
                <span>MTB</span>
              </a>
            </li>

            <li>
              <a href="#" title="Confira os posts da categoria Road Bike">
                <span>Road Bike</span>
              </a>
            </li>

            <li>
              <a href="#" title="Confira os posts da categoria Gravel">
                <span>Gravel</span>
              </a>
            </li>

            <li className="store">
              <a
                href="#"
                title="Acessar a loja do Canal de Bike"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Loja do Canal</span>
              </a>
            </li>
          </ul>

          <OutsideClickHandler onOutsideClick={handleCloseSearchForm}>
            <form action="#" method="post">
              <input
                type="text"
                placeholder="buscar notícia"
                className={isSearchFormOpened()}
              />

              <button onClick={handleClickSubmitFormButton}>
                <FaSearch />
              </button>
            </form>
          </OutsideClickHandler>

          <OutsideClickHandler onOutsideClick={handleCloseMenuMobile}>
            <button
              className={`menu-mobile ${isMenuMobileOpened()}`}
              onClick={handleToggleMenuMobile}
            >
              <span></span>
            </button>
          </OutsideClickHandler>
        </div>
      </Container>
    </Header>
  );
};

export default header;
