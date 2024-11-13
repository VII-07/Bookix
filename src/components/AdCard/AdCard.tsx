import Link from 'next/link';
import Image from 'next/image';
import styled from './adCard.module.scss';
import adImg1 from 'img/ad_image_1.jpeg';

const AdCard = () => {
  return (
    <div className={styled.ad__card__container}>
      <div>
        <h2>The best book sharing platform</h2>
        <p>
          Unleash the power of knowledge. Exchange books, explore new reads, and
          connect with a community of book lovers from around the world.
        </p>

        <Link href="/dsdfsd">
          <button>Find Book </button>
        </Link>
      </div>
      <Image src={adImg1} alt="ad book image" />
    </div>
  );
};

export default AdCard;
