import Image from 'next/image';
import styled from './my-book-card.module.scss';
import bookImg from 'img/image 20.png';
import {
  CalendarOutlined,
  FileTextOutlined,
  HeartFilled,
  StarOutlined,
} from '@ant-design/icons';
import WhiteButton from '../UI/WhiteButton/WhiteButton';
import BlueButton from '../UI/BlueButton/BlueButton';

const MyBookCard = () => {
  return (
    <div className={styled.my__book__card__container}>
      <div className={styled.my__book__card__text}>
        <div>
          <h3>The Library Book</h3>
          <button>
            <HeartFilled />
          </button>
        </div>
        <h4>Susan Orlean</h4>
      </div>
      <div className={styled.my__book__card__image__container}>
        <Image src={bookImg} alt="image book"></Image>
      </div>
      <div className={styled.my__book__card__description__container}>
        <div>
          <StarOutlined />
          <p>4.9</p>
        </div>
        <div>
          <CalendarOutlined />
          <p>2006</p>
        </div>
        <div>
          <FileTextOutlined />
          <p>Excellent</p>
        </div>
      </div>
      <div className={styled.my__book__card__buuton__container}>
        <WhiteButton linkButton='#' textButton='More Info'/>
        <BlueButton linkButton='#' textButton='Trade now'/>
      </div>
    </div>
  );
};

export default MyBookCard;
