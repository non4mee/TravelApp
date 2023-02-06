import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

import platform from '../../helpers/platform'

function Button({ styleBtn, onPress, icon, disabled }) {
  return (
    <TouchableOpacity
      style={[styles.button, styleBtn, disabled && styles.btnDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,
    borderRadius: 30,
    alignItems: 'center',
    borderRadius: 10
  },
  icon: {
    width: 20,
    height: 20,
  },
  btnDisabled: {
    backgroundColor: platform.grey
  },
});

export default Button;
