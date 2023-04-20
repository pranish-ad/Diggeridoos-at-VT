import React, { Component, useEffect, useState } from 'react'
import styles from "../pages/NEWGUI.module.css"

// import { getNextMockMetrics, mockMetricsInitialValues } from '../mockMetrics';
import GeneralSystem from "../components/MiddleSection/GeneralSystem";
import LinearActuatorControls from "../components/MiddleSection/LinearActuatorControls";
import SolenoidsControl from "../components/MiddleSection/SolenoidsControl";
import WaterControl from "../components/MiddleSection/WaterControl";
import MotorControl from "../components/MiddleSection/MotorControl";
import PowerButton from "../components/MiddleSection/PowerButton";
import EBox from "./MiddleSection/EBox"
import VFD from "./MiddleSection/VFD"
import GroundFault from './MiddleSection/GroundFault';
import HydraulicExtension from './MiddleSection/HydraulicExtention'
import { updateGUIMetrics, TbmMetrics, metricsDefaultValues } from '../metrics';
import { dataToSend } from '../dataSending';

type Props = {
  data: TbmMetrics,
  sent: dataToSend,
  setSent: (dts: dataToSend) => void
};



function MiddleSection(props: Props) {

    return (
        <div className={styles.controlAndGeneral}>
            <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
            <GeneralSystem data={props.data}/>
            <SolenoidsControl data={props.data} sent={props.sent} setSent={props.setSent}/>
            <EBox data={props.data}/>
            <VFD data={props.data}/>
            <GroundFault data={props.data}/>
            <PowerButton sent={props.sent} setSent={props.setSent}/>
        </div>
    )
    
}

export default MiddleSection;