import { FC } from "react";
import style from './HorizontalLine.module.scss';

const HorizontalLine: FC = () => {

  return (
    <>
      <hr className={style.hr}></hr>
    </>
  );
}

export default HorizontalLine;