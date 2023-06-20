import { FC } from "react";
import style from './CoinsBalance.module.scss';

const CoinsBalance: FC = () => {

  return (
    <div className={style.wrap}>
      <div className={style.row}>
        <div className={style.title}>My Coins balance:</div>
        <div className={style.count}>1800 ¤</div>
      </div>
      <div className={style.row}>
        <div className={style.count_in_fiat}>~ 68,20 €</div>
      </div>
    </div>
  );
}

export default CoinsBalance; 