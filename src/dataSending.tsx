export interface dataToSend {
    powerState: number,
    solenoidState: number
  }
  
export const defaultDTS: dataToSend = {
    powerState: 0,
    solenoidState: 1
};

export let dts: dataToSend = {
    powerState: 0,
    solenoidState: 1
};
