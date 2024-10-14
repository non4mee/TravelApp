import React, { useState } from 'react';
import { View, Text, Button, Alert, Picker } from 'react-native';

const PaymentMethodsScreen = ({ navigation }) => {
  const [selectedMethod, setSelectedMethod] = useState('Credit Card');

  const handlePayment = () => {
    switch (selectedMethod) {
      case 'Credit Card':
        navigation.navigate('StripePayment');
        break;
      case 'PayPal':
        Alert.alert('PayPal Payment', 'You selected PayPal. Functionality coming soon!');
        break;
      case 'Bank Transfer':
        Alert.alert('Bank Transfer', 'You selected Bank Transfer. Functionality coming soon!');
        break;
      case 'Cryptocurrency':
        Alert.alert('Cryptocurrency', 'You selected Cryptocurrency. Functionality coming soon!');
        break;
      default:
        Alert.alert('Invalid Payment Method');
        break;
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Choose Payment Method</Text>

      <Picker
        selectedValue={selectedMethod}
        style={{ height: 50, width: 250, marginBottom: 20 }}
        onValueChange={(itemValue) => setSelectedMethod(itemValue)}
      >
        <Picker.Item label="Credit Card" value="Credit Card" />
        <Picker.Item label="PayPal" value="PayPal" />
        <Picker.Item label="Bank Transfer" value="Bank Transfer" />
        <Picker.Item label="Cryptocurrency" value="Cryptocurrency" />
      </Picker>

      <Button title="Proceed with Payment" onPress={handlePayment} />
    </View>
  );
};

export default PaymentMethodsScreen;