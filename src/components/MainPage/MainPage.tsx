import { FC } from "react";
import style from './MainPage.module.scss';
import CoinsBalance from "./CoinsBalance/CoinsBalance";
import MainBtns from "./MainBtns/MainBtns";
import HorizontalLine from "../UI/HorizontalLine/HorizontalLine";
import RecentActivity from "./RecentActivity/RecentActivity";
import {useTelegram} from '../../hooks/useTelegram';

const MainPage: FC = () => {

  const {tg} = useTelegram();
  const userData = JSON.stringify(tg.initDataUnsafe);
  
  return (
    <div>
      <div>{userData}</div>
      <div className={style.wrap}>
        <CoinsBalance />
      </div>
      <div className={style.wrap}>
        <MainBtns />
      </div>
      <div className={style.wrap}>
        <HorizontalLine />
      </div>
      <div className={style.wrap}>
        <RecentActivity/>
      </div>
    </div>
  );
}

export default MainPage; 