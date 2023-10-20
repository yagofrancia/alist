import {StyleSheet} from 'react-native';
import R from '../../../res';

const styles = StyleSheet.create({
  root: {
    paddingTop: 10,
    paddingBottom: 35,
    paddingHorizontal: 15,
  },
  inputContainer: {
    backgroundColor: R.colors.foreground,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    height: 60,
    backgroundColor: 'transparent',
    flex: 1,
    ...R.typographies.rubik20_auto_regular,
  },
  icon: {
    marginLeft: 10,
  },
});

export default styles;
