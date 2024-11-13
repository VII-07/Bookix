import Link from 'next/link';
import Image from 'next/image';
import styled from './adCard.module.scss';
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

const AdCard =({ title, description, buttonText, buttonLink, backgroundImage, buttonBackgroundColor,adImage,backgroundColor } : CardProps) => {
  return (
    <div className={styled.ad__card__container} style={{backgroundImage:`url(${backgroundImage})`,backgroundColor: `${backgroundColor}`}}>
      <div>
        <h2>{title}</h2>
        <p>
          {description}
        </p>

        <Link href={buttonLink}>
          <button style={{backgroundColor:`${buttonBackgroundColor}`}}>{buttonText}</button>
        </Link>
      </div>
      <Image src={adImage} alt="ad book image" />
    </div>
  );
};

export default AdCard;
