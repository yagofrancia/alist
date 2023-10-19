import React from 'react';
import Modal from '../../molecules/modal';
import Text from '../../atoms/text/text';
import Button, {ButtonMode} from '../../atoms/button';
import {View} from 'react-native';
import styles from './styles';
import Icon from '../../atoms/icon';
import R from '../../../res';

export var showAlert = (_message: AlertDetails) => {};

type AlertDetails = {
  message: string | JSX.Element;
  confirmText: string;
  dismissText?: string;
  image?: keyof typeof R.images;
  imageColor?: keyof typeof R.colors;
  onConfirm: () => void;
  onDismiss?: () => void;
};

export default function Alert() {
  const [visible, setVisible] = React.useState(false);
  const [params, setParams] = React.useState<AlertDetails>({} as AlertDetails);

  showAlert = (p: AlertDetails) => {
    setParams(p);
    setVisible(true);
  };

  function handleDismiss() {
    setVisible(false);
  }

  function handleConfirm() {
    params.onConfirm();
    handleDismiss();
  }

  return (
    <Modal
      visible={visible}
      onDismiss={handleDismiss}
      contentContainerStyle={styles.root}>
      <View style={styles.content}>
        {!!params.image && (
          <Icon
            name={params.image}
            height={50}
            width={50}
            color={params.imageColor}
          />
        )}
        <Text style={styles.message}>{params.message}</Text>
      </View>
      <View style={styles.action}>
        <Button
          mode={ButtonMode.Text}
          title={params.dismissText ?? 'Cancelar'}
          onPress={params.onDismiss ?? handleDismiss}
        />
        <Button
          mode={ButtonMode.Filled}
          title={params.confirmText}
          onPress={handleConfirm}
        />
      </View>
    </Modal>
  );
}
