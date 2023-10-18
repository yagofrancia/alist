import React, {PropsWithChildren} from 'react';
import {StatusBar, View} from 'react-native';
import style from './styles';
import styles from './styles';
import R from '../../../res';
import Icon from '../../atoms/icon';
import Text from '../../atoms/text/text';
import {useNavigation} from '@react-navigation/native';

type ScreenContainerProps = {
  title?: String;
  rightIcon?: keyof typeof R.images;
  leftIcon?: keyof typeof R.images | null;
  onLeftIconPress?: () => void;
  onRightIconPress?: () => void;
};

export default function ScreenContainer({
  children,
  title,
  rightIcon,
  leftIcon = 'ic_add',
  onLeftIconPress,
  onRightIconPress,
}: PropsWithChildren<ScreenContainerProps>) {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <View style={styles.headerRoot}>
        {!!leftIcon && (
          <Icon
            name={leftIcon}
            height={20}
            width={20}
            style={styles.leftIcon}
            onPress={onLeftIconPress ?? navigation.goBack}
          />
        )}
        {!!title && (
          <Text
            typography="roboto22_auto_bold"
            style={styles.title}
            color="foreground">
            {title}
          </Text>
        )}
        {!!rightIcon && (
          <Icon
            name={rightIcon}
            height={20}
            width={20}
            style={styles.rightIcon}
            onPress={onRightIconPress}
          />
        )}
      </View>
    );
  }
  return (
    <View style={style.root}>
      <StatusBar backgroundColor={R.colors.background} />
      {renderHeader()}
      {children}
    </View>
  );
}
