import React from 'react';

import CategoryHeader, { CategoryFilter } from './style';

import { FaCaretDown } from 'react-icons/fa';

import OutsideClickHandler from 'react-outside-click-handler';

const categoryHeader: React.FC = () => {
  const [openedSubCategories, setOpenedSubCategories] = React.useState(false);

  const handleToggleSubCategoriesList = () => {
    setOpenedSubCategories(!openedSubCategories);
  };

  const handleCloseSubCategories = () => {
    setOpenedSubCategories(false);
  };

  const isOpenedSubCategories = () => {
    return openedSubCategories ? 'opened-subcategories' : '';
  };

  return (
    <CategoryHeader>
      <h1 className="default-title">
        Tudo sobre o<br /> mundo da bike
      </h1>

      <CategoryFilter>
        <OutsideClickHandler onOutsideClick={handleCloseSubCategories}>
          <button
            className="select-button"
            onClick={handleToggleSubCategoriesList}
          >
            <span>Todas as categorias</span>

            <FaCaretDown />
          </button>
        </OutsideClickHandler>

        <ul className={`select-button-list ${isOpenedSubCategories()}`}>
          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 1
            </a>
          </li>

          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 2
            </a>
          </li>

          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 3
            </a>
          </li>

          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 1
            </a>
          </li>

          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 2
            </a>
          </li>

          <li className="select-button-list-item">
            <a href="#" title="Confira os posts">
              Subcategoria 3
            </a>
          </li>
        </ul>
      </CategoryFilter>
    </CategoryHeader>
  );
};

export default categoryHeader;
