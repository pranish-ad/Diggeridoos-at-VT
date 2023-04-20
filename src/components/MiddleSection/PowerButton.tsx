import React, { Component, useEffect, useState } from 'react';
import styles from "../../pages/NEWGUI.module.css";
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { dataToSend } from '../../dataSending';
const fs = require('fs');


type Props = {
    sent: dataToSend,
    setSent: (dts: dataToSend) => void
  };
  

function PowerButton(props: Props) {
    const [isOff, setOff] = useState(true);

    const labelContent: string[] = !isOff
    ? ['TBM is Powered Up']
    : ['TBM is Powered Down'];

    const [confirmationModalIsShowing, setConfirmationModalIsShowing] = useState(
        false
    );
    
    function handleSetOff() {
        setOff(!isOff);

        const dts: dataToSend = {
            powerState: Number(isOff),
            solenoidState: props.sent.solenoidState
        }
        props.setSent(dts);
    }

    
    


    return (
        <div className={styles.powerBorder}>
            <Modal
                show={confirmationModalIsShowing}
                onHide={() => setConfirmationModalIsShowing(false)}
                centered
                autoFocus={false}
                restoreFocus={false}
                enforceFocus={false}
            >
                <Modal.Header>
                <Modal.Title>Confirm powering {isOff ? "up" : "off"} the TBM</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                Are you sure you would like to power {isOff ? "up" : "off"} the TBM?
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
                        variant={isOff ? "success" : "danger"}
                        tabIndex={-1}
                        onClick={() => {
                        setConfirmationModalIsShowing(false);
                        handleSetOff();
                        }}
                    >
                        Yes, power {isOff ? "up" : "off"} the TBM
                    </Button>
                </Modal.Footer>
            </Modal>

      <div className='label'>{labelContent[0]}</div>

        <div className={styles.powerButton}>
            <Button onClick={() => setConfirmationModalIsShowing(true)} variant={isOff ? "secondary" : "success"} size="lg">
                <FontAwesomeIcon icon={faPowerOff} size="2x"/>
            </Button>

        </div>
    </div>
    )
}

export default PowerButton;