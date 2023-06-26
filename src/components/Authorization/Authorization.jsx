import React from 'react';
import { useEffect, useState } from 'react';
import TelegramLoginButton from 'react-telegram-login';
import {useTelegram} from '../../hooks/useTelegram';
 
const Authorization = () => {

    const {tg} = useTelegram();
    const [result, setResult] = useState(null);

    //useEffect(() => {
        const handleTelegramResponse = response => {
            setResult(JSON.stringify({response: response}));
            tg.sendData(JSON.stringify({response: response}));
            //console.log(response);
        };

    //}, [tg]);

    return (
        <div>
            <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="TravelingoDevBot" />
            <div>{result}</div>
        </div>
    )
}

export default Authorization;