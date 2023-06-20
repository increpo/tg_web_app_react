import { FC } from "react";
import { Link } from 'react-router-dom';
import CoinsBalance from "../common/CoinBalance/CoinsBalance";
import BackBtn from "../common/BackBtn/BackBtn";
import style from './CompletetPage.module.scss';

const CompletetPage: FC = () => {

  return (
    <>
      <div className={style.header}>
        <BackBtn />
        <CoinsBalance />
      </div>
      <div className={style.content}>
        <div className={style.logo}>
          <svg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="39" cy="39" r="39" fill="#53B052" />
            <path d="M54.8125 28.9375L34.6875 49.0625L24.625 39" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        <div className={style.title}>Starbucks Coffee</div>
        <div className={style.amount}>196</div>
        <div className={style.amount_in_fiat}>~ 5,40 €</div>
        <div className={style.commentary}>No commission</div>


      </div>
      <div className={style.footer}>
        <div className={style.footer__text}>
          Thank you for using our service. The coins have been successfully debited.
        </div>

      </div>
      <div className={style.btn_block}>
        <Link to='/' className={style.btn}>To main</Link>
      </div>
    </>
  );
}

export default CompletetPage; 