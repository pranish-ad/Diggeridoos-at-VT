import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { TbmMetrics } from '../../metrics';

type Props = {
  data: TbmMetrics;
}

function GeneralSystem(props: Props) {

    return (
        <div className={styles.generalSystem}>
            <div className={styles.generalSystemChild} />
            <img className={styles.generalSystemItem} alt="" src="/line-81.svg" />
            <b className={styles.generalSystem1}>GENERAL SYSTEM</b>
            
            <div className={styles.totalDistance1}>
                <div className={styles.totalDistance2}>Total distance:</div>
                <div className={styles.distanceBar}>
                    <ProgressBar className={styles.progressBar} animated variant="success" min={0} max={10} now={props.data.totalDistance} />
                </div>
                <div className={styles.m1}>{props.data.totalDistance} m</div>
                <div className={styles.div30}>({props.data.totalDistance/30}%)</div>
                
            </div>

            <div className={styles.totalDistance}>
                <div className={styles.depth}>Depth:</div>
                <div className={styles.m}>{props.data.depth} m</div>
            </div>

            <div className={styles.jackingCycle}>Jacking Cycle:</div>
            <div className={styles.div31}>0/10</div>
            </div>
    )
}

export default GeneralSystem;