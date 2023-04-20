import { FunctionComponent, useMemo, useState, useEffect } from "react";
import CSS, { Property } from "csstype";
//import type * as CSS from 'csstype';
import style from "./Sensor.module.css";
import styles from "../pages/NEWGUI.module.css"
import DangerBackground from "./DangerBackground";
import { Modal, Button } from 'react-bootstrap';
import { dts } from '../dataSending'

type SensorType = {
  /** Style props */
  sensorPosition?: Property.Position;
  sensorTop?: Property.Top;
  sensorLeft?: Property.Left;
  sensorWidth?: Property.Width;
  sensorHeight?: Property.Height;
  sensorTextAlign?: Property.TextAlign;
  sensorLabelText:String;
  sensorWarningLabel: String;
  reading: number,
  safeBoundLower : number,
  safeBoundUpper : number 
};

const SensorDisplayRanged: FunctionComponent<SensorType> = ({
    sensorPosition,
sensorTop,
sensorLeft,
sensorWidth,
sensorHeight,
sensorTextAlign,
sensorLabelText,
sensorWarningLabel,
reading,
safeBoundLower,
safeBoundUpper

}) =>  {
  const sensorStyle: CSS.Properties = useMemo(() => {
    return {
        position:sensorPosition,
        top:sensorTop,
        left:sensorLeft,
        width:sensorWidth,
        height:sensorHeight,
        textAlign:sensorTextAlign,
    };
  }, [
    sensorPosition,sensorTop,sensorLeft,sensorWidth,sensorHeight,sensorTextAlign,
  ]);

  // Alert
  const [showAlert, setShowAlert] = useState(false);

  // add side effect to component
  useEffect(() => {
    // create interval
    const interval = setInterval(

      () => {
      checkSafe();
      },
      15000
    );
    // clean up interval on unmount
    return () => {
      clearInterval(interval);
    }
    

  }, [showAlert])

  function checkSafe() {
    if (!(reading > safeBoundLower && reading < safeBoundUpper) && (!showAlert && dts.powerState === 1)){
        setShowAlert(true);
    }
  }

  return (
    <div className={style.sensor} style={sensorStyle}>
            
            {/* <div className={styles.dangerBackgroundParent8}> */}
            <div className={style.sensorLabel} >{sensorLabelText}</div>
            <div className={style.dangerRect}/>
            <div className={styles.frameChild} />
            <img className={styles.frameChild5} alt="" src="/line-113.svg" />
            {/* <div className={` ${styles.frameChild12}  `} /> */}
            <div className={`${(reading > safeBoundLower && reading < safeBoundUpper) ? styles.frameChild12 : styles.frameChild9}`}  />
            <div className={styles.safeMin3}>
              <span className={styles.safeMinTxtContainer}>
                {/* <p className={styles.safe}>{`Safe `}</p> */}
                <p  style={{fontSize: 8}}>Min</p>
              
              </span>
            </div>
            <div className={styles.safeMax3}>
              <span className={styles.safeMinTxtContainer}>
                {/* <p className={styles.safe}>Safe</p> */}
                <p style={{fontSize: 8}}>Max</p>
              </span>
            </div>
            <div className={styles.div9} style={{fontSize: 8}}>{safeBoundUpper}</div>
            <div className={styles.div10}>{safeBoundLower}</div>
            <div className={styles.div11}>{reading.toFixed(2)}</div>

      <Modal
          show={showAlert}
          onHide={() => setShowAlert(false)}
          centered
          autoFocus={false}
          restoreFocus={false}
          enforceFocus={false}
      >
        <Modal.Header>
        <Modal.Title>Warning: {sensorWarningLabel} is out of Range</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {sensorWarningLabel} is out of range with a value of {reading}
        </Modal.Body>
        <Modal.Footer>
            <Button
                variant='danger'
                tabIndex={-1}
                onClick={() => setShowAlert(false)}
            >
                Dismiss
            </Button>
        </Modal.Footer>
      </Modal>


          
     </div>

  );
};

export default SensorDisplayRanged;



// import classNames from 'classnames';
// import React from 'react';


// const SafeBound = ({
//   isMax,
//   bound,
// }: {
//   /** Whether the bound is an upper bound. */
//   isMax?: boolean;


