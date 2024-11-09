import Link from 'next/link';
import { Container } from '../Container/Container';
import styled from './header.module.scss';
import HeaderInput from '../UI/HeaderInput/HeaderInput';
import FavoriteButton from '../UI/FavoriteButton/FavoriteButton';
import NotitficationButton from '../UI/NotificationButton/NotificationButton';
import SandwichMenuBtn from '../UI/SandwichMenuBtn/SandwichMenuBtn';
import Avatar from '../UI/AvatarIcon/AvatarIcon';

const Header = () => {
  return (
    <header className={styled.header}>
      <Container>
        <div className={styled.header__container}>
          <div className={styled.header__container__left}>
            <Link className={styled.logo__link} href="/">
              <span className={styled.logo}>Bookix</span>
            </Link>
            <HeaderInput />
          </div>
          <div className={styled.header__container__right}>
            <FavoriteButton />
            <NotitficationButton />
            <SandwichMenuBtn />
            <Avatar />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
