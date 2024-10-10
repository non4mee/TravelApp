import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';

const StripePaymentScreen = () => {
  const { confirmPayment } = useStripe();
  const [cardDetails, setCardDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPaymentIntent = async () => {
    const response = await fetch('https://server.com/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 5000 }), // Example: 50.00 USD
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
      }
    } catch (err) {
      Alert.alert('Payment error', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Enter card details</Text>
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

export default StripePaymentScreen;