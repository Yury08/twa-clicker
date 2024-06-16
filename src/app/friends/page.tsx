"use client"

import React, { FC, useState } from 'react'
import icon_friends from "../../../public/icon_friends.svg";
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { BottomCanvas } from '@/components/BottomCanvas';


const Friends: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const handleOpen = () => setIsOpen(true);
    return (
        <>
            <div className='friends__header'>
                <Image src={icon_friends} alt="icon_friends" />
                <p className='friends__title'>Invite friends</p>
                <h1 className='friends__balance'>0.000 KRC</h1>
                <button className='friends__button'>get</button>
                <p className='friends__text'>Get 5% for each referral and<br />ticket for every 3 referrals</p>
            </div>
            <p className='friends__count'>friends: 2</p>
            <div className='friends__body'>
                <div className='friends__card'>
                    <div className='friends__card-name'>
                        <span className='friends__card-ava'>Y</span>
                        <span className='friends__card-name'>Yuri Kravzov</span>
                    </div>
                    <p className='friends__card-balance'>150.111 KRC</p>
                </div>
                <div className='friends__card'>
                    <div className='friends__card-name'>
                        <span className='friends__card-ava'>Y</span>
                        <span className='friends__card-name'>Yuri Kravzov</span>
                    </div>
                    <p className='friends__card-balance'>150.111 KRC</p>
                </div>
                <div className='friends__card'>
                    <div className='friends__card-name'>
                        <span className='friends__card-ava'>B</span>
                        <span>Bob Marley</span>
                    </div>
                    <p className='friends__card-balance'>280.666 KRC</p>
                </div>
                <div className='friends__invite'>
                    <button className='friends__invite-button' onClick={handleOpen}>Invite your friends</button>
                </div>
                <Navigation />

            </div>
            {isOpen
                ?
                <BottomCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
                :
                <></>
            }
        </>

    )
}


export default Friends;