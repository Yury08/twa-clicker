import React, { FC } from 'react'
import Image from 'next/image'
import image_tasks from "../../../public/coin_logo_tasks.svg";
import logo_instagram from "../../../public/logo_instagram.svg";
import logo_telegram from "../../../public/logo_telegram.svg";
import coin_logo from "../../../public/coin_logo.svg";
import logo_wallet from "../../../public/logo_wallet.svg";
import { Navigation } from '@/components/Navigation';





const Tasks: FC = () => {
    return (
        <>
            <div className='tasks__header'>
                <Image className='tasks__img' src={image_tasks} alt='header image' />
                <h2 className='tasks__title'>Perform tasks and pick up KRC <br />You can complete 5 tasks</h2>
            </div>
            <div className='tasks__main'>
                <div className='tasks__card'>
                    <div>
                        <Image src={logo_instagram} alt="logo_inst" className='tasks__card_img' />
                        <p className='tasks__card_text'>Subscribe our inst<br />+150 KRC</p>
                    </div>
                    <button type='submit' className='tasks__card_button'>claim</button>
                </div>
                <div className='tasks__card'>
                    <div>
                        <Image src={coin_logo} alt="coin_logo" className='tasks__card_img' />
                        <p className='tasks__card_text'>Boost KravzovCoin<br />+50 KRC</p>
                    </div>
                    <button type='submit' className='tasks__card_button'>claim</button>
                </div>
                <div className='tasks__card'>
                    <div>
                        <Image src={logo_telegram} alt="logo_telegram" className='tasks__card_img' />
                        <p className='tasks__card_text'>Subscribe to our TG<br />+150 KRC</p>
                    </div>
                    <button type='submit' className='tasks__card_button'>claim</button>
                </div>
                <Navigation />

            </div>
            <h2 className='tasks__title_sec'>Airdrop tasks</h2>
            <div className='tasks__card tasks__card-last'>
                <div>
                    <Image src={logo_wallet} alt="logo_wallet" className='tasks__card_img' />
                    <p className='tasks__card_text'>Connect your TON wallet</p>
                </div>
            </div>
        </>
    )
}

export default Tasks;
