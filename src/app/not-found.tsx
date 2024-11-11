'use client'

import styled from '../styles/not-found.module.scss';
import { Container } from '@/components/Container/Container';
import errorSvg from 'img/404.svg';
import Image from 'next/image';
import Link from 'next/link';

const Custom404 = () => {
  return (
    <section>
      <Container>
        <div className={styled.error__container}>
          <h1>Page not found... but you`re still awesome!</h1>
          <p>Head back to the homepage and keep being great!</p>
          <div>
            <span>4</span>
            <Image src={errorSvg} alt="error code 404" />
            <span>4</span>
          </div>
          <button><Link href="/">Back Home</Link></button>
        </div>
      </Container>
    </section>
  );
};

export default Custom404;
