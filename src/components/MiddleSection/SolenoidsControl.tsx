import React, { Component, useEffect, useState } from 'react'
import styles from "../../pages/NEWGUI.module.css"
import { metricsValues, TbmMetrics } from '../../metrics'; 
import { dataToSend } from '../../dataSending';
// import { sendData } from '../../App';
import { Button, Modal } from 'react-bootstrap';


type Props = {
    data: TbmMetrics,
    sent: dataToSend,
    setSent: (dts: dataToSend) => void
  };

function SolenoidsControl(props: Props) {
    const [solState, setSolState] = useState(1);

    const [confirmationModalIsShowing, setConfirmationModalIsShowing] = useState(
        false
    );

    const [curButton, setCurButton] = useState(0);

    const labels: string[] = ['Retract', "Neutral", "Extend"];

    function handleSolState(s: number){
        
        const dts: dataToSend = {
            powerState: props.sent.powerState,
            solenoidState: s
        }
        props.setSent(dts);
    }

    function handleButtonPressed(b: String){
        if (b == "Extend"){
            setCurButton(2); 
        }
        else if (b == "Neutral"){
            setCurButton(1);
        }
        else if (b == "Retract"){
            setCurButton(0);
        }
        setConfirmationModalIsShowing(true);
    }

    return (
        <div className={styles.solenoids}>
            <Modal
                show={confirmationModalIsShowing}
                onHide={() => setConfirmationModalIsShowing(false)}
                centered
                autoFocus={false}
                restoreFocus={false}
                enforceFocus={false}
            >
                <Modal.Header>
                    <Modal.Title>Confirm {labels[curButton]} State</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Are you sure you would like to set the state of the Solenoids {labels[curButton]}?
                </Modal.Body>

                <Modal.Footer>
                    <Button
                        variant='secondary'
                        tabIndex={-1}
                        onClick={() => setConfirmationModalIsShowing(false)}
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="success"
                        tabIndex={-1}
                        onClick={() => {
                        handleSolState(curButton);
                        setConfirmationModalIsShowing(false);
                        }}
                    >
                        Yes, set to {labels[curButton]}
                    </Button>
                </Modal.Footer>
            </Modal>
             <div className={styles.sBoxParent}>
                <div className={styles.sBoxChild}>
                    <div className={styles.solenoidsInner1}>{props.data.ManifoldSolenoid1}</div>
                    <div className={styles.solenoidsInner2}>{props.data.ManifoldSolenoid2}</div>
                    <div className={styles.solenoidsInner3}>{props.data.ManifoldSolenoid3}</div>
                    <div className={styles.solenoidsInner4}>{props.data.ManifoldSolenoid4}</div> 
                </div>
            </div>
            {/* <div className={styles.set1}> */}
                {/* <div className={styles.setSpeed2} /> */}
                {/* <div className={styles.set2}>Set</div> */}
            {/* </div> */}
            { <img className={styles.solenoidsChild} alt="" src="/line-83.svg" />}
            <div className={styles.control2}>
                <div className={styles.control2Child} />
                {/* <img className={styles.control2Item} alt="" src="/line-84.svg" /> */}
                
                <div className={styles.solenoidButtons}>
                    {/* Solenoids are {isExtended ? "Extended" : "Retracted"}
                    <br></br>
                    <br /> */}
                    <Button onClick={() => handleButtonPressed("Extend")} variant="success" size = "sm">Extend</Button>{' '}
                    <Button onClick={() => handleButtonPressed("Neutral")} variant="secondary" size = "sm">Neutral</Button>{' '}
                    <Button onClick={() => handleButtonPressed("Retract")} variant="danger" size = "sm">Retract</Button>
                </div>
            </div>
            <b className={styles.solenoids1}>SOLENOIDS</b>
            {/* <div className={styles.solenoidsItem1}/> */}
            {/* <div className={styles.solenoidsItem} /> */}
            {/* <div className={styles.solenoidsInner}>{props.data.HPUSolenoid}</div> */}
            
           
            
            <div className={styles.solenoidsLegend}>
                <p>N = Neutral | E = Extending | R = Retracting</p> 
            </div>
            {/* <div className={styles.solenoidsChild1} /> */}
            {/* <div className={styles.solenoidsChild2} /> */}
            {/* <div className={styles.rectangleParent1}>
                <div className={styles.frameChild22} />
                <div className={styles.dropdownMenu}>Dropdown Menu</div>
            </div> */}
        </div>
    )
}

export default SolenoidsControl;