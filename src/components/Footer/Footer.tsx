import Link from 'next/link';
import { Container } from '../Container/Container';
import styled from './footer.module.scss';
import FooterNavBar from './FooterNavBar/FooterNavBar';

const Footer = () => {
  return (
    <footer className={styled.footer}>
      <Container>
        <div className={styled.footer__container}>
          <h3>Bookix</h3>
          <FooterNavBar />
          <span className={styled.footer__solid}></span>
          <div className={styled.license__container}>
            <p>© 2024 Bookix. All rights reserved.</p>
            <ul>
              <li>
                <Link href="#">Terms</Link>
              </li>
              <li>
                <Link href="#">Privacy</Link>
              </li>
              <li>
                <Link href="#">Cookies</Link>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
