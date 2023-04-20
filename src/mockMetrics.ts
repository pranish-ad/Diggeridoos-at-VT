// import { TbmMetrics } from './metrics';

// /** Reasonable starting points for mock metric values. */
// export const mockMetricsInitialValues: TbmMetrics = {
//   totalThrust: 4,
//   cutterheadTorque: 11,
//   pressureA:100,
//   pressureB:100,
//   pressureC: 100,
//   pressureD: 100,
//   pressureE: 100,
//   pressureF: 100,
//   pressureG: 100,
//   pressureH: 100,
//   pressureI: 100,
//   pressureJ: 100,
//   naturalGas: 'SAFE',
//   vibrations: 29,
//   voltage: 97,
//   wattage: 43,
//   current: 89,
//   totalPowerConsumption: 82,
//   waterConsumptionRate: 2,
//   waterConsumptionTotal: 19,
//   cutterheadSpeed: 8,
//   cutterheadDirectionIsClockwise: false,
//   linearActuatorExtensionLengthA: 1,
//   linearActuatorExtensionLengthB: 9,
//   linearActuatorExtensionLengthC: 5,
//   linearActuatorExtensionLengthD: 2,
//   linearActuatorExtensionLengthE: 6,
//   linearActuatorExtensionLengthF: 9,
//   pitch: Math.PI / 6,
//   heading: 30,
//   tbmIsPoweredUp: true,
//   totalDistance: 13,
//   speed: 3,
//   acceleration: 1,
//   depth: 1,
//   signalStrength: 4,
//   latitude: 36.1018298,
//   longitude: -115.1593918,
//   temperatureA: 15,
//   temperatureB: 75,
//   temperatureC: -12,
//   temperatureD: 63,
//   temperatureE: 98,
//   temperatureF: 94,
//   temperatureG: 0,
//   temperatureH: 46,
// };

// /**
//  * Change a value by a random amount. The amount of change is randomly chosen between `changeBoundA` and `changeBoundB`. It does not matter which boundary is greater than which other boundary. The boundaries could be the same, but the value would not change.
//  *
//  * @param currentValue The value used presently.
//  * @param changeBoundA One of the two limits that determine how much the value can change.
//  * @param changeBoundB One of the two limits that determine how much the value can change.
//  *
//  * @returns The value after it has had the change added to it. It is possible for the returned value to equal `currentValue`, even if `changeBoundA !== changeBoundB`.
//  */
export const changeByRandomAmount = (
  currentValue: number,
  changeBoundA: number,
  changeBoundB: number
): number => {
  const minChange = Math.min(changeBoundA, changeBoundB);
  const maxChange = Math.max(changeBoundA, changeBoundB);

  const change = minChange + Math.random() * (maxChange - minChange);

  return currentValue + change;
};

// /**
//  * Randomly changes the natural gas value. The natural gas value is not changed
//  * on every function call.
//  *
//  * @param currentValue The existing value for natural gas.
//  *
//  * @returns The next value for natural gas.
//  */
// const getNextNaturalGasValue = (
//   currentValue: 'SAFE' | 'DETECTED' | 'EXPLOSIVE'
// ) =>
//   (Math.random() < 0.01
//     ? ['SAFE', 'DETECTED', 'EXPLOSIVE'].filter((el) => el !== currentValue)[
//         Math.round(Math.random())
//       ]
//     : currentValue) as 'SAFE' | 'DETECTED' | 'EXPLOSIVE';

