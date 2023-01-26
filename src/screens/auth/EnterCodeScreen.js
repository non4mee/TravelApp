import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';

import platform from '../../helpers/platform'
import CustomInputCode from '../../components/molecules/CustomInputeCode';

function EnterCodeScreen() {
  const { t } = useTranslation('welcome-screen');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter code</Text>
      <Text style={styles.subtitle}>
        A password reset email has been sent to your email account.
      </Text>
      <CustomInputCode/>
      <Text style={styles.resendText}>Resend email</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 35,
  },
  title: {
    paddingTop: 44,
    paddingBottom: 16,
    fontSize: 36,
    color: platform.primary
  },
  subtitle: {
    fontSize: 16
  },
  resendText: {
    color: platform.primary,
    paddingTop: 40
  }
});

export default EnterCodeScreen;
