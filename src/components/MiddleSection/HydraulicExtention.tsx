import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"
import Sensor from "../../components/Sensor";
import SensorDisplayRanged from '.././SensorDisplayRange';
import { TbmMetrics } from '../../metrics';

type Props = {
    data: TbmMetrics
  };  

function HydraulicExtension(props: Props) {

    return(
        <div className={styles.hydraulicBorder}>
            <b className={styles.HydraulicTitle}>Hydraulic Extension Length [cm]</b>
            <SensorDisplayRanged 
            reading= {props.data.stringPotentiometer}
            safeBoundLower = {0}
            safeBoundUpper = {76.2}
            sensorLabelText='' 
            sensorWarningLabel='Hydraulic Extension Length'
            sensorTop="40px" 
            sensorLeft="90px"/>
            </div>
    )
}

export default HydraulicExtension;