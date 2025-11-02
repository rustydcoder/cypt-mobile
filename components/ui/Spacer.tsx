import { DimensionValue, View } from "react-native";

type SpacerProps = {
  width?: DimensionValue;
  height?: DimensionValue;
};

const Spacer = ({ width, height }: SpacerProps) => {
  return <View style={{ width, height }} />;
};

export default Spacer;