// /**
//  * Provides the next iteration of mock metric values.
//  *
//  * @param current The present mock metric values.
//  *
//  * @returns The updated mock metric values. Most metric values have likely changed in a reasonable way compared to `current`. However, it is possible that no values have changed.
//  */
// export const getNextMockMetrics = (current: TbmMetrics): TbmMetrics => {
//   const next: TbmMetrics = {
//     totalThrust: changeByRandomAmount(current.totalThrust, 0.1, 0.5),
//     cutterheadTorque: changeByRandomAmount(current.cutterheadTorque, 0.1, 0.5),
//     pressureA:changeByRandomAmount(current.pressureA,0.1,0.5),
//     pressureB: changeByRandomAmount(current.pressureB,0.1,0.5),
//     pressureC: changeByRandomAmount(current.pressureC,0.1,0.5),
//     pressureD: changeByRandomAmount(current.pressureD,0.1,0.5),
//     pressureE: changeByRandomAmount(current.pressureE,0.1,0.5),
//     pressureF: changeByRandomAmount(current.pressureF,0.1,0.5),
//     pressureG: changeByRandomAmount(current.pressureG,0.1,0.5),
//     pressureH: changeByRandomAmount(current.pressureH,0.1,0.5),
//     pressureI: changeByRandomAmount(current.pressureI,0.1,0.5),
//     pressureJ: changeByRandomAmount(current.pressureJ,0.1,0.5),
//     naturalGas: getNextNaturalGasValue(current.naturalGas),
//     vibrations: changeByRandomAmount(current.vibrations, 0.1, 0.5),
//     voltage: changeByRandomAmount(current.voltage, 0.1, 0.5),
//     wattage: changeByRandomAmount(current.wattage, 0.1, 0.5),
//     current: changeByRandomAmount(current.current, 0.1, 0.5),
//     totalPowerConsumption: changeByRandomAmount(
//       current.totalPowerConsumption,
//       0.5,
//       2
//     ),
//     waterConsumptionRate: changeByRandomAmount(
//       current.waterConsumptionRate,
//       0.5,
//       2
//     ),
//     waterConsumptionTotal: changeByRandomAmount(
//       current.waterConsumptionTotal,
//       0.5,
//       2
//     ),
//     cutterheadSpeed: changeByRandomAmount(current.cutterheadSpeed, 0.1, 0.5),
//     // Change the direction 5% of the time.
//     // cutterheadDirectionIsClockwise:
//     //   Math.random() <= 0.05
//     //     ? !current.cutterheadDirectionIsClockwise
//     //     : current.cutterheadDirectionIsClockwise,
//     cutterheadDirectionIsClockwise: current.cutterheadDirectionIsClockwise,
//     linearActuatorExtensionLengthA: changeByRandomAmount(
//       current.linearActuatorExtensionLengthA,
//       -0.0025,
//       0.0075
//     ),
//     linearActuatorExtensionLengthB: changeByRandomAmount(
//       current.linearActuatorExtensionLengthB,
//       -0.0025,
//       0.0075
//     ),
//     linearActuatorExtensionLengthC: changeByRandomAmount(
//       current.linearActuatorExtensionLengthC,
//       -0.0025,
//       0.0075
//     ),
//     linearActuatorExtensionLengthD: changeByRandomAmount(
//       current.linearActuatorExtensionLengthD,
//       -0.0025,
//       0.0075
//     ),
//     linearActuatorExtensionLengthE: changeByRandomAmount(
//       current.linearActuatorExtensionLengthE,
//       -0.0025,
//       0.0075
//     ),
//     linearActuatorExtensionLengthF: changeByRandomAmount(
//       current.linearActuatorExtensionLengthF,
//       -0.0025,
//       0.0075
//     ),
//     pitch: changeByRandomAmount(current.pitch, -0.05, 0.05),
//     heading: changeByRandomAmount(current.heading, -1, 1),
//     tbmIsPoweredUp: current.tbmIsPoweredUp,
//     totalDistance: changeByRandomAmount(current.totalDistance, 0.1, 0.5),
//     speed: changeByRandomAmount(current.speed, 0.1, 0.5),
//     acceleration: changeByRandomAmount(current.acceleration, 0.1, 0.5),
//     depth: changeByRandomAmount(current.depth, -0.001, 0.002),
//     signalStrength: Math.round(
//       changeByRandomAmount(current.signalStrength, -0.52, 0.54)
//     ),
//     latitude: changeByRandomAmount(current.latitude, 0.00001, 0.0001),
//     longitude: changeByRandomAmount(current.longitude, 0.00001, 0.0001),
//     temperatureA: changeByRandomAmount(current.temperatureA, -0.002, 0.004),
//     temperatureB: changeByRandomAmount(current.temperatureB, -0.002, 0.004),
//     temperatureC: changeByRandomAmount(current.temperatureC, -0.002, 0.004),
//     temperatureD: changeByRandomAmount(current.temperatureD, -0.002, 0.004),
//     temperatureE: changeByRandomAmount(current.temperatureE, -0.002, 0.004),
//     temperatureF: changeByRandomAmount(current.temperatureC, -0.002, 0.004),
//     temperatureG: changeByRandomAmount(current.temperatureD, -0.002, 0.004),
//     temperatureH: changeByRandomAmount(current.temperatureE, -0.002, 0.004),
//   };

//   return next;
// };
