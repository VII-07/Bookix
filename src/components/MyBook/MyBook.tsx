import Link from "next/link";
import { Container } from "../Container/Container";
import styled from './my-book.module.scss';

const MyBook = () => {
    return ( 
    <section>
        <Container>
            <div className={styled.my__book__container}>
                <div className={styled.my__book__top}>
                    <h2>My Books</h2>
                    <Link href='#'>View All</Link>
                </div>
                <div className={styled.my__book__card__container}>
                    
                </div>
            </div>
        </Container>
    </section>
);
}
 
export default MyBook;