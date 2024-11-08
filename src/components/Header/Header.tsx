import Link from 'next/link';
import Image from 'next/image';
import logoImg from 'img/Logo.svg';
import { Container } from '../Container/Container';
import styled from './header.module.scss';

const Header = () => {
  return (
    <header className={styled.header}>
      <Container>
        <Link href="/">
          <Image src={logoImg} alt="logo" />
        </Link>
      </Container>
    </header>
  );
};

export default Header;
