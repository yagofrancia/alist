import React, {PropsWithChildren} from 'react';
import {Portal, Modal as RNPModal} from 'react-native-paper';
import styles from './styles';
import {StyleProp, ViewProps} from 'react-native';

type ModalProps = {
  visible: boolean;
  contentContainerStyle?: StyleProp<ViewProps>;
  onDismiss: () => void;
};

export default function Modal({
  visible,
  contentContainerStyle,
  onDismiss,
  children,
}: PropsWithChildren<ModalProps>) {
  return (
    <Portal
      // get the collor from the R
      theme={{
        colors: {backdrop: 'rgba(0,0,0,0.4)'},
      }}>
      <RNPModal
        onDismiss={onDismiss}
        visible={visible}
        style={styles.root}
        contentContainerStyle={[styles.content, contentContainerStyle]}>
        {children}
      </RNPModal>
    </Portal>
  );
}
