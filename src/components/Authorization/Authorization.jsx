import React from 'react';
import { useState } from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useTelegram} from '../../hooks/useTelegram';
 
const Authorization = () => {

    const {tg} = useTelegram();
    const [resultData, setResultData] = useState(null);

    const handleTelegramResponse = response => {
        setResultData(JSON.stringify({response: response}));
        tg.sendData(JSON.stringify({response: response}));
        //console.log(response);
    };

    return (
        <div>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="TravelingoDevBot" />
            <div>{resultData}</div>
        </div>
    )
}

export default Authorization;