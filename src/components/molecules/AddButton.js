import React from "react";
import { StyleSheet, TouchableOpacity, Image } from "react-native";

function AddButton({ onPress, styleBtn }) {
  return (
    <TouchableOpacity
      style={[styles.button, styleBtn]}
      onPress={onPress}
    >
      <Image source={require('../../img/addBtn.png')} style={styles.icon} resizeMode="contain"/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {
    width: 56,
    marginRight: 56
  }
});

export default AddButton;
