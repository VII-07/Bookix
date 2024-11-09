import styled from './headerInput.module.scss';
import Image from 'next/image';
import serchIcon from 'img/search-normal.svg';
const HeaderInput = () => {
  return (
    <div className={styled.search__container}>
      <Image src={serchIcon} alt="serch icon" />
      <input className={styled.input} type="text" placeholder="Find Books" />
    </div>
  );
};

export default HeaderInput;
