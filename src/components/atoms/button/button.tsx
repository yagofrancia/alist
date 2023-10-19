import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from 'react-native';
import styles from './styles';
import MyText from '../text/text';
import R from '../../../res';

export enum ButtonMode {
  Filled,
  Text,
  Outlined,
}

type ButtonProps = {
  title: string;
  onPress: () => void;
  mode: ButtonMode;
  color?: keyof typeof R.colors;
};

export default function Button({
  title,
  onPress,
  mode,
  color = 'alert',
}: ButtonProps) {
  let modeStyle: StyleProp<ViewStyle> = {};
  let textColor = color;

  switch (mode) {
    case ButtonMode.Filled:
      modeStyle = {backgroundColor: R.colors[color]};
      textColor = 'foreground';
      break;
    case ButtonMode.Text:
      break;
    case ButtonMode.Outlined:
      modeStyle = {borderWidth: 1, borderColor: R.colors[color]};
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.root, modeStyle]}>
        <MyText color={textColor}>{title}</MyText>
      </View>
    </TouchableOpacity>
  );
}
