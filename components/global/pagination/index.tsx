import React from 'react';

import Pagination from './style';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

export interface IPaginationProps {
  show: boolean;
  totalPosts: number;
  totalPages: number;
  numbers: Array<{
    number: number;
    active: boolean;
  }>;
}

interface IProps extends IPaginationProps {
  slug: string;
}

const pagination = ({ show, numbers, slug }: IProps) => {
  if (!show) return null;

  return (
    <Fade>
      <Pagination>
        {numbers.map(page => (
          <li
            key={page.number}
            className={`pagination-item ${page.active ? 'current-page' : ''}`}
          >
            <Link href={`/${slug}/${page.number}`}>
              <a title={`Ir para a página ${page.number}`}>{page.number}</a>
            </Link>
          </li>
        ))}
      </Pagination>
    </Fade>
  );
};

export default pagination;
