import { FunctionComponent, useMemo } from "react";
import CSS, { Property } from "csstype";
import styles from "./DangerBackground.module.css";

type DangerBackgroundType = {
  /** Style props */
  dangerBackgroundBorder?: Property.Border;
  dangerBackgroundBoxSizing?: Property.BoxSizing;
  dangerBackgroundBottom?: Property.Bottom;
  dangerBackgroundLeft?: Property.Left;
};

const DangerBackground: FunctionComponent<DangerBackgroundType> = ({
  dangerBackgroundBorder,
  dangerBackgroundBoxSizing,
  dangerBackgroundBottom,
  dangerBackgroundLeft,
}) => {
  const dangerBackgroundStyle: CSS.Properties = useMemo(() => {
    return {
      border: dangerBackgroundBorder,
      boxSizing: dangerBackgroundBoxSizing,
      bottom: dangerBackgroundBottom,
      left: dangerBackgroundLeft,
    };
  }, [
    dangerBackgroundBorder,
    dangerBackgroundBoxSizing,
    dangerBackgroundBottom,
    dangerBackgroundLeft,
  ]);

  return (
    <div className={styles.dangerBackground} style={dangerBackgroundStyle} />
  );
};

export default DangerBackground;
