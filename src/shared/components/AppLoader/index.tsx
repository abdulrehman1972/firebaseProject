import React from "react";
import { ActivityIndicator } from "react-native";
import Modal from "react-native-modal";
import { THEME } from "../../theme";

interface Props {
  isVisible: boolean;
}

const AppLoader = (props: Props) => {
  return (
    <Modal isVisible={props.isVisible} backdropOpacity={0.5}>
      <ActivityIndicator color={THEME.COLORS.yellow} size='large' />
    </Modal>
  );
};

export default AppLoader;
