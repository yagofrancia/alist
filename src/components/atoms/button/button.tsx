import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MyText from '../text/text';

export enum ButtonMode {
  Filled,
  Text,
  Outlined,
}

type ButtonProps = {
  title: string;
  onPress: () => void;
  mode: ButtonMode;
};

export default function Button({title, onPress}: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.root}>
        <MyText>{title}</MyText>
      </View>
    </TouchableOpacity>
  );
}
