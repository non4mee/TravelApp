import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import platform from '../../helpers/platform'

import CustomInput from '../../components/molecules/CustomInput'
import Button from '../../components/molecules/Button'

import { saveUser } from '../../helpers/asyncStorages'

function AuthScreen({ navigation }) {
  const [email, setEmail] = useState("josh@gmail.com")
  const [password, setPassword] = useState('')
  const { t } = useTranslation('welcome-screen');
  const disabled = email.length < 14
  const disabledSign = password.length < 6
  const signIn = () => {
    _storeData
    navigation.navigate('EditProfile')
  }
  _storeData = async () => {
  try {
    await AsyncStorage.setItem('email', value);
  } catch (error) {
    // Error saving data
  }
}
console.log('store', _storeData)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let’s make it official.</Text>
      <CustomInput
        styleContainer={styles.input}
        subtitle="Email"
        placeholder="name@email.com"
        _value={email}
        _onChangeText={setEmail}
      />
      {password && (
        <>
          <CustomInput
            styleContainer={styles.input}
            styleSub={styles.subtitle}
            styleInput={styles.passwordText}
            subtitle="Password"
            _value={password}
            _onChangeText={setPassword}
            secureTextEntry
            icon={require('../../img/eye.png')}
          />
          <Text style={styles.underText}>
            Minumim 6 characters & 1 special character
          </Text>
          <Text
            style={styles.resetText}
            onPress={() => navigation.navigate('EnterCode')}
          >
            Reset password
          </Text>
        </>
      )}
      {!password && (
        <Button
          styleBtn={styles.button}
          styleText={styles.textBtn}
          disabled={disabled}
          text="Continue"
          onPress={setPassword}
        />
      )}
      {password && (
        <Button
          styleBtn={styles.button}
          styleText={styles.textBtn}
          disabled={disabledSign}
          text="Sign Up"
          onPress={signIn}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: platform.topSpace + 29,
    paddingHorizontal: 36
  },
  title: {
    fontSize: 36,
    color: platform.primary,
    paddingHorizontal: 20
  },
  input: {
    paddingTop: 50
  },
  button: {
    marginTop: 180,
    backgroundColor: platform.primary,
    justifyContent: 'center'
  },
  textBtn: {
    color: platform.white
  },
  passwordText: {
    color: platform.black
  },
  underText: {
    color: platform.light_grey,
    fontSize: 12,
    paddingTop: 5
  },
  wrongPass: {
    color: platform.red,
    fontSize: 12,
    paddingTop: 9
  },
  resetText: {
    color: platform.light_black,
    paddingTop: 34
  }
});

export default AuthScreen;
