import { requireNativeComponent, ViewStyle } from 'react-native';

type PlantingPlanProps = {
  color: string;
  style: ViewStyle;
};

export const PlantingPlanViewManager = requireNativeComponent<PlantingPlanProps>(
'PlantingPlanView'
);

export default PlantingPlanViewManager;
