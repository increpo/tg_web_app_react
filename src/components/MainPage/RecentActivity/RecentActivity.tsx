import { FC } from "react";
import ActivityItem from "./ActivityItem/ActivityItem";
import NewActivityItem from "./NewActivityItem/NewActivityItem";
import style from './RecentActivity.module.scss';

const RecentActivity: FC = () => {

  return (
    <>
      <div className={style.header}>
        <div className={`${style.title} ${style.open}`}>Recent activity</div>
      </div>
      <div className={style.content}>
        <NewActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
        <ActivityItem/>
      </div>

    </>
  );
}

export default RecentActivity;