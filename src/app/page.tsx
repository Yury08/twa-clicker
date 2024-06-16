'use client';

import Image from 'next/image';
import React, { FC, useState } from 'react';
import { Navigation } from '../components/Navigation';
import coin_logo_main from "../../public/coin_logo_main.svg";
import ticket from "../../public/ticket.svg";
import { observer } from 'mobx-react-lite';
import UserStore from '../store/user-store';
import { IUser } from '@/types/types';
import { AnimationText } from '../components/AnimationText';


const Home: FC = observer(() => {
  const { isAuth, username, setUsername, setIsAuth }: IUser = UserStore;
  const [login, setLogin] = useState<string>('');
  const [showText, setShowText] = useState<boolean>(false);
  const [score, setScore] = useState<number>(+10);


  const handleCoinClick = () => {
    setShowText(!showText);
    // Логика для начисления очков
  };


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
              {showText && <AnimationText value={score} />}
              <Image onClick={handleCoinClick} className='coin__main-img' src={coin_logo_main} width={250} height={250} alt="coin image" />
              <h3 className="coin__balance">5,240.000 KRC</h3>
              <p className="coin__text">invite friends and completed tasks for <Image src={ticket} alt="ticket" /></p>
            </div>

            <div className="game">
              <h2 className="game__title">Play game</h2>
              <span className="game__attempts">10 </span>
              <Image src={ticket} alt="ticket" />
            </div>

            <div className='farming__block'>
              <div className="farming">
                <p className="farming__balance">farming: 55.000 KRC</p>
                <p className="farming__timer">01h 30m</p>
              </div>
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
