import Link from 'next/link';
import Image from 'next/image';
import styled from './bookPlatformCard.module.scss';
import { StaticImageData } from 'next/image';

interface CardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  backgroundImage: string;
  adImage: StaticImageData;
  buttonBackgroundColor: string;
  backgroundColor: string;
}

const BookPlatformCard = ({
  title,
  description,
  buttonText,
  buttonLink,
  backgroundImage,
  buttonBackgroundColor,
  adImage,
  backgroundColor,
}: CardProps) => {
  return (
    <div
      className={styled.platformCard}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: `${backgroundColor}`,
      }}
    >
      <div>
        <h2>{title}</h2>
        <p>{description}</p>

        <Link href={buttonLink}>
          <button style={{ backgroundColor: `${buttonBackgroundColor}` }}>
            {buttonText}
          </button>
        </Link>
      </div>
      <Image src={adImage} alt="book image" />
    </div>
  );
};

export default BookPlatformCard;
