import AdCard from '../AdCard/AdCard';
import { Container } from '../Container/Container';
import styled from './AdsContainer.module.scss';

const AdsContainer = () => {
  return (
    <section className={styled.ads__container}>
      <Container>
        <AdCard />
      </Container>
    </section>
  );
};

export default AdsContainer;
