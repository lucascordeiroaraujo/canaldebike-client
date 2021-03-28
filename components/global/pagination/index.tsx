import React from 'react';

import Pagination from './style';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const pagination: React.FC = () => {
  return (
    <Fade>
      <Pagination>
        <li className="pagination-item current-page">
          <Link href="/">
            <a title="Ir para a página 1">1</a>
          </Link>
        </li>

        <li className="pagination-item">
          <Link href="/">
            <a title="Ir para a página 2">2</a>
          </Link>
        </li>

        <li className="pagination-item">
          <Link href="/">
            <a title="Ir para a página 3">3</a>
          </Link>
        </li>

        <li className="pagination-item">
          <Link href="/">
            <a title="Ir para a página 4">4</a>
          </Link>
        </li>

        <li className="pagination-item">
          <Link href="/">
            <a title="Ir para a página 5">5</a>
          </Link>
        </li>

        <li className="pagination-item">
          <span>...</span>
        </li>

        <li className="pagination-item">
          <Link href="/">
            <a title="Ir para a página 50">50</a>
          </Link>
        </li>
      </Pagination>
    </Fade>
  );
};

export default pagination;
