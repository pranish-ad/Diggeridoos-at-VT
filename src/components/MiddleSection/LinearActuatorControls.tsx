import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"

function LinearActuatorControls() {

    return (
        <div className={styles.linearActuators2}>
            <div className={styles.connectionsChild} />
            <img
                className={styles.linearActuatorsItem}
                alt=""
                src="/line-82.svg"
            />
            <b className={styles.linearActuators3}>LINEAR ACTUATORS</b>
            <div className={styles.increase}>
                <div className={styles.increaseChild} />
                <div className={styles.div32}>+</div>
            </div>
            <div className={styles.decrease}>
                <img
                className={styles.decreaseChild}
                alt=""
                src="/rectangle-62.svg"
                />
                <div className={styles.div32}>-</div>
            </div>
            <img
                className={styles.linearActuatorsInner}
                alt=""
                src="/rectangle-63.svg"
            />
            <div className={styles.currentPitch10Container}>
                <span className={styles.safeMinTxtContainer}>
                <span className={styles.absoluteDirection}>
                    Current Pitch: 10
                </span>
                <b>°</b>
                </span>
            </div>
            <div className={styles.setSpeed}>
                <div className={styles.set}>Set</div>
                <div className={styles.setSpeed1} />
                <div className={styles.setSpeedChild} />
            </div>
            </div>
    )
}

export default LinearActuatorControls