import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Divisao({ onPress }) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: '#FF872C' }]} onPress={onPress}>
      <Text style={styles.text}>÷</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { width: 65, height: 65, borderRadius: 18, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 32, color: '#FFFFFF', fontWeight: 'bold' }
});