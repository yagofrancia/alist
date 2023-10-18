import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import style from './styles';
import styles from './styles';
import R from '../../../res';
import Icon from '../atoms/icon';
import Text from '../atoms/text/text';

type ScreenContainerProps = {
  title?: String;
  rightIcon?: keyof typeof R.images;
  leftIcon?: keyof typeof R.images | null;
};

export default function ScreenContainer({
  children,
  title,
  rightIcon,
  leftIcon = 'ic_add',
}: PropsWithChildren<ScreenContainerProps>) {
  function renderHeader() {
    return (
      <View style={styles.headerRoot}>
        {!!leftIcon && (
          <Icon name="ic_add" height={20} width={20} style={styles.leftIcon} />
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
          <Icon name="ic_add" height={20} width={20} style={styles.rightIcon} />
        )}
      </View>
    );
  }
  return (
    <View style={style.root}>
      {renderHeader()}
      {children}
    </View>
  );
}
