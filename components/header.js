import Link from "next/link";
import { useState } from "react";
import styles from './styles/header.module.css';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const MenuFunction = () => {
        setMenu(!menu)
    }
    return (
        <nav className={styles.NavWrapper}>
            <h1 className={styles.logo}>◯◯美容室</h1>
            <ul className={styles.ListWrapper}>
                <li className={styles.List}>
                    <Link href=''>
                        Home
                    </Link>
                </li>
                <li className={styles.List}>
                    <Link href='/Concept-page'>
                        Concept
                    </Link>
                </li>
                <li className={styles.List}>
                    <Link href='/Price-page'>
                        Price
                    </Link>
                </li>
                <li className={styles.List}>
                    <Link href='/Salon-page'>
                        Salon
                    </Link>
                </li>
                <li className={styles.List}>
                    <Link href='/Contact-page'>
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header