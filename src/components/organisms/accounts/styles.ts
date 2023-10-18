import {StyleSheet} from 'react-native';
import R from '../../../res';

const styles = StyleSheet.create({
  root: {
    backgroundColor: R.colors.backgroundSecondary,
    flex: 1,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
});

export default styles;
