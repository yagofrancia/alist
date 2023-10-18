import {StyleSheet} from 'react-native';
import R from '../../../res';

const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.foreground,
    paddingVertical: 18,
    paddingHorizontal: 13,
    marginBottom: 15,
    borderRadius: 13,
    flexDirection: 'row',
  },
  label: {
    flex: 1,
  },
});

export default styles;
