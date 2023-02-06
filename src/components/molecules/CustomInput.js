import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, Image, Text } from 'react-native';
import platform from '../../helpers/platform'
import ButtonPicker from '../molecules/ButtonPicker'

function CustomInput({
  styleInput,
  _value,
  _onChangeText,
  disabled,
  placeholder,
  placeholderTextColor,
  secureTextEntry,
  styleContainer,
  subtitle,
  styleSub,
  icon,
  password,
  input,
  ...rest
}) {
  const [text, setText] = useState(_value)
  useEffect(() => {
    setText(_value === 'null' || !_value ? '' : _value)
  }, [_value, text])
  return(
    <View style={[styles.container, styleContainer]}>
      {!!subtitle &&
        <Text style={[styles.subtitle, password && styles.subtitleRed]}>
        {subtitle}
        </Text>
      }
      <View style={styles.body}>
        <TextInput
          value={text}
          editable={!disabled}
          style={[styles.textInput, styleInput]}
          autoCorrect={false}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor || platform.brandLight}
          selectionColor={platform.brandLight}
          underlineColorAndroid='transparent'
          onChangeText={newText => {
            setText(newText)
            if (typeof _onChangeText === 'function') {
              _onChangeText(newText)
            }
          }}
          {...rest}
        />
        {!!icon &&
          <Image
            style={styles.icon}
            source={icon}
            resizeMode="contain"
          />}
        {input && (
          input && (
            <ButtonPicker
              icon={require('../../img/arrow_up_done.png')}
            />
          )
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  subtitleRed: {
    color: platform.red
  },
  textInput: {
    flex: 1,
    minHeight: 44,
    fontSize: 16,
    borderBottomWidth: 1,
    textAlignVertical: 'top',
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 0,
    marginHorizontal: 16
  }
})

export default CustomInput
