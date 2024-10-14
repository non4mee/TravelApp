import React, { useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const StripePaymentScreen = ({ navigation }) => {
  const { confirmPayment } = useStripe();
  const [modalVisible, setModalVisible] = useState(false);
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(100); // Пример начального баланса
  const amount = 5000; // Example: 50.00 USD

  const fetchPaymentIntent = async () => {
    const response = await fetch('https://server.com/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });
    const { clientSecret } = await response.json();
    return clientSecret;
  };

  const handlePayment = async () => {
    if (!cardDetails?.complete) {
      Alert.alert('Invalid card details');
      return;
    }

    setLoading(true);
    try {
      const clientSecret = await fetchPaymentIntent();
      const { paymentIntent, error } = await confirmPayment(clientSecret, {
        type: 'Card',
        billingDetails: { name: 'John Doe', email: 'john@example.com' },
      });

      if (error) {
        Alert.alert('Payment failed', error.message);
      } else if (paymentIntent) {
        Alert.alert('Payment successful', `Payment ID: ${paymentIntent.id}`);
        setBalance(balance - amount / 100); // Обновляем баланс
        navigation.navigate('Balance', { balance: balance - amount / 100 }); // Переход на экран баланса
      }
    } catch (err) {
      Alert.alert('Payment error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Stripe Payment</Text>
      <CardField
        postalCodeEnabled={false}
        onCardChange={setCardDetails}
        style={{ width: '100%', height: 50, marginVertical: 30 }}
      />
      <Button
        title={loading ? 'Processing...' : 'Pay'}
        onPress={handlePayment}
        disabled={loading}
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default StripePaymentScreen;