import React from 'react';
import styles from '../../pages/NEWGUI.module.css';
import { TbmMetrics } from '../../metrics';

type Props = {
  data: TbmMetrics
};

function EBox(props: Props) {
  const color1 = props.data.EBox1Indicators ? '00FF00' : 'red';
  const color2 = props.data.EBox2Indicators ? '00FF00' : 'red';
  const color3 = props.data.EBox3Indicators ? '00FF00' : 'red';

  return (
    <div className={styles.eboxBorder}>
      <b className={styles.generalSystem1}>Electrical Boxes</b>
      <img className={styles.solenoidsChild} alt="" src="/line-83.svg" />
      <div className={styles.ebox1} style={{ backgroundColor: color1 }}></div>
      <div className={styles.ebox2} style={{ backgroundColor: color2 }}></div>
      <div className={styles.ebox3} style={{ backgroundColor: color3 }}></div>
      <div className={styles.eboxText1}>Box 1</div>
      <div className={styles.eboxText2}>Box 2</div>
      <div className={styles.eboxText3}>Box 3</div>
      <div className={styles.eboxKey}>Red = Open | Green = Closed</div>
    </div>
  );
}

export default EBox;
