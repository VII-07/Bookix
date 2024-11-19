import Link from "next/link";
import styled from './white-button.module.scss'

export type WhiteButtonType = {
    textButton : string,
    linkButton: string,
}

const WhiteButton = ({textButton, linkButton} : WhiteButtonType) => {
    return ( 
        <Link href={linkButton}>
            <button className={styled.white__btn}>{textButton}</button>
        </Link>
     );
}
 
export default WhiteButton;