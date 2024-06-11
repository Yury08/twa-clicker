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

  const signIn = (): void => {
    // добавить логику регистрации в бд
    setIsAuth(true);
    setUsername(login);
  }

  return (
    <div className="container">
      <div className="container__inner">

        {isAuth
          ?
          <>
            <div className="header">
              <span>Y</span> {/* первая буква имени */}
              <span>{username}</span>

              <button>connect wallet</button>
            </div>

            <div className="main-content">
              <div className="coin">
                <Image src={coin_logo_main} alt="coin image" />
                <h1 className="coin__balance">0.000</h1>
                <span className="coin__text">invite friends and completed tasks for </span>
                <Image src={ticket} alt="ticket" />
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
              <h1 className="indicate__title">Indicate the name</h1>
              <form className="indicate__form">
                <input value={login} onChange={() => setLogin} type="text" name="login" placeholder="Login" required />
                <button onClick={signIn} type='submit'>Sign in</button>
              </form>
            </div>
          </div>
        }
      </div>
    </div>
  )
})

export default Home;
