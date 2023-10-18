import React from 'react';
import {Image, ImageStyle, StyleProp, TouchableOpacity} from 'react-native';
import R from '../../../res';

type IconProps = {
  name: keyof typeof R.images;
  height: number;
  width: number;
  style?: StyleProp<ImageStyle>;
  onPress?: () => void;
};

export default function Icon({name, width, height, style, onPress}: IconProps) {
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress}>
      <Image
        resizeMode="contain"
        source={R.images[name]}
        width={width}
        height={height}
        style={style}
      />
    </TouchableOpacity>
  );
}
