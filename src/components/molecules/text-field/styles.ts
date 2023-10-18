import {StyleSheet} from 'react-native';
import R from '../../../res';

const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.foreground,
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 54,
    ...R.typographies.rubik15_auto_regular,
  },
});

export default styles;
