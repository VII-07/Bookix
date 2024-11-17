import BookPlatformCardsContainer from '@/components/BookPlatformCardsContainer/BookPlatformCardsContainer';
import MyBook from '@/components/MyBook/MyBook';
import styled from 'styles/pages/homePage.module.scss';

export default function Home() {
  return (
    <div className={styled.home__container}>
      <BookPlatformCardsContainer/>
      <MyBook/>
    </div>
  );
}
