import AdCard from '../AdCard/AdCard';
import { Container } from '../Container/Container';
import styled from './adsContainer.module.scss';
import adImageLeft from 'img/ad_image_1.jpeg';
import adBgRight from 'img/ad-2.png';
import adBgLeft from 'img/image_ad1.png';
import adImageRight from 'img/adImage-2.jpeg';

const AdsContainer = () => {
  return (
    <section className={styled.ads__container}>
      <Container>
        <div className={styled.ads__container__content}>
          <AdCard
            title="The best book sharing platform"
            description="Unleash the power of knowledge. Exchange books, explore new reads, and connect with a community of book lovers from around the world."
            buttonText="Find Book"
            backgroundImage={adBgLeft.src}
            adImage={adImageLeft}
            buttonBackgroundColor="#3563e9"
            buttonLink="/find-book"
            backgroundColor='#54a6ff'
          />
          <AdCard
            title="A way to exchange read books"
            description="Finished a book and ready for a new adventure? Trade your read books with fellow readers through our seamless exchange system."
            buttonText="Check Trades"
            backgroundImage={adBgRight.src}
            adImage={adImageRight}
            buttonBackgroundColor="#54A6FF"
            buttonLink="/check-trades"
            backgroundColor='#3563E9'
          />
        </div>
      </Container>
    </section>
  );
};

export default AdsContainer;
