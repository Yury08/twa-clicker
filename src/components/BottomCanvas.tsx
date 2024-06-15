import React, { FC } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ICanvas } from '../types/types';
import styles from "./BottomCanvas.module.css";


export const BottomCanvas: FC<ICanvas> = ({ isOpen, setIsOpen }) => {
    const handleClose = () => setIsOpen(false);
    return (
        <>
            {/* <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                </Offcanvas.Body> */}

            <div className={styles.canvas__body}>
                <h1 className={styles.canvas__title}>Invite friends</h1>
                <hr />
                <button className={styles.canvas__send}>send</button>
                <button className={styles.canvas__link}>copy link</button>
                <button onClick={handleClose} className={styles.canvas__close}>close</button>
            </div>

        </>
    )
}
