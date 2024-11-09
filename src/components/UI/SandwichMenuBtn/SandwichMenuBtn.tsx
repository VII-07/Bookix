import Image from "next/image";
import sendsiwchIcon from 'img/menu.svg';
import styled from './sandwichMenuBtn.module.scss'
const SandwichMenuBtn = () => {
    return ( 
        <button className={styled.sandwich__menu__btn}>
        <Image src={sendsiwchIcon} alt="sendsiwch-menu icon"/>
    </button>
     );
}
 
export default SandwichMenuBtn;