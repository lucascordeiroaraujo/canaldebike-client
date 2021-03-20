import React from 'react';

import Post from './style';

import Image from 'next/image';

import Link from 'next/link';

import Fade from 'react-reveal/Fade';

const post: React.FC = () => (
  <Post>
    <Fade>
      <div className="featured-image-container">
        <Image
          src="https://canaldebike.com.br/img/uploaded/main_dQ2h3M1614708635.jpeg"
          alt=""
          title=""
          width="980"
          height="550"
          layout="responsive"
        />
      </div>
    </Fade>

    <Fade bottom>
      <div className="post-date-and-author">
        <span>criado em 02/03/2021 por</span>

        <Link href="/autor/camila-melo">
          <a title="Confira os posts do Autor">Camila Melo</a>
        </Link>
      </div>
    </Fade>

    <Fade bottom delay={100}>
      <h1>
        Capacetes Giro unem conforto e proteção em todas as modalidades do
        ciclismo.
      </h1>
    </Fade>

    <Fade bottom delay={150}>
      <h2>Marca tem ampla variedade de produtos para todos os bikers.</h2>
    </Fade>

    <Fade delay={200}>
      <p>
        Foi com o desejo de criar o capacete ideal que Jim Gentes criou, há mais
        de 30 anos, o Giro Prolight, o primeiro capacete moderno, ventilado e
        que parecia não pesar nada. Desde então a Giro é uma marca conhecida
        pela maioria dos ciclistas, principalmente pela sua ampla linha de
        capacetes.
      </p>

      <p>
        “Alma e ciência” é a filosofia da marca, onde a pedalada e a percepção
        dos atletas são tão importantes quanto os testes em laboratório.
      </p>

      <p>
        Pensando nos diferentes grupos de ciclistas e modalidades, a Giro
        investe em uma gama bem variada de produtos, com o objetivo é oferecer
        sempre o melhor em design, conforto e tecnologia.
      </p>

      <p>
        Conheça alguns modelos de capacetes da marca para diferentes pedaladas:
      </p>

      <h3>Para quem ama andar de speed</h3>

      <h4>Capacete Giro Helios Spherical Mips</h4>

      <p>
        O Capacete Helios Spherical da Giro foi desenvolvido com o auxílio de
        atletas profissionais, portanto conforto, performance e proteção são
        evidentes nesse capacete. Possui design e desempenho extraordinário,
        utilizando tecnologia esférica, permite que o revestimento externo do
        capacete gire ao redor do revestimento interno durante uma colisão.
        Assim, conta com a tecnologia Mips® (Multi directional Impact Protection
        System - Sistema de proteção à impactos multi direcionais) otimizando
        ainda mais sua segurança. Fabricação In-mold - casco de seis camadas em
        policarbonato injetado em EPS de multi densidades, garante leveza e
        maior resistência.
      </p>

      <img
        src="https://canaldebike.com.br/img/uploaded/EInKf01614708418.jpeg"
        alt="Capacete Giro Helios Spherical Mips"
        title="Capacete Giro Helios Spherical Mips"
        width="768"
        height="768"
      />

      <h3>Para quem curte MTB</h3>

      <h4>Capacete Giro Source Mips</h4>

      <p>
        O capacete Source MIPS combina desempenho avançado e proteção em um
        design resistente e pronto para trilhas. Apresentando cobertura profunda
        com ventilação agressiva de 16 aberturas juntamente com canalização
        interna profunda, ajuda a manter a cabeça fresca, mesmo no calor.
        Garante conforto e uma sensação de segurança com sistema de ajuste Roc
        Loc 5 com proteção MIPS® integrada, além de uma viseira ajustável estilo
        moto e durabilidade total Hardbody™. É um capacete equipado para
        diversão e aventura.
      </p>

      <img
        src="https://canaldebike.com.br/img/uploaded/NIxWiq1614708517.jpeg"
        alt="Capacete Giro Source Mips"
        title="Capacete Giro Source Mips"
        width="768"
        height="768"
      />

      <h3>Um modelo versátil</h3>

      <h4>Capacete Giro Isode</h4>

      <p>
        O Isode é o novo modelo de capacete da marca Giro, destinado ao ciclismo
        urbano (MTB, SPEED/ROAD e LAZER), podendo ser adquirido para uso
        esportivo e recreativo. Possui estilo clássico e design
        compacto/simplista, com excelente ventilação. É uma ótima indicação para
        uso urbano, em trilhas leves e para entusiastas de ciclismo de estrada
        (Road/Speed).
      </p>

      <img
        src="https://canaldebike.com.br/img/uploaded/Gv50MC1614708594.jpeg"
        alt="Capacete Giro Isode"
        title="Capacete Giro Isode"
        width="768"
        height="768"
      />
    </Fade>
  </Post>
);

export default post;
