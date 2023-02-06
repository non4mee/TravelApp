import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity, Text } from "react-native";

import platform from "../../helpers/platform";

function CheckBox({ onPress }) {
  const [checked, isChecked] = useState(true)
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {checked ? (
        <TouchableOpacity style={styles.circle} onPress={() => isChecked(!checked)}/>
        ) : (
        <TouchableOpacity onPress={() => isChecked(!checked)}>
          <Image source={require('../../img/checkBox.png')} style={styles.checkBoxDone}/>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: 150,
        marginTop: 5,
        marginHorizontal: 5,
    },
    circle: {
        width: 21,
        height: 21,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: platform.primary
    },
    checkBoxDone: {
        width: 22,
        height: 22
    }
})

export default CheckBox
