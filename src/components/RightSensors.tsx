import React, { Component, useEffect, useState } from 'react'
import styles from "../pages/NEWGUI.module.css"
import Sensor from "../components/Sensor";
import PowerBox from "../components/PowerBox"
import { metricsDefaultValues, TbmMetrics, metricsValues} from '../metrics';
// import { getNextMockMetrics, mockMetricsInitialValues } from '../mockMetrics';
import { HighPower } from './HighPower';
import { LowPower } from './LowPower';
import SensorDisplayRanged from './SensorDisplayRange';

type Props = {
  data: TbmMetrics
};

function RightSensors(props: Props) {

  return (
    <div className={styles.rightSensors}>
        <div className={styles.rightBorder} />
        <HighPower sensorAValues={{reading:props.data.voltage, safeBoundLower:97, safeBoundUpper:98}}
         sensorBValues={{reading:props.data.highPowerCurrent, safeBoundLower:89, safeBoundUpper:90.00}}
         sensorCValues={{reading:480*props.data.highPowerCurrent, safeBoundLower:43, safeBoundUpper:43.4}}
         labelText="TOTAL HIGH POWER CONSUMPTION"></HighPower>



        {/* <PowerBox labelText="TOTAL HIGH POWER CONSUMPTION"></PowerBox> */}
        {/* <PowerBox powerTop='155px' labelText="TOTAL LOW POWER CONSUMPTION"></PowerBox> */}
        <LowPower sensorAValues={{reading:props.data.voltage, safeBoundLower:97.4, safeBoundUpper:98}}
         sensorBValues={{reading:props.data.lowPowerCurrent, safeBoundLower:89, safeBoundUpper:89.4}}
         sensorCValues={{reading:120*props.data.lowPowerCurrent, safeBoundLower:90, safeBoundUpper:100}}
         labelText="TOTAL LOW POWER CONSUMPTION"></LowPower>


        {/* <GroundFault></GroundFault> */}
        {/* <div className={styles.waterMetrics}>
          <div className={styles.waterMetrics1}>WATER METRICS</div>
          <div className={styles.border2} />
          <div className={styles.waterMetricsChild} />
          <div className={styles.waterMetricsItem} />
          <div className={styles.waterMetricsInner} />
          <div className={styles.rateCondition}>Rate Condition</div>
          <div className={styles.totalConsumed}>Total Consumed</div>
          <div className={styles.div18}>{props.data.waterConsumptionTotal.toFixed(2)}</div>
          <div className={styles.div19}>{props.data.waterConsumptionRate.toFixed(2)}</div>
          <div className={styles.div20}>{props.data.waterConsumptionRate.toFixed(2)}</div>
          <div className={styles.rateSolution}>Rate Solution</div>
          <div className={styles.galsec}>gal/sec</div>
          <div className={styles.galsec1}>gal/sec</div>
          <div className={styles.gal}>gal</div>
        </div> */}
        <div className={styles.linearActuators}>
          <div className={styles.ellipseParent}>
            <img className={styles.ellipseIcon} alt="" src="/ellipse-10.svg" />
            <div className={styles.ellipseGroup}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-11.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthA.toFixed(1)}</div>
            </div>
            <div className={styles.ellipseContainer}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-111.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthB.toFixed(1)}</div>
            </div>
            <div className={styles.ellipseParent1}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-112.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthC.toFixed(1)}</div>
            </div>
            <div className={styles.ellipseParent2}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-113.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthD.toFixed(1)}</div>
            </div>
            <div className={styles.ellipseParent3}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-114.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthE.toFixed(1)}</div>
            </div>
            <div className={styles.ellipseParent4}>
              <img
                className={styles.frameChild13}
                alt=""
                src="/ellipse-115.svg"
              />
              <div className={styles.div21}>{props.data.linearActuatorExtensionLengthF.toFixed(1)}</div>
            </div>
          </div>
          <div className={styles.linearActuators1}>LINEAR ACTUATORS</div>
          <div className={styles.border3} />
          <div className={styles.extensionLengthsCm}>
            Extension Lengths (CM)
          </div>
        </div> 
        {/* <div className={styles.connections}>
          <div className={styles.connectionsChild} />
          <img className={styles.connectionsItem} alt="" src="/line-8.svg" />
          <b className={styles.connections1}>CONNECTIONS</b>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameChild19} />
            <b className={styles.dueConnected}>MEGA: Connected</b>
          </div>
          <div className={styles.rectangleContainer}>
            <div className={styles.frameChild19} />
            <b className={styles.dueConnected}>VFD: Connected</b>
          </div>
        </div> */}
        <div className={styles.imu}>
          <div className={styles.imuChild} />
          <img className={styles.imuItem} alt="" src="/line-17.svg" />
          <div className={styles.absoluteDirectionNorthContainer}>
            <span
              className={styles.absoluteDirection}
            >{`Absolute Direction: `}</span>
            <b>North</b>
          </div>
          <div className={styles.pitch10}>
            <span className={styles.absoluteDirection}>{`Pitch: `}</span>
            <b>{props.data.pitch.toFixed(2)}</b>
          </div>
          <div className={styles.imu1}>IMU</div>
        </div>
        
        <div className={styles.gas}>GAS</div>
        <SensorDisplayRanged 
      reading= {props.data.gasPWM}
      safeBoundLower = {80}
      safeBoundUpper = {100}
      sensorLabelText='Gas' 
      sensorWarningLabel = 'Gas'
      sensorTop="510px" 
      sensorLeft="325px"/>    
      </div>
  )
}

