import { FC } from "react";
import { Link } from 'react-router-dom';
import CoinsBalance from "../common/CoinBalance/CoinsBalance";
import BackBtn from "../common/BackBtn/BackBtn";
import style from './RequestDebitingPage.module.scss';

const RequestDebitingPage: FC = () => {

  return (
    < >
      <div className={style.header}>
        <BackBtn />
        <CoinsBalance />
      </div>
      <div className={style.content}>
        <div className={style.row}>
          <label htmlFor="name">Send to:</label>
          <input type="text" className={style.secondary} name='name' placeholder="Enter id or phone number" value="Starbucks Coffee"/>
        </div>
        <div className={style.row}>
          <label htmlFor="amount">Confirm the amount:</label>
          <div className={style.input_wrap}>
            <input type="number" className={style.main} name='amount' placeholder="0" value="196"></input>
            <div className={style.additional}>~ 5,40 €</div>
          </div>
          <div className={style.commentary}>No commission</div>
        </div>
        <div className={style.row}>
          <Link to='/complete' className={style.btn}>Send</Link>
        </div>

      </div>
    </>
  );
}

export default RequestDebitingPage; 