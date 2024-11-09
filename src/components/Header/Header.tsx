import Link from 'next/link';
import { Container } from '../Container/Container';
import styled from './header.module.scss';
import HeaderInput from '../UI/HeaderInput/HeaderInput';
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton';
import NotitficationButton from '../UI/NotificationButton/NotificationButton';

const Header = () => {
  return (
    <header className={styled.header}>
      <Container>
        <div className={styled.header__container}>
          <Link className={styled.logo__link} href="/">
            <span className={styled.logo}>Bookix</span>
          </Link>
          <HeaderInput/>
          <FavoriteButton/>
          <NotitficationButton/>
        </div>

      </Container>
    </header>
  );
};

export default Header;
