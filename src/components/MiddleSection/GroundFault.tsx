import React from 'react';
import styles from "../../pages/NEWGUI.module.css";
import { TbmMetrics } from '../../metrics';

type Props = {
  data: TbmMetrics
};

function GroundFault(props: Props) {
//   const { groundFault1, groundFault2 } = props.data;

  const color1 = props.data.groundFault1 ? '#00FF00' : 'red';
  const color2 = props.data.groundFault2 ? '00FF00' : 'red';

  return (
    <div className={styles.GroundFaultBorder}>
      <b className={styles.generalSystem1}>Ground Fault Sensors</b>
      <img className={styles.solenoidsChild} alt="" src="/line-83.svg" />
      <div className={styles.groundFaultText1}>480 VAC Ground Fault: </div>
      <div className={styles.groundFaultText2}>120 VAC Ground Fault: </div>
      <div className={styles.groundFault1} style={{ backgroundColor: color2 }}></div>
      <div className={styles.groundFault2} style={{ backgroundColor: color2 }}></div>
      <div className={styles.groundFaultKey}>Green = Clear | Red = Ground Fault</div>
    </div>
  );
}

export default GroundFault;
