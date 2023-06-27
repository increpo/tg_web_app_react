import { FC } from "react";
import BackBtn from "../common/BackBtn/BackBtn";
import ShareBtn from "./ShareBtn/ShareBtn.jsx";
import style from './GetPage.module.scss';
import CopyToClipboard from "./ShareBtn/CopyToClipboard";

import { QRCode } from 'react-qrcode-logo';
const GetPage: FC = () => {
  const qrUrl = 'https://makeshop.pro/';
  const imageUrl = '../images/logo_qr.png';
  //const clipboardIcon = '../images/clipboard_icon.png';

  return (
    <div className={style.wrap}>
      <div className={style.header}>
        <BackBtn inversColor />

      </div>
      <div className={style.content}>
        <div className={style.title}>Show this code for crediting coins</div>
        <div className={style.qr}>
          <QRCode
              value={qrUrl}            // here you should keep the link/value(string) for which you are generation promocode
              size={250}              // the dimension of the QR code (number)
              logoImage={imageUrl}  // URL of the logo you want to use, make sure it is a dynamic url
              logoHeight={50}
              logoWidth={50}
              logoOpacity={1}
              removeQrCodeBehindLogo={true}
              enableCORS={true}       // enabling CORS, this is the thing that will bypass that DOM check
              qrStyle="squares"          // type of qr code, wether you want dotted ones or the square ones (dots / squares)
              eyeRadius={3}          // radius of the promocode eye
              id={"logo_id"}
          />
        </div>
        <div className={style.address}>352 - 628</div>
        <div className={style.footer}>
          <div className={'some_class'}>
            <ShareBtn shareLink={qrUrl} className={style.share}/>
          </div>
          <div className={'style.copy'}>
            <CopyToClipboard
              link={qrUrl}
              copyToClipboardText={'Copy link'}
              copySuccessText={'Copied'}
              className={style.copy}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetPage; 