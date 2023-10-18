import React, {PropsWithChildren} from 'react';
import {Text as RNText, StyleProp, TextStyle} from 'react-native';
import styles from './styles';
import R from '../../../res';

type TextProps = {
  typography?: keyof typeof R.typographies;
  color?: keyof typeof R.colors;
  style?: StyleProp<TextStyle>;
};

export default function Text({
  children,
  style,
  color,
  typography = 'roboto16_auto_regular',
}: PropsWithChildren<TextProps>) {
  const customStyle: StyleProp<TextStyle> = {};
  if (color) {
    customStyle.color = R.colors[color];
  }

  return (
    <RNText
      style={[styles.root, R.typographies[typography], customStyle, style]}>
      {children}
    </RNText>
  );
}