export default RightSensors;

// export default class RightSensors extends Component {
  
//   render() {
//     return (
//       <div className={styles.rightSensors}>
//         <div className={styles.rightBorder} />
//         <PowerBox labelText="TOTAL HIGH POWER CONSUMPTION"></PowerBox>
//         <PowerBox powerTop='155px' labelText="TOTAL LOW POWER CONSUMPTION"></PowerBox>
//         <div className={styles.waterMetrics}>
//           <div className={styles.waterMetrics1}>WATER METRICS</div>
//           <div className={styles.border2} />
//           <div className={styles.waterMetricsChild} />
//           <div className={styles.waterMetricsItem} />
//           <div className={styles.waterMetricsInner} />
//           <div className={styles.rateCondition}>Rate Condition</div>
//           <div className={styles.totalConsumed}>Total Consumed</div>
//           <div className={styles.div18}>{`99 `}</div>
//           <div className={styles.div19}>{`99 `}</div>
//           <div className={styles.div20}>{`99 `}</div>
//           <div className={styles.rateSolution}>Rate Solution</div>
//           <div className={styles.galsec}>gal/sec</div>
//           <div className={styles.galsec1}>gal/sec</div>
//           <div className={styles.gal}>gal</div>
//         </div>
//         <div className={styles.linearActuators}>
//           <div className={styles.ellipseParent}>
//             <img className={styles.ellipseIcon} alt="" src="/ellipse-10.svg" />
//             <div className={styles.ellipseGroup}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-11.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//             <div className={styles.ellipseContainer}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-111.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//             <div className={styles.ellipseParent1}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-112.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//             <div className={styles.ellipseParent2}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-113.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//             <div className={styles.ellipseParent3}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-114.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//             <div className={styles.ellipseParent4}>
//               <img
//                 className={styles.frameChild13}
//                 alt=""
//                 src="/ellipse-115.svg"
//               />
//               <div className={styles.div21}>30</div>
//             </div>
//           </div>
//           <div className={styles.linearActuators1}>LINEAR ACTUATORS</div>
//           <div className={styles.border3} />
//           <div className={styles.extensionLengthsCm}>
//             Extension Lengths (CM)
//           </div>
//         </div>
//         <div className={styles.connections}>
//           <div className={styles.connectionsChild} />
//           <img className={styles.connectionsItem} alt="" src="/line-8.svg" />
//           <b className={styles.connections1}>CONNECTIONS</b>
//           <div className={styles.rectangleParent}>
//             <div className={styles.frameChild19} />
//             <b className={styles.dueConnected}>DUE: Connected</b>
//           </div>
//           <div className={styles.rectangleGroup}>
//             <div className={styles.frameChild19} />
//             <b className={styles.dueConnected}>MEGA: Connected</b>
//           </div>
//           <div className={styles.rectangleContainer}>
//             <div className={styles.frameChild19} />
//             <b className={styles.dueConnected}>VFD: Connected</b>
//           </div>
//         </div>
//         <div className={styles.imu}>
//           <div className={styles.imuChild} />
//           <img className={styles.imuItem} alt="" src="/line-17.svg" />
//           <div className={styles.absoluteDirectionNorthContainer}>
//             <span
//               className={styles.absoluteDirection}
//             >{`Absolute Direction: `}</span>
//             <b>North</b>
//           </div>
//           <div className={styles.pitch10}>
//             <span className={styles.absoluteDirection}>{`Pitch: `}</span>
//             <b>10°</b>
//           </div>
//           <div className={styles.imu1}>IMU</div>
//         </div>
        
//         <Sensor sensorLabelText= 'Gas' sensorTop = '515px' sensorLeft= '325px'></Sensor>
//       </div>
//     )
//   }
// }