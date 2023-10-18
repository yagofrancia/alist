import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import R from '../../../../res';

type IconProps = {
  name: keyof typeof R.images;
  height: number;
  width: number;
  style?: StyleProp<ImageStyle>;
};

export default function Icon({name, width, height, style}: IconProps) {
  return (
    <Image
      resizeMode="contain"
      source={R.images[name]}
      width={width}
      height={height}
      style={style}
    />
  );
}
