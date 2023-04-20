import { match } from "assert";
import { parse } from "path";
import { useEffect } from 'react';
import io from 'socket.io-client';
import { HighPower } from "./components/HighPower";
import GroundFault from "./components/MiddleSection/GroundFault";



/** The metrics received from the TBM. */
export interface TbmMetrics {
  totalThrust: number;
  cutterheadTorque: number;
  pressureA: number;
  pressureB: number;
  pressureC:number;
  pressureD: number;
  pressureE: number;
  pressureF: number;
  pressureG: number;
  pressureH: number;
  pressureI: number;
  pressureJ: number;
  naturalGas: 'SAFE' | 'DETECTED' | 'EXPLOSIVE';
  vibrations: number;
  voltage: number;
  wattage: number;
  highPowerCurrent: number;
  lowPowerCurrent: number;
  totalPowerConsumption: number;
  waterConsumptionRate: number;
  waterConsumptionTotal: number;
  cutterheadSpeed: number;
  cutterheadDirectionIsClockwise: boolean;
  linearActuatorExtensionLengthA: number;
  linearActuatorExtensionLengthB: number;
  linearActuatorExtensionLengthC: number;
  linearActuatorExtensionLengthD: number;
  linearActuatorExtensionLengthE: number;
  linearActuatorExtensionLengthF: number;
  pitch: number;
  heading: number;
  tbmIsPoweredUp: boolean;
  totalDistance: number;
  speed: number;
  acceleration: number;
  depth: number;
  signalStrength: number;
  latitude: number;
  longitude: number;
  temperatureA: number;
  temperatureB: number;
  temperatureC: number;
  temperatureD: number;
  temperatureE: number;
  temperatureF: number;
  temperatureG: number;
  temperatureH: number;
  xMagnetometer: number;
  yMagnetometer: number;
  gasPWM: number;
  stringPotentiometer: number;
  EBox1Indicators: boolean;
  EBox2Indicators: boolean;
  EBox3Indicators: boolean;
  PWMtoVoltage: number;
  HPUSolenoid: string;
  ManifoldSolenoid1: string;
  ManifoldSolenoid2: string;
  ManifoldSolenoid3: string;
  ManifoldSolenoid4: string;
  groundFault1: boolean;
  groundFault2: boolean;
  
}
/** The default values for the metrics before any real metrics have been
 * received from the TBM. */
export const metricsDefaultValues: TbmMetrics = {
  totalThrust: 0,
  cutterheadTorque: 0,
  pressureA: 0,
  pressureB: 0,
  pressureC:0,
  pressureD: 0,
  pressureE: 0,
  pressureF: 0,
  pressureG: 0,
  pressureH: 0,
  pressureI: 0,
  pressureJ: 0,
  naturalGas: 'SAFE',
  vibrations: 0,
  voltage: 0,
  wattage: 0,
  highPowerCurrent: 0,
  lowPowerCurrent: 0,
  totalPowerConsumption: 0,
  waterConsumptionRate: 0,
  waterConsumptionTotal: 0,
  cutterheadSpeed: 0,
  cutterheadDirectionIsClockwise: true,
  linearActuatorExtensionLengthA: 0,
  linearActuatorExtensionLengthB: 0,
  linearActuatorExtensionLengthC: 0,
  linearActuatorExtensionLengthD: 0,
  linearActuatorExtensionLengthE: 0,
  linearActuatorExtensionLengthF: 0,
  pitch: 0,
  heading: 0,
  tbmIsPoweredUp: false,
  totalDistance: 0,
  speed: 0,
  acceleration: 0,
  depth: 0,
  signalStrength: 0,
  latitude: 30.1559364,
  longitude: -97.4031088,
  temperatureA: 0,
  temperatureB: 0,
  temperatureC: 0,
  temperatureD: 0,
  temperatureE: 0,
  temperatureF: 0,
  temperatureG: 0,
  temperatureH: 0,
  xMagnetometer: 0,
  yMagnetometer: 0,
  gasPWM: 0,
  stringPotentiometer: 0,
  EBox1Indicators: true,
  EBox2Indicators: true,
  EBox3Indicators: true,
  PWMtoVoltage: 0,
  HPUSolenoid: "N",
  ManifoldSolenoid1: "N",
  ManifoldSolenoid2: "N",
  ManifoldSolenoid3: "N",
  ManifoldSolenoid4: "N",
  groundFault1: false,
  groundFault2: false,
};

