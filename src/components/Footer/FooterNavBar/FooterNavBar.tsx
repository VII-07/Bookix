import Link from "next/link";
import styled from './footerNavBar.module.scss';
import { navItems } from "./footerNavBarList";

const FooterNavBar = () => {
    return ( 
        <nav className={styled.navbar}>
            <ul className={styled.navbar__list}>
                {
                    navItems.map(item => {
                        return (
                            <li key={item.id} className={styled.navbar__list__item}>
                                <Link href={item.link}>{item.label}</Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
     );
}
 
export default FooterNavBar;