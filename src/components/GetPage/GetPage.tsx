import { FC } from "react";
import BackBtn from "../common/BackBtn/BackBtn";
import ShareBtn from "./ShareBtn/ShareBtn.jsx";
import style from './GetPage.module.scss';

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
          <div className={style.share}>
            <ShareBtn shareLink={qrUrl}/>
            Share
          </div>
          <div className={style.copy}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.54843 2.11031C7.30719 2.23051 7.11156 2.46007 7.04042 2.70631C7.01117 2.8077 7.00116 5.03361 7.00946 9.59747L7.02177 16.3388L7.14802 16.5431C7.22629 16.6697 7.35196 16.7953 7.47854 16.8736L7.68277 16.9998H14.5109H21.339L21.5432 16.8736C21.6698 16.7953 21.7955 16.6697 21.8737 16.5431L22 16.3388V9.51073V2.68262L21.8737 2.47839C21.7955 2.3518 21.6698 2.22613 21.5432 2.14786L21.339 2.02161L14.5544 2.01081L7.76976 2L7.54843 2.11031ZM20.6858 9.51073V15.6856H14.5109H8.33602V9.51073V3.33586H14.5109H20.6858V9.51073ZM2.54103 7.11734C2.30054 7.23716 2.10482 7.46705 2.03377 7.71296C2.00452 7.81435 1.99451 10.0403 2.00281 14.6041L2.01512 21.3455L2.14137 21.5497C2.21964 21.6763 2.34531 21.802 2.47189 21.8802L2.67612 22.0065H9.50423H16.3323L16.5366 21.8802C16.6631 21.802 16.7889 21.6763 16.8671 21.5498L16.9934 21.3457L17.0053 19.8507L17.0172 18.3558H16.3482H15.6791V19.524V20.6922H9.50423H3.32937V14.5174V8.34251H4.49758H5.6658V7.67496V7.0074H4.21371H2.76165L2.54103 7.11734Z" fill="black" />
            </svg>
            Copy link
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetPage; 