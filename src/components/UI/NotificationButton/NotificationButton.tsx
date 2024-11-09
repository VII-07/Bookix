import Image from "next/image";
import notificationImg from 'img/notification.svg';
import styled from './notificationButton.module.scss'
const NotitficationButton = () => {
    return ( 
        <button className={styled.notification__btn}>
            <span></span>
            <Image src={notificationImg} alt="notification icon"/>
        </button>
     );
}
 
export default NotitficationButton;