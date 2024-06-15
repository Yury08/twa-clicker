import React, { FC } from 'react'
import styles from "./AnimationText.module.css";

export const AnimationText: FC<any> = ({ value }) => {
    return (
        <div className={styles.animation_text}>+{value}</div>
    )
}
