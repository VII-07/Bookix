import AdsContainer from '@/components/AdsContainer/AdsContainer';
import styled from 'styles/homePage.module.scss';

export default function Home() {
  return (
    <div className={styled.home__container}>
      <AdsContainer />
    </div>
  );
}
