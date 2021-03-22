import React from 'react';

import { useCurrentCategory } from '~/hooks/category';

import CategoryHeader, { CategoryFilter } from './style';

import { FaCaretDown } from 'react-icons/fa';

import OutsideClickHandler from 'react-outside-click-handler';

import Fade from 'react-reveal/Fade';

import Link from 'next/link';

const categoryHeader: React.FC = () => {
  const { currentCategory } = useCurrentCategory();

  const [openedSubCategories, setOpenedSubCategories] = React.useState(false);

  const [selectedCategory, setSelectedCategoty] = React.useState(
    'Todas as categorias',
  );

  const handleToggleSubCategoriesList = () => {
    setOpenedSubCategories(!openedSubCategories);
  };

  const handleCloseSubCategories = () => {
    setOpenedSubCategories(false);
  };

  const isOpenedSubCategories = () => {
    return openedSubCategories ? 'opened-subcategories' : '';
  };

  const handleSetSelectedCategoryName = (categoryName: string) => {
    setSelectedCategoty(categoryName);
  };

  return (
    <CategoryHeader>
      <Fade>
        <h1 className="default-title">{currentCategory.name}</h1>
      </Fade>

      {currentCategory.subcategories &&
        currentCategory.subcategories.length >= 1 && (
          <CategoryFilter>
            <OutsideClickHandler onOutsideClick={handleCloseSubCategories}>
              <button
                className="select-button"
                onClick={handleToggleSubCategoriesList}
              >
                <span>{selectedCategory}</span>

                <FaCaretDown />
              </button>
            </OutsideClickHandler>

            <ul className={`select-button-list ${isOpenedSubCategories()}`}>
              {currentCategory.subcategories.map(category => (
                <li
                  key={category.id.toString()}
                  className="select-button-list-item"
                >
                  <Link
                    href={`/categoria/${currentCategory.slug}/${category.slug}`}
                  >
                    <a
                      title="Confira os posts"
                      onClick={() =>
                        handleSetSelectedCategoryName(category.name)
                      }
                    >
                      {category.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </CategoryFilter>
        )}
    </CategoryHeader>
  );
};

export default categoryHeader;
