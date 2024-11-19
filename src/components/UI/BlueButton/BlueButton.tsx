import Link from "next/link";
import { WhiteButtonType } from "../WhiteButton/WhiteButton";
import styled from './blue-button.module.scss';

const BlueButton = ({linkButton, textButton}: WhiteButtonType) => {
    return ( 
        <Link  href={linkButton}>
            <button className={styled.blue__btn}>{textButton}</button>
        </Link>
     );
}
 
export default BlueButton;