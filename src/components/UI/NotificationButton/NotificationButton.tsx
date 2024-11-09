import Image from "next/image";
import heartImg from 'img/notification.svg';
import styled from './notificationButton.module.scss'
const NotitficationButton = () => {
    return ( 
        <button className={styled.notification__btn}>
            <span></span>
            <Image src={heartImg} alt="heart"/>
        </button>
     );
}
 
export default NotitficationButton;