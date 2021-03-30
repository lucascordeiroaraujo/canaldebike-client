import React from 'react';

import EmptyState from './style';

import BackToHome from '~/components/global/back-home';

interface IEmptyStateProps {
  description: string;
}

const emptyState = ({ description }: IEmptyStateProps) => (
  <EmptyState>
    <strong>{description}</strong>

    <BackToHome />
  </EmptyState>
);

export default emptyState;
