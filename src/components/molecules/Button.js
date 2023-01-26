import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

import platform from '../../helpers/platform'

function Button({ styleBtn, onPress, icon, text, disabled, styleText }) {
  return (
    <TouchableOpacity
      style={[styles.button, styleBtn, disabled && styles.btnDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain"/>
      <Text style={[
        styles.text,
        disabled && styles.textDisabled,
        styleText
      ]}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 44,
    backgroundColor: platform.white,
    borderRadius: 30,
    paddingHorizontal: 40,
    alignItems: 'center'
  },
  icon: {
    width: 20,
    marginRight: 45
  },
  text: {
    color: platform.primary,
    fontSize: 16,
  },
  btnDisabled: {
    backgroundColor: platform.grey
  },
  textDisabled: {
    color: platform.disabledText,
    fontSize: 16
  }
});

export default Button;
