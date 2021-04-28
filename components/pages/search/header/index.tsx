import React from 'react';

import SearchHeader from './style';

import Fade from 'react-reveal/Fade';

interface IHeaderProps {
  searchTerm: string;
}

const searchHeader = ({ searchTerm }: IHeaderProps) => {
  return (
    <SearchHeader>
      <Fade>
        <h1 className="default-title">Pesquisa</h1>

        <p>
          Sua pesquisa por: <strong>{searchTerm}</strong>
        </p>
      </Fade>
    </SearchHeader>
  );
};

export default searchHeader;
