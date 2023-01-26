import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import platform from '../../helpers/platform'
import Button from '../../components/molecules/Button'

function WelcomeScreen({ navigation }) {
  const { t } = useTranslation('welcome-screen');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>[LOGO]</Text>
      <Text style={styles.title}>A main sentence will go here when I have one.</Text>
      <Button
        styleBtn={styles.button}
        icon={require('../../img/email.png')}
        text='Continue with email'
        onPress={() => navigation.navigate('Auth')}
      />
      <View style={styles.footer}>
        <Text style={styles.footerText}>By registering, you agree to our
        <Text style={styles.boldText}> Terms of Service </Text>
           and our
        <Text style={styles.boldText}> Privacy Policy</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: platform.primary,
    paddingHorizontal: 35
  },
  logo: {
    fontSize: 30,
    color: platform.white,
    paddingTop: platform.topSpace + 54,
    paddingLeft: 2
  },
  title: {
    color: platform.white,
    fontSize: 45,
    paddingTop: 101
  },
  button: {
    flexDirection: 'row',
    marginTop: 80,
  },
  footer: {
    paddingVertical: 200,
    paddingHorizontal: 15
  },
  footerText: {
    fontSize: 12,
    textAlign: 'center',
    color: platform.white
  },
  boldText: {
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  }
});

export default WelcomeScreen;
