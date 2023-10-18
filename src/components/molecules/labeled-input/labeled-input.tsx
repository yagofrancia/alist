import React, {PropsWithChildren} from 'react';
import {View} from 'react-native';
import Text from '../../atoms/text/text';

type LabeledInputProps = {
  label: string;
};

export default function LabeledInput({
  label,
  children,
}: PropsWithChildren<LabeledInputProps>) {
  return (
    <View>
      <Text typography="rubik15_auto_regular" color="grayMedium">
        {label}
      </Text>
      {children}
    </View>
  );
}