export let metricsValues: TbmMetrics = {
  totalThrust: 0,
  cutterheadTorque: 0,
  pressureA: 0,
  pressureB: 0,
  pressureC:0,
  pressureD: 0,
  pressureE: 0,
  pressureF: 0,
  pressureG: 0,
  pressureH: 0,
  pressureI: 0,
  pressureJ: 0,
  naturalGas: 'SAFE',
  vibrations: 0,
  voltage: 0,
  wattage: 0,
  highPowerCurrent: 0,
  lowPowerCurrent: 0, 
  totalPowerConsumption: 0,
  waterConsumptionRate: 0,
  waterConsumptionTotal: 0,
  cutterheadSpeed: 0,
  cutterheadDirectionIsClockwise: true,
  linearActuatorExtensionLengthA: 0,
  linearActuatorExtensionLengthB: 0,
  linearActuatorExtensionLengthC: 0,
  linearActuatorExtensionLengthD: 0,
  linearActuatorExtensionLengthE: 0,
  linearActuatorExtensionLengthF: 0,
  pitch: 0,
  heading: 0,
  tbmIsPoweredUp: false,
  totalDistance: 0,
  speed: 0,
  acceleration: 0,
  depth: 0,
  signalStrength: 0,
  latitude: 0,
  longitude: 0,
  temperatureA: 0,
  temperatureB: 0,
  temperatureC: 0,
  temperatureD: 0,
  temperatureE: 0,
  temperatureF: 0,
  temperatureG: 0,
  temperatureH: 0,
  xMagnetometer: 0,
  yMagnetometer: 0,
  gasPWM: 0,
  stringPotentiometer: 0,
  EBox1Indicators: true,
  EBox2Indicators: true,
  EBox3Indicators: true,
  PWMtoVoltage: 0,
  HPUSolenoid: "N",
  ManifoldSolenoid1: "N",
  ManifoldSolenoid2: "N",
  ManifoldSolenoid3: "N",
  ManifoldSolenoid4: "N",
  groundFault1: true,
  groundFault2: true
};

export const GUIMetrics: TbmMetrics = {
  totalThrust: 0,
  cutterheadTorque: 0,
  pressureA: 0,
  pressureB: 0,
  pressureC:0,
  pressureD: 0,
  pressureE: 0,
  pressureF: 0,
  pressureG: 0,
  pressureH: 0,
  pressureI: 0,
  pressureJ: 0,
  naturalGas: 'SAFE',
  vibrations: 0,
  voltage: 0,
  wattage: 0,
  highPowerCurrent: 0,
  lowPowerCurrent: 0,
  totalPowerConsumption: 0,
  waterConsumptionRate: 0,
  waterConsumptionTotal: 0,
  cutterheadSpeed: 0,
  cutterheadDirectionIsClockwise: true,
  linearActuatorExtensionLengthA: 0,
  linearActuatorExtensionLengthB: 0,
  linearActuatorExtensionLengthC: 0,
  linearActuatorExtensionLengthD: 0,
  linearActuatorExtensionLengthE: 0,
  linearActuatorExtensionLengthF: 0,
  pitch: 0,
  heading: 0,
  tbmIsPoweredUp: false,
  totalDistance: 0,
  speed: 0,
  acceleration: 0,
  depth: 0,
  signalStrength: 0,
  latitude: 0,
  longitude: 0,
  temperatureA: 0,
  temperatureB: 0,
  temperatureC: 0,
  temperatureD: 0,
  temperatureE: 0,
  temperatureF: 0,
  temperatureG: 0,
  temperatureH: 0,
  xMagnetometer: 0,
  yMagnetometer: 0,
  gasPWM: 0,
  stringPotentiometer: 0,
  EBox1Indicators: true,
  EBox2Indicators: true,
  EBox3Indicators: true,
  PWMtoVoltage: 0,
  HPUSolenoid: "N",
  ManifoldSolenoid1: "N",
  ManifoldSolenoid2: "N",
  ManifoldSolenoid3: "N",
  ManifoldSolenoid4: "N",
  groundFault1: true,
  groundFault2: true
};

