import React from 'react';

import Header from './style';

import { Container } from '~/styles/global';

const header: React.FC = () => (
  <Header>
    <Container className="header-container">
      <img
        src={require('~/public/images/canal-de-bike.png')}
        alt="Canal de Bike"
        title="Canal de Bike"
        width="307"
        height="29"
      />

      <div>
        <ul>
          <li className="active">
            <a href="#" title="aa">
              <span>Últimas Notícias</span>
            </a>
          </li>

          <li>
            <a href="#" title="aa">
              <span>MTB</span>
            </a>
          </li>

          <li>
            <a href="#" title="aa">
              <span>Road Bike</span>
            </a>
          </li>

          <li>
            <a href="#" title="aa">
              <span>Gravel</span>
            </a>
          </li>

          <li>
            <a href="#" title="aa" target="_blank" rel="noopener noreferrer">
              <span>Loja do Canal</span>
            </a>
          </li>
        </ul>

        <form action="#" method="post">
          <input type="text" placeholder="buscar notícia" />

          <button>pesquisar</button>
        </form>
      </div>
    </Container>
  </Header>
);

export default header;
