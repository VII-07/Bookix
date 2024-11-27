import Link from 'next/link';
import { Container } from '../Container/Container';
import styled from './my-book.module.scss';
import MyBookCard from '../MyBookCard/MyBookCard';
import CustomCarousel from '../UI/CustomCarousel/CustomCarousel';

const MyBook = () => {
  return (
    <section>
      <Container>
        <div className={styled.my__book__container}>
          <div className={styled.my__book__top}>
            <h2>My Books</h2>
            <Link href="#">View All</Link>
          </div>
          <CustomCarousel>
            {[...Array(9)].map((_, index) => (
              <div key={index} className={styled.card__wrapper}>
                <MyBookCard />
              </div>
            ))}
          </CustomCarousel>
        </div>
      </Container>
    </section>
  );
};

export default MyBook;