export const updateGUIMetrics = (): TbmMetrics => {
  const next: TbmMetrics = {
      totalThrust: metricsValues.totalThrust,
      cutterheadTorque: metricsValues.cutterheadTorque,
      pressureA: metricsValues.pressureA,
      pressureB: metricsValues.pressureB,
      pressureC: metricsValues.pressureC,
      pressureD: metricsValues.pressureD,
      pressureE: metricsValues.pressureE,
      pressureF: metricsValues.pressureF,
      pressureG: metricsValues.pressureG,
      pressureH: metricsValues.pressureH,
      pressureI: metricsValues.pressureI,
      pressureJ: metricsValues.pressureJ,
      naturalGas: metricsValues.naturalGas,
      vibrations: metricsValues.vibrations,
      voltage: metricsValues.voltage,
      wattage: metricsValues.wattage,
      highPowerCurrent: metricsValues.highPowerCurrent,
      lowPowerCurrent: metricsValues.lowPowerCurrent,
      totalPowerConsumption: metricsValues.totalPowerConsumption,
      waterConsumptionRate: metricsValues.waterConsumptionRate,
      waterConsumptionTotal: metricsValues.waterConsumptionTotal,
      cutterheadSpeed: metricsValues.cutterheadSpeed,
      cutterheadDirectionIsClockwise: metricsValues.cutterheadDirectionIsClockwise,
      linearActuatorExtensionLengthA: metricsValues.linearActuatorExtensionLengthA,
      linearActuatorExtensionLengthB: metricsValues.linearActuatorExtensionLengthB,
      linearActuatorExtensionLengthC: metricsValues.linearActuatorExtensionLengthC,
      linearActuatorExtensionLengthD: metricsValues.linearActuatorExtensionLengthD,
      linearActuatorExtensionLengthE: metricsValues.linearActuatorExtensionLengthE,
      linearActuatorExtensionLengthF: metricsValues.linearActuatorExtensionLengthF,
      pitch: metricsValues.pitch,
      heading: metricsValues.heading,
      tbmIsPoweredUp: metricsDefaultValues.tbmIsPoweredUp,
      totalDistance: metricsDefaultValues.totalDistance,
      speed: metricsValues.speed,
      acceleration: metricsValues.acceleration,
      depth: metricsValues.depth,
      signalStrength: metricsValues.signalStrength,
      latitude: metricsValues.latitude,
      longitude: metricsValues.longitude,
      temperatureA: metricsValues.temperatureA,
      temperatureB: metricsValues.temperatureB,
      temperatureC: metricsValues.temperatureC,
      temperatureD: metricsValues.temperatureD,
      temperatureE: metricsValues.temperatureE,
      temperatureF: metricsValues.temperatureF,
      temperatureG: metricsValues.temperatureG,
      temperatureH: metricsValues.temperatureH,
      xMagnetometer: metricsValues.xMagnetometer,
      yMagnetometer: metricsValues.yMagnetometer,
      gasPWM: metricsValues.gasPWM,
      stringPotentiometer: metricsValues.stringPotentiometer,
      EBox1Indicators: metricsValues.EBox1Indicators,
      EBox2Indicators: metricsValues.EBox2Indicators,
      EBox3Indicators: metricsValues.EBox3Indicators,
      PWMtoVoltage: metricsValues.PWMtoVoltage,
      HPUSolenoid: metricsValues.HPUSolenoid,
      ManifoldSolenoid1: metricsValues.ManifoldSolenoid1,
      ManifoldSolenoid2: metricsValues.ManifoldSolenoid2,
      ManifoldSolenoid3: metricsValues.ManifoldSolenoid3,
      ManifoldSolenoid4: metricsValues.ManifoldSolenoid4,
      groundFault1: metricsValues.groundFault1,
      groundFault2: metricsValues.groundFault2
  }
  return next;
};

