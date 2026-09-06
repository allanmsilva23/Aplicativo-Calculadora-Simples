import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Resultado({ valor }) {
  if (valor === null) return null;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Resultado:</Text>
      <Text style={[styles.valor, typeof valor === 'string' && styles.erro]}>
        {valor}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: 'center',
    backgroundColor: '#202024',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 20,
    minWidth: '80%',
    borderWidth: 1,
    borderColor: '#323238',
  },
  label: {
    fontSize: 14,
    color: '#8C8C9A',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 5,
  },
  valor: {
    fontSize: 38,
    fontWeight: 'bold',
    color: '#04D361',
  },
  erro: {
    fontSize: 20,
    color: '#E96379',
  }
});