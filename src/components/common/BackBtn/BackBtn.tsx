import { FC } from "react";
import { useNavigate } from 'react-router-dom';
import style from './BackBtn.module.scss';

interface BackBtnProps {
  inversColor?: boolean,
}

const BackBtn: FC<BackBtnProps> = ({inversColor}) => {
  const navigate = useNavigate();

  const handleGoBackBtn = () => {
    navigate(-1)
  }
  return (
    <button
      // className={style.wrap && inversColor ? style.wrap1 : ''}
      className={ inversColor ? `${style.btn} ${style.invers}` : style.btn}

      onClick={() => handleGoBackBtn()}>
      <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 1L2 7L8 13" stroke="#000" stroke-width="2" stroke-linecap="round" />
      </svg>
      <span className={style.text}>Back</span>
    </button>
  );
}

export default BackBtn;