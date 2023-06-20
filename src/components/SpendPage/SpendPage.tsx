import { FC } from "react";
import CoinsBalance from "../common/CoinBalance/CoinsBalance";
import BackBtn from "../common/BackBtn/BackBtn";
import RequestDebiting from "./RequestDebiting/RequestDebiting";
import Scan from "./Scan/Scan";
import style from './SpendPage.module.scss';

const SpendPage: FC = () => {

  return (
    <div>
      <div className={style.header}>
        <BackBtn/>
        <CoinsBalance/>
      </div>
      <div className={style.list_actions}>
        <RequestDebiting/>
      </div>
      <div className={style.content}>
        <Scan/>
      </div>
    </div>
  );
}

export default SpendPage; 