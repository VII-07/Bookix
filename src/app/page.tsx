import BookPlatformCardsContainer from '@/components/BookPlatformCardsContainer/BookPlatformCardsContainer';
import styled from 'styles/pages/homePage.module.scss';

export default function Home() {
  return (
    <div className={styled.home__container}>
      <BookPlatformCardsContainer/>
    </div>
  );
}
