import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useTelegram} from '../../hooks/useTelegram';
 
const Authorization = () => {
    const handleTelegramResponse = response => {
        tg.sendData(response);
        //console.log(response);
    };
    const {tg} = useTelegram();

    return (
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="TravelingoDevBot" />
    )
}

export default Authorization;