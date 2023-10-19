import React from 'react';
import Modal from '../../molecules/modal';
import Text from '../../atoms/text/text';
import Button, {ButtonMode} from '../../atoms/button';

export var showAlert = (_message: AlertDetails) => {};

type AlertDetails = {
  message: string | JSX.Element;
  confirmText: string;
  dismissText?: string;
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
    <Modal visible={visible} onDismiss={handleDismiss}>
      <Text>{params.message}</Text>
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
    </Modal>
  );
}