export function updateMetrics(data: string) {
  data = data.replace(/\r/g, "");

  let split = data.split(',');
  
  metricsValues.temperatureA = Number(split[0]);
  metricsValues.temperatureB = Number(split[1]);
  metricsValues.temperatureC= Number(split[2]);
  metricsValues.temperatureD = Number(split[3]);
  metricsValues.temperatureE = Number(split[4]);
  metricsValues.temperatureF = Number(split[5]);
  metricsValues.temperatureG = Number(split[6]);
  metricsValues.highPowerCurrent =parseFloat(split[7]);
  metricsValues.lowPowerCurrent =Number(split[8]);
  metricsValues.linearActuatorExtensionLengthA =parseFloat(split[9]);
  metricsValues.linearActuatorExtensionLengthB =parseFloat(split[10]);
  metricsValues.linearActuatorExtensionLengthC =parseFloat(split[11]);
  metricsValues.linearActuatorExtensionLengthD =parseFloat(split[12]);
  metricsValues.linearActuatorExtensionLengthE =parseFloat(split[13]);
  metricsValues.linearActuatorExtensionLengthF =parseFloat(split[14]);
  metricsValues.pitch =parseFloat(split[15]);
  metricsValues.xMagnetometer =parseFloat(split[16]);
  metricsValues.yMagnetometer =Number(split[17]);
  metricsValues.gasPWM =parseFloat(split[18]);
  metricsValues.stringPotentiometer =Number(split[19]);
  if (Number(split[20])==0){
    metricsValues.EBox1Indicators = false;
  }
  else{
    metricsValues.EBox1Indicators = true;
  }
  if (Number(split[21])==0){
    metricsValues.EBox2Indicators = false;
  }
  else{
    metricsValues.EBox2Indicators = true;
  }
  if (Number(split[22])==0){
    metricsValues.EBox3Indicators = false;
  }
  else{
    metricsValues.EBox3Indicators = true;
  }
  
  // metricsValues.EBox1Indicators=false; 
  metricsValues.EBox2Indicators =true; 
  metricsValues.EBox3Indicators =false;
  metricsValues.PWMtoVoltage =Number(split[23]);
  metricsValues.HPUSolenoid =split[24];
  metricsValues.ManifoldSolenoid1 =split[25];
  metricsValues.ManifoldSolenoid2 =split[26];
  metricsValues.ManifoldSolenoid3 =split[27];
  metricsValues.ManifoldSolenoid4 =split[28];
  metricsValues.pressureA =Number(split[29]);
  metricsValues.pressureB =Number(split[30]);
  metricsValues.pressureC =Number(split[31]);
  metricsValues.pressureD =Number(split[32]);
  metricsValues.pressureE =Number(split[33]);
  metricsValues.pressureF = Number(split[34]);
  metricsValues.pressureG =Number(split[35]);
  metricsValues.pressureH =Number(split[36]);
  metricsValues.pressureI =Number(split[37]);
  metricsValues.pressureJ = Number(split[38]);
  metricsValues.groundFault1 = false;
  metricsValues.groundFault2 = false;
}

  // export function tempUpdate(data: string){
  //   var ids = data.split(",");
  //   for (let i = 0; i <5; i++){
  //     var data = ids[i];
  //     matchComponent(i, ids[i], 0);
  //   }
  // }


