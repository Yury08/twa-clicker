import React, { FC } from 'react'
import Link from 'next/link';
import styles from "./Navigation.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faHouse, faListCheck } from '@fortawesome/free-solid-svg-icons';




export const Navigation: FC = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__item}>
                <Link href="/friends" className={styles.navigation__item_title}>
                    <FontAwesomeIcon className={styles.navigation__icon} icon={faUserGroup} />
                    <p>friends</p>
                </Link>
            </div>
            <div className={styles.navigation__item}>
                <Link href="/" className={styles.navigation__item_title}>
                    <FontAwesomeIcon className={styles.navigation__icon} icon={faHouse} />
                    <p>home</p>
                </Link>
            </div>
            <div className={styles.navigation__item}>
                <Link href="/tasks" className={styles.navigation__item_title}>
                    <FontAwesomeIcon className={styles.navigation__icon} icon={faListCheck} />
                    <p>tasks</p>
                </Link>
            </div>
        </div>
    )
}
