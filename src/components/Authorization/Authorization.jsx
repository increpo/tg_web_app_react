import React from 'react';
import TelegramLoginButton from 'react-telegram-login';
 
const Authorization = () => {
    const handleTelegramResponse = response => {
        console.log(response);
    };

    return (
        <TelegramLoginButton dataOnauth={handleTelegramResponse} botName="OdauBot" />
    )
}

export default Authorization;