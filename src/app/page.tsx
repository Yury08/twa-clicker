'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Navigation } from '../components/Navigation';
import coin_logo_main from "../../public/coin_logo_main.svg";
import ticket from "../../public/ticket.svg";
import { observer } from 'mobx-react-lite';
import UserStore from '../store/user-store';
import { IUser } from '@/types/types';


const Home: FC = observer(() => {
  const { isAuth, username, setUsername, setIsAuth }: IUser = UserStore;
  const [login, setLogin] = useState<string>('');



  // const signIn = (): void => {
  //   // добавить логику регистрации в бд
  //   setIsAuth(true);
  // }

  return (
    <>
      {isAuth
        ?
        <>
          <div className="header">
            <div className='header__login'>
              <span className='header__login-ava'>Y</span> {/* первая буква имени */}
              <span className='header__login-text'>Yuri Kravzov</span>
            </div>

            <button>connect wallet</button>
          </div>

          <div className="main-content">
            <div className="coin">
              <Image className='coin__main-img' src={coin_logo_main} width={300} height={300} alt="coin image" />
              <h1 className="coin__balance">5,240.000 KRC</h1>
              <p className="coin__text">invite friends and completed tasks for <Image src={ticket} alt="ticket" /></p>
            </div>

            <div className="game">
              <h2 className="game__title">Play game</h2>
              <span className="game__attempts">10 </span>
              <Image src={ticket} alt="ticket" />
            </div>

            <div className="farming">
              <p className="farming__balance">farming: 55.000 KRC</p>
              <p className="farming__timer">01h 30m</p>
            </div>

            <Navigation />

          </div>
        </>
        :
        <div className="indicate">
          <div className='indicate__wrapper'>
            <Image src={coin_logo_main} alt="coin image" />
            <form className="indicate__form">
              <input value={login} onChange={(e) => setLogin(e.target.value)} name="login" placeholder="indicate the name" required />
              <button onClick={() => setIsAuth(true)} type='submit'>Let's farm</button>
            </form>
          </div>
        </div>
      }
    </>
  )
})

export default Home;
