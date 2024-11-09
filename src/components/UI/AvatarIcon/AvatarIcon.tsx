import Image from 'next/image';
import avatar from 'img/092d7fd93770b7c7edb23a18f6c454a6.jpeg';
import styled from './avatarIcon.module.scss';
const Avatar = () => {
  return (
    <button className={styled.avatar__btn}>
      <Image src={avatar} alt="avatar" />
    </button>
  );
};

export default Avatar;