//   /** The boundary value for safe operation. It is safe to reach this value but
//    * not go beyond it. */
//   bound: number;
// }) => (
//   <div
//     className={`safe-bound ${isMax ? 'upper' : 'lower'} d-flex flex-row px-2`}
//   >
//     <div className='label'>
//       <div>Safe</div>
//       <div>{isMax ? 'max' : 'min'}</div>
//     </div>
//     <div className='value w-100'>{bound}</div>
//   </div>
// );


// SafeBound.defaultProps = { isMax: false };


// /**
//  * Determines the font size that will allow a given sensor reading to fit properly in the `SensorDisplayRanged` component. This is designed to work with readings with lengths of 0 through 20 characters. There are no guarantees about correctness of sizing if the reading is longer than 20 characters.
//  *
//  * @param reading The sensor value for which to calculate a font size.
//  *
//  * @returns The font size that is calculated for the given reading. The unit (rem) is included in the return value, so the return value is ready to be assigned directly to a `font-size` CSS property.
//  */
// const calculateReadingFontSize = (reading: string): string => {
//   if (reading.length <= 6) return '1.15rem';


//   // This polynomial is designed to work with a reading of up to 20 characters
//   // in length. It was determined by listing known desirable font sizes for
//   // readings with lengths of 7, 8, 9, 10, 15, and 20, and then using Excel to find
//   // an equation for the trendline.
//   return `${
//     reading.length ** 3 * -0.0004 +
//     reading.length ** 2 * 0.0188 -
//     0.3368 * reading.length +
//     2.6039
//   }rem`;
// };


// interface Props {
//   /** The label that describes the sensor and its unit. When including units,
//    * append the sensor title with the unit in brackets.
//    *
//    * Example: "Pressure [psi]" */
//   label?: string;


//   /** The value that the sensor is currently reporting. */
//   reading: string | number;


//   /** The sensor reading's upper bound for safe operation of the machine. The
//    * background colors of the reading and of the upper bound turn red when the
//    * reading is greater than this value. Must be greater than or equal to the
//    * `safeBoundLower` prop. */
//   safeBoundUpper: number;


//   /** The sensor reading's lower bound for safe operation of the machine. The
//    * background colors of the reading and of the lower bound turn red when the
//    * reading is less than this value. Must be less than or equal to the
//    * `safeBoundUpper` prop. */
//   safeBoundLower: number;


//   /** The className for selecting this component. */
//   className?: string;


//   /** The amount by which to offset the component's horizontal position. */
//   translateX?: string;


//   /** The amount by which to offset the component's vertical position. */
//   translateY?: string;


//   /** The scale factor of the component, with 1.0 being the original scale. */
//   scale?: number;
// }


// export const SensorDisplayRanged = (props: Props) => {
//   if (props.safeBoundLower > props.safeBoundUpper)
//     throw new Error(
//       `The safeBoundLower prop must be less than or equal to the safeBoundUpper prop. Instead, safeBoundLower is ${props.safeBoundLower}, and safeBoundUpper is ${props.safeBoundUpper}.`
//     );


//   const readingAsNumber: number =
//     typeof props.reading === 'number'
//       ? props.reading
//       : parseFloat(props.reading.toString());


//   return (
//     <div
//       className={classNames(props.className, 'value-range', {
//         'danger-lower': readingAsNumber < props.safeBoundLower,
//         'danger-upper': readingAsNumber > props.safeBoundUpper,
//       })}
//       style={{
//         transform: `translate(${props.translateX}, ${props.translateY})${
//           props.scale !== undefined && ` scale(${props.scale})`
//         }`,
//       }}
//     >
//       {props.label && <div className='label'>{props.label}</div>}


//       <div className='values d-flex flex-row'>
//         <div className='reading d-flex'>
//           <div
//             className='value'
//             style={{
//               fontSize: calculateReadingFontSize(props.reading.toString()),
//             }}
//           >
//             {props.reading}
//           </div>
//         </div>


//         <div className='d-flex flex-column'>
//           <SafeBound isMax bound={props.safeBoundUpper} />
//           <SafeBound bound={props.safeBoundLower} />
//         </div>
//       </div>
//     </div>
//   );
// };


// SensorDisplayRanged.defaultProps = {
//   label: undefined,
//   className: undefined,
//   translateX: '0',
//   translateY: '0',
//   scale: 1,
// };