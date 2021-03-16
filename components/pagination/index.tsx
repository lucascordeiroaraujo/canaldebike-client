import React from 'react';

import Pagination from './style';

import Link from 'next/link';

const pagination: React.FC = () => {
  return (
    <Pagination>
      <li className="current-page">
        <Link href="/">
          <a title="Ir para a página 1">1</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a title="Ir para a página 2">2</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a title="Ir para a página 3">3</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a title="Ir para a página 4">4</a>
        </Link>
      </li>

      <li>
        <Link href="/">
          <a title="Ir para a página 5">5</a>
        </Link>
      </li>

      <li>
        <span>...</span>
      </li>

      <li>
        <Link href="/">
          <a title="Ir para a página 50">50</a>
        </Link>
      </li>
    </Pagination>
  );
};

export default pagination;
