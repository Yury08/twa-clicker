import React, { FC } from 'react'
import Image from 'next/image'

export const Navigation: FC = () => {
    return (
        <div className="navigation">
            <div className="navigation__item">
                <Image src="/" alt="friends" width={100} height={100} />
                <p className="navigation__item-title">friends</p>
            </div>
            <div className="navigation__item">
                <Image src="/" alt="home" width={100} height={100} />
                <p className="navigation__item-title">home</p>
            </div>
            <div className="navigation__item">
                <Image src="/" alt="tasks" width={100} height={100} />
                <p className="navigation__item-title">tasks</p>
            </div>
        </div>
    )
}
