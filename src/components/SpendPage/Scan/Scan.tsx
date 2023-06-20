import { FC } from "react";
import { Link } from 'react-router-dom';
import style from './Scan.module.scss';
import image from './scan_image.png';

const Scan: FC = () => {

  return (
    <Link to='/spendpage/scanqr' className={style.wrap}>
      <img src={image} alt='QR code' className={style.image}/>
    </Link>
  );
}

export default Scan; 