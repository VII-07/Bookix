import Image from "next/image";
import heartImg from 'img/heart.svg';
import styled from './favoritButton.module.scss'
const FavoriteButton = () => {
    return ( 
        <button className={styled.favorite__btn}>
            <Image src={heartImg} alt="heart"/>
        </button>
     );
}
 
export default FavoriteButton;