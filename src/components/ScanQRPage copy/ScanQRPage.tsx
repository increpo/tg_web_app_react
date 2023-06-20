import { FC } from "react";
import CoinsBalance from "../common/CoinBalance/CoinsBalance";
import BackBtn from "../common/BackBtn/BackBtn";
import style from './ScanQRPage.module.scss';

const ScanQRPage: FC = () => {

  return (
    < >
      <div className={style.header}>
        <BackBtn />
        <CoinsBalance />
      </div>
      <div className={style.content}>
        <div className={style.row}>
          <label htmlFor="name">Send to:</label>
          <input type="text" className={style.secondary} name='name' placeholder="Enter id or phone number" />
        </div>
        <div className={style.row}>
          <label htmlFor="amount">Enter or confirm the amount:</label>
          <div className={style.input_wrap}>
            <input type="number" className={style.main} name='amount' placeholder="0"></input>
            <div className={style.additional}>0 €</div>
          </div>
          <div className={style.commentary}>No commission</div>
        </div>
        <div className={style.row}>
          <button className={style.btn}>Send</button>
        </div>

      </div>
    </>
  );
}

export default ScanQRPage; 